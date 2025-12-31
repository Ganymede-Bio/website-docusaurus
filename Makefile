# Makefile for Ganymede Documentation

# Default shell
SHELL := /bin/bash

# Variables
SCRIPTS_DIR := scripts

# Colors for output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[1;33m
NC := \033[0m # No Color

.PHONY: help
help: ## Show this help message
	@echo "Ganymede Documentation Build Targets"
	@echo "===================================="
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-20s$(NC) %s\n", $$1, $$2}'
	@echo ""

# ========== Development Commands ==========
.PHONY: api
api: ## Generate API specification
	./scripts/update-api-spec.sh

.PHONY: start
start: ## Start development server
	yarn start

.PHONY: build
build: ## Build for production
	yarn build

.PHONY: clean
clean: ## Clean build artifacts
	yarn clear

# ========== Node Documentation ==========

.PHONY: node-docs
node-docs: ## Generate node documentation
	@echo "$(YELLOW)Updating submodules...$(NC)"
	git submodule update --recursive --remote --init
	@echo "$(YELLOW)Generating node documentation...$(NC)"
	cd pydoc && source env/bin/activate && \
		python generateOperatorDocs.py && \
		python generatePylibDocs.py && \
		python generateAllotropeDocs.py && \
		deactivate
	@echo "$(GREEN)Node documentation generated$(NC)"

# ========== Combined Workflows ==========

.PHONY: docs-all
docs-all: node-docs ## Generate all documentation

# ========== Utility Commands ==========

.PHONY: check-size
check-size: ## Check size of documentation folders
	@echo "$(YELLOW)Documentation folder sizes:$(NC)"
	@du -sh docs/* | sort -hr | head -10

# ========== Installation & Setup ==========

.PHONY: install
install: ## Install dependencies
	yarn install

.PHONY: setup
setup: install ## Setup project (install + build)
	yarn build