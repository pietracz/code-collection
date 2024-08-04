// Verweis der IDs und Klassen aus HTML, im JavaScript als unveränderbare Variablen
const ANZEIGE_ID = "anzeige";
const EINGABEFELD_ID = "eingabefeld";
const RECHENWEG_ANZEIGE_ID = "rechenweg-anzeige";
const RECHNEN_BUTTON_ID = "rechnen-button";
const TASTE_KLASSE = "taste";
const FEHLER_KLASSE = "fehler";

// Wertübergabe an getElementById oder getElementsByClassName 
const anzeige = document.getElementById(ANZEIGE_ID);
const eingabefeld = document.getElementById(EINGABEFELD_ID);
const rechenwegAnzeige = document.getElementById(RECHENWEG_ANZEIGE_ID);
const rechnenButton = document.getElementById(RECHNEN_BUTTON_ID);
const tasten = document.getElementsByClassName(TASTE_KLASSE);

const formatter = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 15,
    useGrouping: false,
});

let aktuelleEingabe = "";
// Die Liste der Tasten durchgehen
for (const taste of tasten) {
    //Jeder Taste sagen, was passieren soll, wenn man auf sie klickt
    taste.addEventListener("click", function (ereignis) {
        // 1. Rechenweg-Anzeige leeren
        rechenwegAnzeige.textContent = "";
        // 2. Herausfinden, welches Zeicher auf der angeklickten Taste abgebildet ist
        const angeklicktesZeichen = ereignis.target.textContent;
            // Je nach angeklickter Taste unterschiedliche Dinge tun
        switch (angeklicktesZeichen) {
            case "ENTF":
                // Das letzte Zeichen aus dem Eingabefeld entfernen
                eingabefeld.value = eingabefeld.value.slice(0, -1);

                // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchronisieren
                aktuelleEIngabe = eingabefeld.value;
                break;
            case "AC":
                // Alle Zeichen aus dem Eingabefeld entfernen
                eingabefeld.value = "";
                aktuelleEingabe = eingabefeld.value;
                break;
            case "=":
                try {
                // Das Ergebnis der eingegeben Rechnungen ermitteln
                const ergebnis = new Function("return " + eingabefeld.value.replaceAll(",", "."))();
                // Das Ergebnis in das Eingabefeld schreiben
                eingabefeld.value = formatter.format(ergebnis);
                // Die Rechnung, die zum Ergebnis geführt hat, in das Rechenweg-Feld schreiben
                rechenwegAnzeige.textContent = aktuelleEingabe;
                // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchronisieren
                aktuelleEingabe = eingabefeld.value;
                // Fehlerklasse von der Rechenweg-Anzeige entfernen
                rechenwegAnzeige.classList.remove(FEHLER_KLASSE);
                } catch {
                    //Code für Fehlerfall
                    rechenwegAnzeige.textContent = "Ungültige Eingabe";
                    rechenwegAnzeige.classList.add(FEHLER_KLASSE);
                }
                break;
            
            default:
                // 3. Das angeklickte Zeichen in das Eingabefeld schreiben
                eingabefeld.value += angeklicktesZeichen;
                // 4. Wert der aktuelleEingabe-Variablen aktualisieren
                aktuelleEingabe = eingabefeld.value;
                break;
        }
    });
}