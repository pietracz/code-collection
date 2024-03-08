#! /bin/bash

color1="Rot"
color2="Blau"
color3="Grün"
color4="Gelb"

while true; do
    read -p "Bitte wähle $color1, $color2, $color3 oder $color4 um fortzufahren! " color_selection

    if [ "${color_selection,,}" != "${color1,,}" ] && [ "${color_selection,,}" != "${color2,,}" ] && [ "${color_selection,,}" != "${color3,,}" ] && [ "${color_selection,,}" != "${color4,,}" ]; then
        echo "$color_selection ist leider keine mögliche Auswahl, beschränke dich bitte auf $color1, $color2, $color3 oder $color4!"
    else
        break
    fi
done

if [ "${color_selection,,}" == "${color1,,}" ]; then
    echo "$color1 ist eine schöne Farbe!"
elif [ "${color_selection,,}" == "${color2,,}" ]; then
    echo "$color2 ist fast so schön wie $color1."
elif [ "${color_selection,,}" == "${color3,,}" ]; then
    echo "$color3 ist mindestens so schön wie $color2."
elif [ "${color_selection,,}" == "${color4,,}" ]; then
    echo "$color4? Ich weiß ja nicht."
fi