#################################################################################
# HELPER TARGETS                                                                #
#################################################################################
.PHONY: _validate-poetry-installation
_validate-poetry-installation:
ifeq ($(shell command -v poetry),)
	@echo "poetry could not be found!"
	@echo "Please install poetry!"
	@echo "Ex.: 'curl -sSL \
	https://raw.githubusercontent.com/python-poetry/poetry/master/install-poetry.py  | python - \
	&& source $$HOME/.local/env'"
	@echo "see:"
	@echo "- https://python-poetry.org/docs/#installation"
	@echo "Note: 'pyenv' recommended for Python version management"
	@echo "see:"
	@echo "- https://github.com/pyenv/pyenv"
	@echo "- https://python-poetry.org/docs/managing-environments/"
	false
else
	@echo "Using $(shell poetry --version) in $(shell which poetry)"
endif

.PHONY: update-pyproject-deps-to-latest
# Based on: https://github.com/python-poetry/poetry/issues/461#issuecomment-920663114
## Updates all dependencies in `pyproject.toml` to their latest versions
update-pyproject-deps-to-latest: MAIN_DEPS_EXPORT_FILE:=main_deps.txt
update-pyproject-deps-to-latest: DEV_DEPS_EXPORT_FILE:=dev_deps.txt
update-pyproject-deps-to-latest: DOCS_DEPS_EXPORT_FILE:=docs_deps.txt
update-pyproject-deps-to-latest:
	poetry show --outdated --tree --only main | grep -v -e "[├,│,└].*" | cut -d " " -f 1 | sed 's/$$/\@latest/g' > $(MAIN_DEPS_EXPORT_FILE)
	poetry show --outdated --tree --only dev | grep -v -e "[├,│,└].*" | cut -d " " -f 1 | sed 's/$$/\@latest/g' > $(DEV_DEPS_EXPORT_FILE)
	poetry show --outdated --tree --only docs | grep -v -e "[├,│,└].*" | cut -d " " -f 1 | sed 's/$$/\@latest/g' > $(DOCS_DEPS_EXPORT_FILE)
	cat $(MAIN_DEPS_EXPORT_FILE) | xargs poetry add -vvv --group=main
	cat $(DEV_DEPS_EXPORT_FILE) | xargs poetry add -vvv --group=dev
	cat $(DOCS_DEPS_EXPORT_FILE) | xargs poetry add -vvv --group=docs
	rm $(MAIN_DEPS_EXPORT_FILE) $(DEV_DEPS_EXPORT_FILE) $(DOCS_DEPS_EXPORT_FILE)

.PHONY: update-dependencies
## Update and install Python dependencies,
## updating packages in `poetry.lock` with any newer versions
## that adhere to `pyproject.toml` version range constraints
update-dependencies:
	poetry update --lock
ifneq (${CI}, true)
	$(MAKE) install-dependencies
endif

.PHONY: install-dependencies
## Install Python dependencies specified in `poetry.lock`
install-dependencies:
	poetry install --no-interaction --no-root --with dev,docs -vv
#{%- if cookiecutter.adr_documentation_support == 'yes' %}
	# Install node ADR management library
	poetry run nodeenv --python-virtualenv --jobs=$(NUM_PROCS)
	poetry run npm install -g --no-package-lock --no-save log4brains
#{%- endif %}

.PHONY: install-project
## Install {} source code (in editable mode)
install-project:
	poetry install --only-root --no-interaction -vv
	$(MAKE) clean

.PHONY: clean
## Delete all compiled Python files
clean:
	find . -type f -name "*.py[co]" -delete
	find . -type d -name "__pycache__" -delete
	# Clean up files in source directories that may have been generated from C extension compilation
	find . -type f -name "*.so" -delete -maxdepth 2
	find . -type f -name "*.pyd" -delete -maxdepth 2

.PHONY: get-project-version-number
## Echo project's canonical version number
get-project-version-number:
	@poetry version --short

#################################################################################
# COMMANDS                                                                      #
#################################################################################
.PHONY: provision-environment
## Set up a Python virtual environment with installed project dependencies
provision-environment: _validate-poetry-installation install-dependencies install-project

.PHONY: install-pre-commit-hooks
## Install git pre-commit hooks locally
install-pre-commit-hooks:
	poetry run pre-commit install

#{%- if cookiecutter.project_type == 'package' %}
.PHONY: package
## Build project package(s)
package:
	tox -e package
#{%- endif %}

#  Note: The new version should ideally be a valid semver string or a valid bump rule:
#  "patch", "minor", "major", "prepatch", "preminor", "premajor", "prerelease".
.PHONY: bump-commit-and-push-project-version-number-%
##  *ATOMICALLY*:
##  1.) Bump the version of the project
##  2.) Write the new version back to `pyproject.toml` (assuming a valid bump rule is provided)
##  3.) Commit the version bump to VCS
##  4.) Push the commit to the remote repository
##  (e.g.,
##  `bump-commit-and-push-project-version-number-patch`,
##  `bump-commit-and-push-project-version-number-minor`,
##  etc.)
bump-commit-and-push-project-version-number-%: VERSION_NUM_FILE:=pyproject.toml
bump-commit-and-push-project-version-number-%:
	# shell out to ensure next line gets updated version number;
	# directly running `poetry version $*` will cause next line to NOT pick up the version bump
	@echo "$(shell poetry version $*)"
	@export NEW_VER_NUM=$(shell $(MAKE) get-project-version-number) && \
		export COMMIT_MSG=":bookmark: Bump version number to \`$${NEW_VER_NUM}\`" && \
		git commit $(VERSION_NUM_FILE) -m "$${COMMIT_MSG}" && \
		git push \
	|| git checkout HEAD -- $(VERSION_NUM_FILE) # Rollback `VERSION_NUM_FILE` file on failure
