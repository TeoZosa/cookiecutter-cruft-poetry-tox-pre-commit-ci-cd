#################################################################################
# HELPER TARGETS                                                                #
#################################################################################
.PHONY: generate-requirements
## Generate project requirements files from `pyproject.toml`
generate-requirements:
	poetry export --format requirements.txt --without-hashes --output requirements.txt # subset
	poetry export --with dev --format requirements.txt --without-hashes --output requirements-dev.txt # superset w/o docs
	poetry export --with dev,docs --format requirements.txt --without-hashes --output requirements-all.txt # superset

.PHONY: clean-requirements
## Clean generated project requirements files
clean-requirements:
	find . -type f -name "requirements*.txt" -delete -maxdepth 1

.PHONY: tox-%
## Run specified tox testenvs
tox-%: generate-requirements
	poetry run tox -e "$*" -- $(POSARGS)
	$(MAKE) clean-requirements

#################################################################################
# COMMANDS                                                                      #
#################################################################################
.PHONY: test
ifeq (${CI}, true)
test: export TOX_PARALLEL_NO_SPINNER=1
endif
## Run pre-defined test suite via tox
test: generate-requirements
	poetry run tox run-parallel
	$(MAKE) clean-requirements

.PHONY: test-%
## Run Python version-specific tests (e.g., `make test-py39`)
test-%:
	$(MAKE) tox-$*,coverage

#{%- if cookiecutter.jupyter_notebook_project != 'yes' %}
.PHONY: performance-benchmarks
## Run performance benchmark tests
performance-benchmarks:
	$(MAKE) performance-benchmarks-"{pure_python,c_library}"

.PHONY: performance-benchmarks-%
# Run library-specific (viz. Python or C) performance benchmark tests
performance-benchmarks-%:
	$(MAKE) tox-"py3{8,9,10,11}-benchmark-$*"

# Mutation testing modifies the code in small ways that should produce incorrect semantics
# If a test suite is sufficiently strong, this "mutated" code should caught by the suite,
# thus causing tests to fail.
.PHONY: test-mutations
## Run mutation testing to validate test suite robustness
test-mutations:
	$(MAKE) tox-mutmut
#{%- endif %}

.PHONY: lint
## Run full static analysis suite for local development
lint:
	$(MAKE) scan-dependencies
	$(MAKE) pre-commit

.PHONY: scan-dependencies
## Scan dependencies for security vulnerabilities
scan-dependencies:
	$(MAKE) tox-security

.PHONY: pre-commit
## Lint using *ALL* pre-commit hooks
## (see `.pre-commit-config.yaml`)
pre-commit:
	# Note: Running through `tox` since some hooks rely on finding their executables
	# in the `.tox/precommit/bin` directory and to provide an extra layer of isolation
	# for reproducibility.
	$(MAKE) tox-precommit POSARGS=$(PRECOMMIT_HOOK_ID)

.PHONY: pre-commit-%
## Lint using a *SINGLE* specific pre-commit hook (e.g., `make pre-commit-mypy`)
## (see `.pre-commit-config.yaml`)
pre-commit-%: export SKIP= # Reset `SKIP` env var to force single hooks to always run
pre-commit-%:
	$(MAKE) pre-commit PRECOMMIT_HOOK_ID=$*
