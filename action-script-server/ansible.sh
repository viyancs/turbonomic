#!/bin/bash

# Define log file path
LOG_FILE="/home/sofiyani/Documents/scripts/ansible.log"

# Echo message to console
echo "Executing script..."

# Write message to log file
echo "$(date): Script executed." >> $LOG_FILE

myActionData=$(cat -)
# you can use  this data and make logic for decide ansible tower api
echo "$myActionData" >> $LOG_FILE

TOWER_HOST="https://your.tower.host.com"
TOWER_USERNAME="your-username"
TOWER_PASSWORD="your-password"
WORKFLOW_ID="1234"

# Get authentication token
WORKFLOW=$(curl -s -k -X POST \
  "${TOWER_HOST}/api/v2/workflow_job_templates/${WORKFLOW_ID}/launch/" \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"${TOWER_USERNAME}\",\"password\":\"${TOWER_PASSWORD}\"}"


echo "$WORKFLOW" >> $LOG_FILE
