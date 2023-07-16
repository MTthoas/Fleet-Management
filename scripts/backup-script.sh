#!/bin/sh

DATE=${1:-$(date +%Y-%m-%d)}
DIR=${2:-"/backup"}

if [ ! -d "$DIR" ]; then
    echo "Création du dossier de sauvegarde : $DIR"
    mkdir -p "$DIR"
fi

echo "Sauvegarde du code source dans $DIR"
tar -czf "$DIR/backup-$DATE.tar.gz" /usr/src/app

echo "Sauvegarde terminée."
