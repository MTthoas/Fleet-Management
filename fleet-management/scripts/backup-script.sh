#!/bin/bash

# Default backup directory
DEFAULT_BACKUP_DIR="$HOME/backup"
# Default date format
DEFAULT_DATE=$(date +%Y-%m-%d)

# Ask for the date if not provided as an argument
if [ -z "$1" ]
  then
    echo "No date supplied as argument. Using today's date."
    BACKUP_DATE=$DEFAULT_DATE
  else
    BACKUP_DATE=$1
fi

# Ask for the backup directory if not provided as an argument
if [ -z "$2" ]
  then
    echo "No backup directory supplied as argument. Using default directory."
    BACKUP_DIR=$DEFAULT_BACKUP_DIR
  else
    BACKUP_DIR=$2
fi

# Create the backup directory if it doesn't exist
mkdir -p $BACKUP_DIR/$BACKUP_DATE

# Create a backup by copying all files (excluding node_modules) to the backup directory
tar --exclude=node_modules -cf - ../. | (cd $BACKUP_DIR/$BACKUP_DATE && tar xf -)

echo "Backup completed!"
