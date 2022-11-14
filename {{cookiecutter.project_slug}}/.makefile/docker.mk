#################################################################################
# GLOBALS                                                                       #
#################################################################################
REGISTRY_NAMESPACE = {{cookiecutter.container_registry_namespace}}
DOCKER_REPOSITORY = $(REGISTRY_NAMESPACE)/$(PROJECT_NAME)

IMG := $(DOCKER_REPOSITORY):$(TAG)
LATEST_IMG := $(DOCKER_REPOSITORY):latest

.PHONY: get-docker-img-strong-version-tag
get-docker-img-strong-version-tag:
	@echo $(IMG)

.PHONY: get-docker-img-latest-tag
get-docker-img-latest-tag:
	@echo $(LATEST_IMG)

#################################################################################
# HELPER TARGETS                                                                #
#################################################################################
# Check that given variables are set and all have non-empty values,
# die with an error otherwise.
#
# Params:
#   1. Variable name(s) to test.
#   2. (optional) Error message to print.
check_defined = \
	$(strip $(foreach 1,$1, \
		$(call __check_defined,$1,$(strip $(value 2)))))
__check_defined = \
	$(if $(value $1),, \
	  $(error Undefined $1$(if $2, ($2))))

.PHONY: _validate-req-env-vars
_validate-req-env-vars:
	$(call check_defined, REQ_ENV_VARS, Error: Required list of env vars to validate as defined not set!)
	$(foreach REQ_ENV_VAR,$(REQ_ENV_VARS),$(call check_defined, $(REQ_ENV_VAR), Error: Required env var not set!))

.PHONY: pull-container
pull-container:
## Pull {{cookiecutter.project_slug}} container
pull-container:
	- docker pull $(LATEST_IMG)

.PHONY: push-container
push-container:
## Push {{cookiecutter.project_slug}} container
push-container: build-container
	docker push $(IMG)
	docker push $(LATEST_IMG)

.PHONY: build-container
build-container: export DOCKER_BUILDKIT=1
## Build {{cookiecutter.project_slug}} container
build-container:
	docker build --tag $(IMG) .
	@echo Built $(IMG)
	@if ! [ "$(TAG)" = latest ]; then \
		docker tag $(IMG) $(LATEST_IMG) && \
		echo Built $(LATEST_IMG); \
	fi

.PHONY: stop-container
## Stop container forcefully (i.e., when keyboard interrupts are disabled)
stop-container:
	- docker stop $(PROJECT_NAME)
	- docker rm $(PROJECT_NAME)

#################################################################################
# COMMANDS                                                                      #
#################################################################################
#{% set PROJECT_TYPE = 'jupyter' if cookiecutter.jupyter_notebook_project == 'yes' else 'project' %}
.PHONY: deploy-{{ PROJECT_TYPE }}-docker-container-local
## Deploy locally-built dockerized {{ PROJECT_TYPE }} environment with preloaded dependencies
deploy-{{ PROJECT_TYPE }}-docker-container-local: build-container deploy-container

.PHONY: deploy-{{ PROJECT_TYPE }}-docker-container
## Deploy downloaded dockerized {{ PROJECT_TYPE }} environment with preloaded dependencies
deploy-{{ PROJECT_TYPE }}-docker-container: pull-container deploy-container

.PHONY: deploy-container
deploy-container: BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER ?= false
deploy-container: IS_INTERACTIVE_SESSION ?= false
{% if PROJECT_TYPE == 'jupyter' -%} deploy-container: PORT?=8888 {%- endif %}
# If you want to validate that a set of pre-defined env vars are specified
# prior to container launch, list them in the REQ_ENV_VARS array
deploy-container: REQ_ENV_VARS := BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER IS_INTERACTIVE_SESSION {% if PROJECT_TYPE == 'jupyter' -%} PORT {%- endif %}
deploy-container: _validate-req-env-vars stop-container
	{%- if PROJECT_TYPE == 'jupyter' %}
	@echo "Launching Jupyter Notebook on port $(PORT)" {% else %}
	@echo "Launching $(PROJECT_NAME) container"
	{%- endif %}
	@if [ "$(IS_INTERACTIVE_SESSION)" != false ]; then \
		export INTERACTIVE_SESSION_ARGS="--interactive --tty --entrypoint bash"; \
	fi && \
	if [ "$(BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER)" != false ]; then \
		export BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER_ARGS="--mount type=bind,source=$$(pwd)/$(SRC_DIR),target=/app/$(SRC_DIR)"; \
	fi && \
	docker run \
 	  --name $(PROJECT_NAME) {% if PROJECT_TYPE == 'jupyter'-%} --publish $(PORT):8888 {%- endif %} \
 	  $${INTERACTIVE_SESSION_ARGS} \
 	  $${BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER_ARGS} \
 	  -w /app/$(SRC_DIR) \
 	  $(LATEST_IMG)
	$(MAKE) stop-container
