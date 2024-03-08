#! /bin/bash

lower_limit=50
upper_limit=1500
current_date=$(date)

first_number_function() {
    echo "Gib bitte die erste Zahl zwischen $lower_limit und $upper_limit an:"
    read number1
}

second_number_function() {
    echo "Gib bitte die zweite Zahl zwischen $lower_limit und $upper_limit an:"
    read number2
}

operator_function() {
    echo "Wie möchtest du beide Zahlen miteinander verrechnen? + für Addition, - für Subtraktion, x für Multiplikation oder / für Division?"
    read operator
}

first_number_function

while true; do
    if [ $number1 -ge $lower_limit ] && [ $number1 -le $upper_limit ]; then
        echo "Sehr gut, $number1 befindet sich im Bereich von $lower_limit und $upper_limit"
        break
    else
        echo "Leider befindet sich $number1 nicht im Bereich von $lower_limit und $upper_limit, versuche es bitte nochmal:"
            first_number_function
    fi
done

second_number_function

while true; do
        if [ $number2 -ge $lower_limit ] && [ $number2 -le $upper_limit ]; then
                echo "Sehr gut, $number2 befindet sich im Bereich von $lower_limit und $upper_limit"
                break
        else
                echo "Leider befindet sich $number2 nicht im Bereich von $lower_limit und $upper_limit, versuche es bitte nochmal:"
                        second_number_function
        fi
done

operator_function

while true; do
    if [ $operator == "+" ] || [ $operator == "-" ] || [ $operator == "x" ] || [ $operator == "/" ]; then
        if [ $operator == "x" ]; then
                operator="*"
        fi
        echo "Datum und Uhrzeit: $current_date" >> /home/$USER/results.txt
        echo "Das Ergebnis lautet: $(($number1 $operator $number2))" >> /home/$USER/results.txt
        break
    else
        echo "Bitte achte darauf, dass du den richtigen Operator auswählst! Versuche es bitte nochmal."
            operator_function
    fi
done

tail -n2 /home/$USER/results.txt