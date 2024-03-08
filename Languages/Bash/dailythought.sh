#! /bin/bash

current_date=$(date +%Y-%m-%d)
user=$USER

echo "Bitte gib den absoluten Pfad für das zu erstellende Verzeichnis an:"
read dir_name

if [ ! -d $dir_name ]; then
    mkdir -p $dir_name
    echo "Leider existierte kein Verzeichnis mit diesem Namen und wurde erstellt."
elif [ -d $dir_name ]; then
    echo "Das angegebene Verzeichnis existiert schon und wird für den weiteren Verlauf benutzt."
fi

echo "Für den weiteren Verlauf wird in dem angegebenen Ordner eine DailyThought-Datei erstellt"
touch $dir_name/"DailyThought_${current_date}.txt"

echo "${user^}, vielen Danke, zum Schluss würden wir dich bitten, deine Gedanken kurz niederzuschreiben."
read user_input

echo "Heute ist: $current_date" >> $dir_name/"DailyThought_${current_date}.txt"
echo "${user^} schrieb:" >> $dir_name/"DailyThought_${current_date}.txt"
echo "$user_input" >> $dir_name/"DailyThought_${current_date}.txt"

echo "Hier nochmal zur Reflektion:"
cat $dir_name/"DailyThought_${current_date}.txt"

chmod 400 $dir_name/"DailyThought_${current_date}.txt"