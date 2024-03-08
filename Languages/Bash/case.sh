#!/bin/bash

color1="Rot"
color2="Blau"
color3="Grün"
color4="Gelb"

        echo "Wähle bitte $color1, $color2, $color3 oder $color4."

while true; do
        read selected_color

        case "${selected_color,,}" in
                "${color1,,}")
                        echo "$color1 ist eine schöne Farbe!";;
                "${color2,,}")
                        echo "$color2 ist fast so  schön wie $color1.";;
                "${color3,,}")
                        echo "$color3 ist mindestens so schön wie $color2:";;
                "${color4,,}")
                        echo "$color4? Ich weiß ja nicht.";;
                *)
                        invalid_count=$((invalid_count + 1))
                                if [ $invalid_count -eq 1 ]; then
                                        echo "$selected_color ist leider keine mögliche Auswahl, beschränke dich bitte auf $color1, $color2, $color3 oder $color4."
                                elif [ $invalid_count -eq 2 ]; then
                                        echo "Du machst mich langsam sauer! Bitte wähle eine gültige Farbe!"
                                elif [ $invalid_count -eq 3 ]; then
                                        echo "Zum letzten Mal: Wähle bitte $color1, $color2, $color3 oder $color4!"
                                else
                                        echo "Du hast es geschafft. Ich gebe auf."
                                        exit 1
                                fi;;
        esac
done