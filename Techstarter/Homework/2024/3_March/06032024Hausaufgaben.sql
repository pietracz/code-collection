-- Aufgabe 1:
-- 1.1 Erkläre in eigenen Worten in einem Absatz, warum Datenbanken genutzt werden. Nenne wenigstens 5 positive Aspekte von Datenbanken.
-- 1.2 Erkläre, wie eine Relationale Datenbank aufgebaut ist. Tiefer, als im Unterricht besprochen, braucht ihr nicht gehen.

        -- Datenbanken sind eine Ansammlung von Daten, die strukturiert gespeichert werden, um effizient darauf zuzugreifen, sie zu verwalten und zu aktualiseren(z.B. ändern oder löschen).
        -- Je nach Anwendungsfall variieren diese Datenbanken und Datensätze.
        -- Gehen wir davon aus, dass ich eine App entwickle, wo sich Nutzer registrieren und anmelden können, um zu chatten, dort würde ich ggf. Datenbank mit Nutzern haben - diese kann dann wiederum aufgeteilt sein auf andere Tabellen wie:
        -- Eine Nutzertabelle, die auf Passwörter und persönliche Informationen zugreift. Passwörter beinhaltet meinetwegen die Mailadresse und das Passwort, gepaart mit dem primary key und persönliche Informationen Name, Nachename, Adresse, Geburtsdatum usw.
        -- In Unternehmen würden wir dann eher ein Warenwirtschaftssystem haben, darin befinden sich Artikel mit unseren Ettiktierungen/Barcodes, Anzahl/Bestand, Lieferanten und Kunden. Unter all den genannten Punkten können dann noch mehr Details stehen.

-- Aufgabe 2:
-- Überlege dir eine Datenbank inklusive mindestens 3 Tabellen (das tatsächliche Anlegen geschieht in Aufgabe 4).
-- Jede Tabelle muss einen Namen, Primärschlüssel und mindestens eine weitere Spalte haben. Gib für alle Spalten an, welchen Datentypen du wählen würdest.

-- Eine Idee wäre eine Bücherverleih-Datenbank. Aber seid da gerne kreativ 
-- Nutzt dafür eine E-R-Diagramm oder schreibt euch Stichpunktartig auf wie eure Tabellen aussehen sollen.
-- Abgabe: Gibt das Diagramm oder eure Stichpunktartige Liste als Screenshot oder in Textform ab.

CREATE TABLE user (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_mail VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

 CREATE TABLE personal_informations (
    personal_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    mail_adress VARCHAR(255) NOT NULL,
    PRIMARY KEY (personal_id)
);

CREATE TABLE addresses (
    address_id INT NOT NULL AUTO_INCREMENT,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    postal_code VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    house_number VARCHAR(255) NOT NULL,
    PRIMARY KEY (address_id)
);
   
-- Aufgabe 3:
-- Erkläre die grundlegenden SQL-Befehle: CREATE TABLE, INSERT, SELECT, UPDATE, DELETE.

-- Schaue dir außerdem die Syntax an, diese wird in Aufgabe 4 interessant.
-- Weitere Befehle werden wir morgen betrachten.

        -- create table ist der Befehl mit dem wir einen Container erstellen, in welchen wir die Spalten bennennen und mit Eigenschaften definieren.
        -- insert into ist der Befehl, mit dem wir die Tabelle ansprechen und mit values() den Eigenschaften einen Wert geben
        -- select user_id from user where user_id > 10 wäre ein Beispiel. select wäht die Spalte aus und from gibt an, welche Tabelle den Wert beinhaltet. Mit where kann es noch etwas eingegrenzt werden.
        -- update user set user_id = 20 where user_id = 10. Hier verwenden wir update user, um die jeweilige Tabelle zu bestimmen, in der wir einen Wert ändern wollen.
        -- Mit set user_id = 20 where user_id = 10 sagen wir, dass er user_id = 10 auf 20 umändern soll.
        -- delete from user würde alle Inhalte aus einer Tabelle löschen, delte from user where user_name like "M%" würde usernamen die mit M anfangen löschen

-- Aufgabe 4:
-- 4.1 Nutze die erlernten Befehle und erstelle deine Datenbank aus Aufgabe 2, beispielsweise auf https://www.programiz.com/sql/online-compiler/     oder      https://sqliteonline.com/ .
-- Fülle die Tabellen mit etwas Leben, sodass jede Tabelle wenigstens jeweils 5 Zeilen beinhaltet. Den aktuellen Stand kannst du immer mit "SELECT" abfragen.

-- Gib pro Tabelle einen Screenshot ab, der mindestens 5 Zeilen in der Datenbank zeigt (Ausgabe von "SELECT * FROM tablename").
-- 4.2 Probiere gerne auch ungenutzte Befehle wie DELETE oder UPDATE aus, dazu benötigt es keine Abgabe. Ihr könnt aber gerne dazu was abgeben.

            -- Aufgabe 4 befindet sich teilweise als separate Datei im Upload. Musste das Ergbnis per Screenshot festhalten.
            -- Die Tabellen habe ich mit dem obenstehenden Code erstellt und dann mit INSERT INTO user(user_name, user_mail) VALUES("Name", "Adresse"); gefüllt. Das ganze habe ich dann ähnlich bei den andern Tabellen gemacht.
            -- Darüber hinaus habe ich mich darüber informiert, wie ich einen local mySQL Server auf meinem Laptop hosten kann und diesen über VS Code - mit einer Extension - bedienen kann.

-- Befehle Beispiele die ihr heute verwenden könntet:

-- SELECT * FROM customers; -> zeigt alle Spalten von der Tabelle "customers" an.
-- SELECT name FROM CUSTOMERS; -> zeigt nur die Spalte "name" von der Tabelle "customers" an.
-- DROP TABLE customers; -> löscht die Tabelle customers komplett
-- INSERT INTO customers(customer_id,first_name,last_name,age,country) VALUES (6,"Suheib","Marzouka",27,"GER").  -> Fügt einen neuen Eintrag in die Tabelle customers hinzu mit den Werten nach Values
-- CREATE TABLE teilnehmer (
--   teilnehmer_id int NOT NULL,
--   name varchar(55),
--   nachname varchar(55)) --> Erstellt eine neue Tabelle namens Teilnehmer.