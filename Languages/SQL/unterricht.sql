-- SQL Structured Query Language
-- Programmiersprache 
-- Relationale Datenbanken = SQLite, MySQL usw:
-- nicht Relationale Datenbanken = NoSQL(unstrukturierte Datenbank)

SELECT * From Customer Where city = "London" and country = "Great Britain"
SELECT * FROM Customer WHERE contactname like "Maria%"
Primary Key kommt nur einmalig in einer Tabelle vor
Foreign Key sind Primary Keys aus anderen Tabellen und dienen als Referenz

-- ER Diagram (Entity Relationship Diagram)

CREATE TABLE Customer
(
customerid INT NOT NULL PRIMARY KEY,

contactname VARCHAR(50) NOT NULL,
)

-- Verknüpfen von Tabellen
Select * from customers
Join Shippers on 

-- Hinzufügen von Werten
Insert into customers (customerid, firstname, lastname, age, country)
VALUES (6, "John", "Doe", 27, "US")

-- Löschen von Werten

Delete from customers where customerid = 6

-- Tabelle löschen
Drop table customers;

-- Constrains
--PRIMARY KEY 
--NOT NULL
--UNIQUE
--FOREIGN KEY

-- Mehrere Werte HInzufügen:
-- INSERT INTO user 
-- VALUES
--     ("WERT1", WERT2, "WERT3")
--     ("WERT1", WERT2, "WERT3")
--     ("WERT1", WERT2, "WERT3")

-- Bedingungen Verknüpfen
-- SELECT * FROM spiele
-- WHERE player_id > 1 AND player_id < 5

-- SELECT * FROM spiele
-- WHERE player_id > 1 AND NOT title = "Elden Ring"

-- Tabellen verknüpfen
-- SELECT spiele.spiele_id, spiele.titel, spielstaende.spielstand_id
-- FROM Spiele
-- INNER JOIN spielstaende
-- ON spiele.spiele_id = spielstaende.spiel_id

-- Speichert Output in einer anderen Tabelle
-- CREATE TABLE Ergebnis
-- AS
-- SELECT customer.first_name. orders.item
-- FROM customers
-- LEFT JOIN orders
-- ON customers.customer_id = orders.customer_id

-- Zählen von Zeilen
-- Select count(*) FROM orders

-- Summieren
-- SELECT SUM(amount) FROM orders

-- Durchschnitt
-- SELECT AVG(amount) FROM orders

-- Sortieren von klein nach groß
-- Select * FROM orders
-- ORDER BY amount ASC

-- Sortieren von groß nach klein
-- SELECT * FROM orders
-- ORDER BY amount DESC

-- Update mehrere Einträge unter den selben Bedinungen, aber berücksichtgt vorherige Werte

--Prinzipien bei Transaktionen:
--ACID eher bei SQL Datenbanken
--Atomicity:
--Entweder eine Transaktion wird durchgeführt oder im Fehlerfall rückgängig gemacht.
--Consistency:
--Eine Transaktion führt die Datenbank von einem gültigen Zustand in einen anderen gültigen Zustand.
--Isolation:
--Transaktionen werden so isoliert, dass sie sich nicht gleichzeitig beeinflussen, selbst wenn sie gleichzeitig ablaufen.
--Durability:
--Sobald eine Transaktion abgeschlossen wurde, bleiben die Änderungen bei einem Systemausfall bestehen.