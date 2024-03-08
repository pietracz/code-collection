#!/bin/bash

favFood="Lieblingsessen"
favAnimal="Lieblingstier"
favCountry="Lieblingsland"
favCity="Lieblingsstadt"

favFood_answers=(". Eine ausgezeichnete Wahl!" "?! Das überrascht mich jetzt!" ", ich glaube das muss ich auch mal probieren!")
favAnimal_answers=(", das ist ein wirklich fantastisches Lebewesen!" "! Was für ein außergewöhnliches Lieblingstier!" "??? Mein Schwein pfeift!")
favCountry_answers=("? Bist du dir sicher?" " kann auch ganz schön sein!" ", da würde ich auch gerne mal hin!")
favCity_answers=(". Davon habe ich schon gehört!" "? Verrückt, da war ich schon mal!" ". Eventuell sollte ich mir die Stadt auch mal ansehen!")

favFood_random_index=$((RANDOM % ${#favFood_answers[@]}))
favAnimal_random_index=$((RANDOM % ${#favAnimal_answers[@]}))
favCountry_random_index=$((RANDOM % ${#favCountry_answers[@]}))
favCity_random_index=$((RANDOM % ${#favCity_answers[@]}))

favFood_random_answers=${favFood_answers[favFood_random_index]}
favAnimal_random_answers=${favAnimal_answers[favAnimal_random_index]}
favCountry_random_answers=${favCountry_answers[favCountry_random_index]}
favCity_random_answers=${favCity_answers[favCity_random_index]}

if [ "$#" -eq 0 ]; then
        echo "Gib als erstes Argument bitte $favFood, $favAnimal, $favCountry oder $favCity ein!"
        exit 1

elif [ "$1" != "$favFood" ] && [ "$1" != "$favAnimal" ] && [ "$1" != "$favCountry" ] && [ "$1" != "$favCity" ]; then
        echo "Schau bitte nochmal, ob du $favFood, $favAnimal, $favCountry oder $favCity eingegeben hast!"
        exit 1

elif [ -z "$2" ]; then
        echo "Gib bitte ein zweites Argument ein, was passend zu deiner ersten Auswahl ist!"
        exit 1
fi

if [ "$1" == "$favFood" ]; then
        echo "$2$favFood_random_answers"
fi

if [ "$1" == "$favAnimal" ]; then
        echo "$2$favAnimal_random_answers"
fi

if [ $1 == "$favCountry" ]; then
        echo "$2$favCountry_random_answers"
fi

if [ $1 == "$favCity" ]; then
        echo "$2$favCity_random_answers"
fi