# Makefile for Ganymede Documentation
# Includes targets for API documentation management and build optimization

# Default shell
SHELL := /bin/bash

# Variables
SCRIPTS_DIR := scripts
API_DIR := docs/api

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

.PHONY: start
start: ## Start development server
	yarn start

.PHONY: build
build: api-exclude ## Build for production (with exclusions)
	yarn build

.PHONY: clean
clean: ## Clean build artifacts
	yarn clear

# ========== API Documentation Management ==========

.PHONY: api-generate
api-generate: ## Generate API docs and apply exclusions
	@echo "$(YELLOW)Generating API documentation...$(NC)"
	yarn api
	@echo "$(YELLOW)Applying exclusions...$(NC)"
	./$(SCRIPTS_DIR)/manage-api-docs.sh exclude
	@echo "$(YELLOW)Updating sidebar...$(NC)"
	node $(SCRIPTS_DIR)/update-sidebar.js
	@echo "$(GREEN)API documentation generated and optimized$(NC)"

.PHONY: api-exclude
api-exclude: ## Exclude large API documentation files
	@echo "$(YELLOW)Excluding large API files...$(NC)"
	@./$(SCRIPTS_DIR)/manage-api-docs.sh exclude
	@node $(SCRIPTS_DIR)/update-sidebar.js

.PHONY: api-restore
api-restore: ## Restore all excluded API files
	@echo "$(YELLOW)Restoring excluded API files...$(NC)"
	@./$(SCRIPTS_DIR)/manage-api-docs.sh restore
	@echo "$(GREEN)All files restored$(NC)"

.PHONY: api-list
api-list: ## List API files that would be excluded
	@./$(SCRIPTS_DIR)/manage-api-docs.sh list

.PHONY: api-status
api-status: ## Show current API exclusion status
	@./$(SCRIPTS_DIR)/manage-api-docs.sh status

.PHONY: api-clean
api-clean: ## Clean all API documentation
	@echo "$(RED)Removing all API documentation...$(NC)"
	@rm -rf $(API_DIR)/*.mdx $(API_DIR)/*.excluded $(API_DIR)/schemas
	@echo "$(GREEN)API documentation cleaned$(NC)"

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
docs-all: api-generate node-docs ## Generate all documentation

.PHONY: build-optimized
build-optimized: api-exclude build ## Build with optimizations (excludes large files)

.PHONY: dev
dev: api-restore start ## Start dev server with all files restored

# ========== Utility Commands ==========

.PHONY: check-size
check-size: ## Check size of documentation folders
	@echo "$(YELLOW)Documentation folder sizes:$(NC)"
	@du -sh docs/* | sort -hr | head -10

.PHONY: validate
validate: ## Validate that build will work
	@echo "$(YELLOW)Checking for issues...$(NC)"
	@if [ -f "$(API_DIR)/sidebar.ts" ]; then \
		echo "✓ Sidebar exists"; \
	else \
		echo "✗ Sidebar missing"; \
	fi
	@excluded=$$(find $(API_DIR) -name "*.excluded" 2>/dev/null | wc -l); \
	if [ "$$excluded" -gt 0 ]; then \
		echo "ℹ $$excluded files are excluded"; \
	fi
	@active=$$(find $(API_DIR) -name "*.mdx" 2>/dev/null | wc -l); \
	echo "ℹ $$active active MDX files"

# ========== Installation & Setup ==========

.PHONY: install
install: ## Install dependencies
	yarn install

.PHONY: setup
setup: install ## Setup project (install + build)
	yarn build

# ========== Git Hooks ==========

.PHONY: pre-commit
pre-commit: api-status ## Pre-commit hook to check status
	@echo "$(YELLOW)Pre-commit check:$(NC)"
	@./$(SCRIPTS_DIR)/manage-api-docs.sh status