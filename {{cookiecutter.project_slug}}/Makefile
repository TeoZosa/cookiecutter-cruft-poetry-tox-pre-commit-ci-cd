define DESCRIPTION
Code quality (testing, linting/auto-formatting, etc.) and local execution
orchestration for $(PROJECT_NAME).
endef
export DESCRIPTION

#################################################################################
# CONFIGURATIONS                                                                #
#################################################################################

NUM_PROCS:=$(shell nproc --all)
MAKEFLAGS += --warn-undefined-variables
SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := help
.DELETE_ON_ERROR:
.SUFFIXES:

#################################################################################
# GLOBALS                                                                       #
#################################################################################

SRC_DIR := {{cookiecutter.package_name}}
PROJECT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
PROJECT_NAME := $(shell basename $(PROJECT_DIR))

# List any changed files (excluding submodules)
CHANGED_FILES := $(shell git diff --name-only)

ifeq ($(strip $(CHANGED_FILES)),)
GIT_VERSION := $(shell git describe --tags --long --always)
else
diff_checksum := $(shell git diff | shasum -a 256 | cut -c -6)
GIT_VERSION := $(shell git describe --tags --long --always --dirty)-$(diff_checksum)
endif
TAG := $(shell date +v%Y%m%d)-$(GIT_VERSION)

# Commands' help text generation
# When users invoke `make help` at the command line, any `##` prefixed lines that
# immediately precede a rule will render as that rule's help text
include .makefile/help.mk
.DEFAULT_GOAL := help # alias `make` to `make help`

#################################################################################
# HELPER TARGETS                                                                #
#################################################################################

.PHONY: strong-version-tag
strong-version-tag: get-make-var-TAG

.PHONY: strong-version-tag-dateless
strong-version-tag-dateless: get-make-var-GIT_VERSION

.PHONY: get-make-var-%
get-make-var-%:
	@echo $($*)

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
	poetry install --no-interaction --no-root --with docs -vv
#{%- if cookiecutter.adr_documentation_support == 'yes' %}
	# Install node ADR management library
	poetry run nodeenv --python-virtualenv --jobs=$(NUM_PROCS)
	poetry run npm install -g --no-package-lock --no-save log4brains
#{%- endif %}

.PHONY: install-project
## Install {} source code (in editable mode)
install-project:
	poetry install --no-interaction -vv
	$(MAKE) clean

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

.PHONY: clean
## Delete all compiled Python files
clean:
	find . -type f -name "*.py[co]" -delete
	find . -type d -name "__pycache__" -delete
	# Clean up files in source directories that may have been generated from C extension compilation
	find . -type f -name "*.so" -delete -maxdepth 2
	find . -type f -name "*.pyd" -delete -maxdepth 2

#################################################################################
# COMMANDS                                                                      #
#################################################################################
include .makefile/docker.mk # Docker orchestration commands

.PHONY: provision-environment
## Set up a Python virtual environment with installed project dependencies
provision-environment: _validate-poetry-installation install-dependencies install-project

.PHONY: install-pre-commit-hooks
## Install git pre-commit hooks locally
install-pre-commit-hooks:
	poetry run pre-commit install

.PHONY: get-project-version-number
## Echo project's canonical version number
get-project-version-number:
	@poetry version --short

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

#{%- if cookiecutter.project_type == 'package' %}
.PHONY: package
## Build project package(s)
package:
	tox -e package
#{%- endif %}

.PHONY: tox-%
## Run specified tox testenvs
tox-%: generate-requirements
	poetry run tox -e "$*" -- $(POSARGS)
	$(MAKE) clean-requirements

.PHONY: test
ifeq (${CI}, true)
test: export TOX_PARALLEL_NO_SPINNER=1
endif
## Run pre-defined test suite via tox
test: generate-requirements
	poetry run tox --parallel
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
	$(MAKE) tox-"py3{8,9}-benchmark-$*"

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

.PHONY: docs-%
## Build documentation in the format specified after `-`
## (e.g.,
## `make docs-html` builds the docs in HTML format,
## `make docs-confluence` builds and publishes the docs on confluence (see `docs/source/conf.py` for details),
## `make docs-clean` cleans the docs build directory)
docs-%:
	$(MAKE) $* -C docs

.PHONY: test-docs
## Test documentation format/syntax
test-docs:
	poetry run tox -e docs

#{%- if cookiecutter.adr_documentation_support == 'yes' %}
.PHONY: docs-adl-preview
## Launch live preview of ADR documentation
docs-adl-preview:
	poetry run log4brains preview
#{%- endif %}
