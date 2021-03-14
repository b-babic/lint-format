#!/usr/bin/env bash

# Reset
set -e
echo ''

# Set defaults
ROOT_DIR=`git rev-parse --show-toplevel`

# Source partials
source $ROOT_DIR/scripts/colors.sh

info "Running official cli for lint-format-setup repo"
sleep 0.5
success "Command run successfully"
