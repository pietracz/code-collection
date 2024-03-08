#!/bin/bash

echo "Gib bitte den absoluten Pfad und den Namen des Ordner an, wo du die Text-Files hinkopiert haben willst:"
read copy_directory

mkdir -p $copy_directory
echo "Der Ordner wurde unter $copy_directory erstellt."

echo "Gib einen absoluten Pfad an, wo du nach Text-Dateien suchen willst:"
read text_path

find $text_path -name "*.txt" -exec cp -t $copy_directory {} +

echo "Die Text-Files aus $text_path wurden kopiert und unter $copy_directory abgelegt."