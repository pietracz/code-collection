#!/bin/bash

zahl=(1 2 3 4 5 6 7 8 9 10)

for i in ${zahl[@]}; do
        echo "Zahl: $i"
done

zahl_while=1

while [ $zahl_while -le 10 ]; do
echo "Zahl: $zahl_while"
        zahl_while=$((zahl_while+1))
done