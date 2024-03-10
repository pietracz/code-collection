-- Aufgabe 1:
-- Erstelle die Datenbank aus dem Unterricht. 
-- Ich hänge die Datenbank als SQL-Befehle unten an, damit ihr diese Befehle wiederverwenden könnt und weniger Arbeit habt.
-- Dabei fehlen aber die Einträge für Publisher, dort könnt ihr natürlich selbst Namen eintragen.
-- Du darfst nichts wegstreichen, aber beliebig viel ergänzen.
-- Sorgt dafür, dass jede Tabelle wenigstens 3 Zeilen beinhaltet.

        -- CREATE TABLE publisher (
        --   publisher_id int AUTO_INCREMENT NOT NULL,
        --   name varchar(50) NOT NULL,
        --   PRIMARY KEY (publisher_id)
        -- );

        -- Änderung auf: 
        --CREATE TABLE publisher (
        --publisher_id int AUTO_INCREMENT NOT NULL,
        --publisher_name varchar(50) NOT NULL,
        --PRIMARY KEY (publisher_id)
        --);

        --Zusatz zu Publisher:
        --INSERT INTO publisher (publisher_name)
        --VALUES
        --("Nintendo"),
        --("From Software"),
        --("Marvel");

        -- CREATE TABLE spiele (
        --   spiele_id int ,
        --   titel varchar(50) NOT NULL,
        --   publisher_id int,
        --   genre varchar(50),
        --   FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id)
        --  );

        --Änderung auf:
        --CREATE TABLE spiele (
        --spiele_id int AUTO_INCREMENT NOT NULL,
        --titel varchar(50) NOT NULL,
        --publisher_id int,
        --genre varchar(50),
        --PRIMARY KEY (spiele_id),
        --FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id)
        --);

        -- CREATE TABLE spielstaende (
        --    spielstand_id int,
        --    spiele_id int,
        --    spielzeit_in_stunden int,
        --    vollstaendigkeit_in_prozent decimal(3,2),
        --    PRIMARY KEY (spielstand_id),
        --    FOREIGN KEY (spiele_id) REFERENCES spiele(spiele_id)
        -- );

        --Änderung auf:
        --       CREATE TABLE spielstaende (
        --        spielstand_id int AUTO_INCREMENT NOT NULL,
        --        spiele_id int,
        --        spielzeit_in_stunden int,
        --        vollstaendigkeit_in_prozent decimal(5,2),
        --        PRIMARY KEY (spielstand_id),
        --        FOREIGN KEY (spiele_id) REFERENCES spiele(spiele_id),
        --        CONSTRAINT vollstaendigkeit_check CHECK ( vollstaendigkeit_in_prozent <=100.00 )
        --       );

        -- INSERT INTO spiele (titel, spiele_id, genre, publisher_id)
        -- VALUES 
        --      ('Super Kart 64', 4, "Racing", 1),
        --     ('Elden Ring', 2, "Action-RPG", 3),
        --     ('Spider Man', 3, "Action", 2);  

        -- Änderung auf:
        --INSERT INTO spiele (titel, publisher_id, genre)
        --VALUES
        --("Mario Super Kart 64", 1, "Racing"),
        --("Elden Ring", 2, "Action-RPG"),
        --("Spider Man", 3, "Action");

        -- INSERT INTO spielstaende
        -- VALUES
        -- 	(1, 1, 0, 0.0),
        --     (2, 1, 100, 50.0),
        --     (3, 2, 5, 5.0),
        --     (4, 3, 12, 20.0);

        --Änderung auf:
        --INSERT INTO spielstaende (spiele_id, spielzeit_in_stunden, vollstaendigkeit_in_prozent)
        --VALUES
        --(4, 0, 0.0);
        --(5, 100, 50.0),
        --(6, 5, 5.0),
        --(7, 12, 20.0);
        -- Ich musste leider bei spiele_id bei 4 anfangen, weil ich vorher etwas aus der Liste entfernt habe.

-- Abgabe: Nichts. Ihr dürft aber eventuelle Ergänzungen nennen oder eure Gedanken zu den Änderungen aufschreiben.

-- Aufgabe 2:
-- Schreibe den passenden SQL Befehl
-- (Achtung, ich nenne die Spalten nicht immer 100% so wie sie heißen, interpretiert dies passend.
-- Haltet außerdem die Reihenfolge der Spalten so ein, wie ich sie aufzähle):

-- 2.1: Wie erhalte ich alle Genres?
        --SELECT genre FROM spiele;
-- 2.2: Wie erhalte ich alle Publishernamen?
        --SELECT publisher_name FROM publisher;
-- 2.3: Wie erhalte ich alle Spalten aller Spiele mit einer Publisher_Id, die höchstens 2 ist?
        --SELECT * FROM spiele WHERE publisher_id <= 2;
-- 2.4: Wie erhalte ich alle Spieletitel, alphabetisch sortiert?
        --SELECT titel FROM spiele ORDER BY titel;
-- 2.5: Wie erhalte ich spielstand_id,  Spieletitel und jeweilige Spielzeit?
        --SELECT spiele.titel, spielstaende.spielstand_id, spielstaende.spielzeit_in_stunden FROM spiele LEFT JOIN spielstaende ON spiele.spiele_id = spielstaende.spiele_id;
-- 2.6: Wie erhalte ich alle Spalten aller Spielstände, bei denen ich entweder 0 oder über 100 Stunden Spielzeit habe?
        --SELECT * FROM spielstaende WHERE spielzeit_in_stunden >= 0 AND spielzeit_in_stunden <= 100;
-- 2.7: Wie erhalte ich: spielstand_id, Spieletitel, Publishername und Vollständigkeit_in_% aller Einträge der Datenbank (mit INNER JOIN)?
        --SELECT spiele.titel, publisher.publisher_name, spielstaende.spielstand_id, spielstaende.vollstaendigkeit_in_prozent
        --FROM spiele
        --INNER JOIN publisher ON spiele.publisher_id = publisher.publisher_id
        --INNER JOIN spielstaende ON spiele.spiele_id = spielstaende.spiele_id;
        
-- Abgabe: Die jeweiligen Befehle in Textform. Die Ausgaben könnt ihr auch anhängen (als Screenshot z.B.)

-- Aufgabe Z wie Zusatz:

-- Schreibe den passenden SQL Befehl:

-- Z1: Füge zunächst einen Wert hinzu, sodass irgendein Genre mehr als einmal vorkommt. Wie erhalte ich jedes Genre, aber alle nur genau einmal? (Stichwort: DISTINCT)
-- Z2: Wie erhalte alle Spielstand_ids mit publishernamen?
-- Z3: Konstruiere deine eigene Datenbank oder erweitere deine Datenbank von gestern. Erkläre, welchen Nutzen sie bietet und überlege dir, wie eine Anwendung aussehen könnte, die diese Datenbank verwendet.