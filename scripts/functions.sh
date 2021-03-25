#!/bin/sh

ROOT_DIR=`git rev-parse --show-toplevel`
PACKAGE_DIR=$ROOT_DIR/packages/misc-files
FILES=($(ls -A $PACKAGE_DIR | grep -v '^package'))

check_error() {
	JOB="$0"              # job name
  LASTLINE="$1"         # line of error occurrence
  LASTERR="$2"          # error code
	# Raise error and exit if the last command fails
	if [ $? -ne 0 ]
	then
		fail "ERROR in ${JOB} : line ${LASTLINE} with exit code ${LASTERR}"
		exit 1
	fi
}

copy_files_and_log() {
	info "Copying \n FROM: $1 \n TO: $2"
	cp -aR $1 $2
}

copy_from_misc_files() {
	# Map through all the files in misc_files directory
	for entry in "${FILES[@]}"
	do
		FROM=$PACKAGE_DIR/$entry
		TO=$ROOT_DIR/.
		# copy all the files to the root project
		copy_files_and_log $FROM $TO
	done
}

add_misc_files() {
	info "============="

	copy_from_misc_files
	check_error

	# Raise success message if successfull
	success "Runned successfully"
}
