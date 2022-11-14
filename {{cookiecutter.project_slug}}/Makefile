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
strong-version-tag:
	@echo $(TAG)

.PHONY: strong-version-tag-dateless
strong-version-tag-dateless:
	@echo $(GIT_VERSION)

#################################################################################
# COMMANDS                                                                      #
#################################################################################
include .makefile/docker.mk # Docker orchestration commands
include .makefile/docs.mk # Documentation building commands
include .makefile/project_orchestration.mk # Project/virtual environment orchestration commands
include .makefile/test.mk # Application testing + code quality and security scanning commands
