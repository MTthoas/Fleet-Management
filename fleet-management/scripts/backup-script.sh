#!/bin/sh

echo "Lancement de la sauvegarde"

SOURCE_DIR="./fleet-management"
BACKUP_DIR="./backup/$(date +'%Y-%m-%d')"
DATE=${1:-$(date +%Y-%m-%d)}
DIR=${2:-"./backup"}

if [ ! -d "$DIR" ]; then
    echo "Création du dossier de sauvegarde : $DIR"
    mkdir -p "$DIR"
fi

echo "Sauvegarde du code source dans $DIR"
cp -r "$SOURCE_DIR"/* "$BACKUP_DIR"

echo "Sauvegarde terminée."
