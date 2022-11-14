# Implementation reference: https://github.com/kubeflow/kubeflow/blob/a349284acf99723aa822143eaed43314aa001048/components/centraldashboard/Makefile#L25

#################################################################################
# GLOBALS                                                                       #
#################################################################################
# List any changed files (excluding submodules)
CHANGED_FILES := $(shell git diff --name-only)

ifeq ($(strip $(CHANGED_FILES)),)
GIT_VERSION := $(shell git describe --tags --long --always)
else
diff_checksum := $(shell git diff | shasum -a 256 | cut -c -6)
GIT_VERSION := $(shell git describe --tags --long --always --dirty)-$(diff_checksum)
endif
TAG := $(shell date +v%Y%m%d)-$(GIT_VERSION)

#################################################################################
# COMMANDS                                                                      #
#################################################################################
.PHONY: strong-version-tag
strong-version-tag:
	@echo $(TAG)

.PHONY: strong-version-tag-dateless
strong-version-tag-dateless:
	@echo $(GIT_VERSION)
