--Hauptaufgabe: Analysiere die Schlüsselmerkmale,
--Vorteile und Einsatzmöglichkeiten der verschiedenen Datenbankdienstdienste von AWS.
--Vergleiche dabei mindestens zwei Services in Hinblick auf Skalierbarkeit, Leistung und Kosten.
--Berücksichtige sowohl SQL- als auch NoSQL-Optionen. Deine Aufgabe ist es, eine Empfehlung abzugeben,
--wann welcher AWS-Dienst bevorzugt werden sollte.


-- Die Services von AWS für Datenbanken unterteilen Relational und Non-Relational. Relational sind AMAZON RDS und AMAZON AURORA, NON-RELATIONAL beinhaltet Key-Value Datenbanken wie AMAZON DYNAMODB, Dokument Datenbanken mit AMAZON DOCUMENTDB, Caching Datenbanken AMAZON ELASTICACHE,
-- In_Memory Datenbanken mit AMAZON MEMORYDB for REDIS, Grapen Datenbanken^mit AMAZON NEPTUNE, Wide Column Datenbanken mit AMAZON KEYSPACES, Time-series mit AMAZON TIMESTREAM, und Ledger mit AMAZON QLDB. 

-- Hier lässt sich schon erkennen, dass die Anzahl an Möglichkeiten bei den NON-RELATIONAL umfangreicher ist. Das liegt daran, dass die große Masse der Daten flexibel gehandhabt werden muss. Außerdem gibt es für die verschiedensten Szenarien Datenbanken, die den Anwendungsfall abdecken.

-- Für den Vergleich nehme ich hier AMAZON AURORA und AMAZON DYNAMODB. AURORA ist hier das Beispiel für RELATIONAL und DYNAMODB das für NON-RELATIONAL.
-- NOSQL ist in der Regle flexibler und hochfunktionell, das liegt zum einen daran, dass sie so konzipiert sind, um mit un- und halbstrukturierten Daten zu arbeiten. Darüber hinaus sind NOSQL Datenbanken leistungsstärker, weil die Zugriffsmuster auf die jeweiligen Anwendungsbereiche angepasst sind.
-- Dem gegenüber steht dann halt SQL, welches für das erfassen von repetetiven und sich nicht verändernde Daten bestimmt ist. Daten werden hier in vormodelierten Tabellen abgelegt und können dort nur umständlich abgeändert werden.
-- Sagen wir einfach, dass NoSQL dem BASE-Prinzip erliegt und SQL ACID.
-- Ausgeschrieben:
-- BASE: Basically Available, Soft State and Eventual Consistency.
-- ACID: Atomicity, Consistency, Isolation, and Durability.