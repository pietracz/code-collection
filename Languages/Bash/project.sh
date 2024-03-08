#!/bin/bash

config_file="/home/$USER/Project/config.txt"

create_project_folder() {
        if [ ! -d "/home/$USER/Project" ]; then
                mkdir -p /home/$USER/Project
        fi
}

create_config_file() {
        if [ ! -f "$config_file" ]; then
                touch "$config_file"
        fi
}

create_directory_path() {
        echo "Gib bitte den absoluten Pfad für die zu sichernden Dateien an:"
                read directory_path
        if [ -d "$directory_path" ]; then
                echo "$directory_path" > "$config_file"

        else
                echo "Das von dir angegebene Verzeichnis existiert nicht."
                        create_directory_path
        fi
}

create_backup_path() {
        echo "Gib bitte den absoluten Pfad für den Speicherort des Backups an:"
                read  backup_path
        if [ ! -d "$backup_path" ]; then
                echo "Der angegebene Pfad existiert nicht und wird erstellt."
                mkdir -p "$backup_path"
        fi
        echo "$backup_path" >> "$config_file"
}

while true; do
        if [ -f "$config_file" ]; then
                mapfile -t paths < "$config_file"
                directory_path="${paths[0]}"
                backup_path="${paths[1]}"
                base_name=$(basename "$directory_path")
                current_date=$(date +"%Y-%m-%d")
                backup_name="${base_name}_Backup"
                if [ -n "$directory_path" ] && [ -n "$backup_path" ]; then
                        mkdir -p "$backup_path/$backup_name" && tar -cJvf "$backup_path/$backup_name/${backup_name}_${current_date}.tar.xz" "$directory_path"
                fi
                break
        else
                echo "Es besteht leider keine Konfigurationsdatei, Dateien werden erstellt."
                        create_project_folder
                echo "Ordner wurde unter /home/$USER/Project erstellt"
                        create_config_file
                echo "Konfigurationsdatei wurde in /home/$USER/Project erstellt"
                        create_directory_path
                echo "Die zu sichernden Dateien befinden sich unter: $directory_path"
                        create_backup_path
                echo "Die Dateien werden unter $backup_path archiviert"
        fi
done