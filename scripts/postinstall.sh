#!/bin/sh

# Reset
set -e
set -o pipefail  # trace ERR through pipes
set -o errtrace  # trace ERR through 'time command' and other functions
echo ''

# Set defaults
ROOT_DIR=`git rev-parse --show-toplevel`

# Source partials
source $ROOT_DIR/scripts/colors.sh
source $ROOT_DIR/scripts/functions.sh

info "package [misc-files]"
add_misc_files
