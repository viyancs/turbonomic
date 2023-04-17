#!/bin/bash

# Define log file path
LOG_FILE="/home/sofiyani/Documents/scripts/ansible.log"

# Echo message to console
echo "Executing script..."

# Write message to log file
echo "$(date): Script executed." >> $LOG_FILE

myActionData=$(cat -)

echo "$myActionData" >> $LOG_FILE


#echo "$1" >> $LOG_FILE
