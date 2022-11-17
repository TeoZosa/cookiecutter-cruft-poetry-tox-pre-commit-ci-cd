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

#################################################################################
# COMMANDS                                                                      #
#################################################################################

# Commands' help text generation
# When users invoke `make help` at the command line, any `##` prefixed lines that
# immediately precede a rule will render as that rule's help text
include .makefile/help.mk
.DEFAULT_GOAL := help # alias `make` to `make help`

# Note: must come before other includes
include .makefile/version_tags.mk # "Strong" version tag for both packages & Docker image tags

include .makefile/docker.mk # Docker orchestration commands
include .makefile/docs.mk # Documentation building commands
include .makefile/project_orchestration.mk # Project/virtual environment orchestration commands
include .makefile/test.mk # Application testing + code quality and security scanning commands
