const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const bodyParser = require("body-parser");
const db = require("./db.config");
const { error } = require("console");
/* const bcrypt = require("bcrypt"); */
const PORT = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/products", (req, res) => {
  try {
    db.query("SELECT * FROM products", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  } catch {
    console.error("Fehler beim auslesen", error);
  }
});

app.get("/avgRating", (req, res) => {
  try {
    db.query(
      `
      SELECT products.productId, products.name, products.image, products.description, products.price, AVG(comments.rating) AS average_rating
      FROM products
      JOIN comments ON products.productId = comments.productId
      GROUP BY products.productId
      HAVING average_rating > 4
    `,
      (err, results) => {
        if (err) {
          console.error(
            "Fehler beim Abrufen der durchschnittlichen Bewertungen:",
            err
          );
          res.status(500).json({ error: "Interner Serverfehler" });
        } else {
          res.json(results);
        }
      }
    );
  } catch (error) {
    console.error(
      "Fehler beim Abrufen der durchschnittlichen Bewertungen:",
      error
    );
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});
// JSON-Code
/* app.get("/products", async (req, res) => {
  try {
    const products = await fs.readFile("products.json", "utf8");
    const parsedProducts = JSON.parse(products);
    res.status(200).json(parsedProducts);
  } catch (error) {
    console.error("Fehler beim auslesen", error);
    res.status(500).json(error);
  }
}); */

app.get("/products/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    db.query(
      "SELECT products.productId, products.name, products.color, products.image, products.description, products.price, products.technicalDetails FROM products WHERE products.productId = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Fehler bei der Datenbankabfrage:", err);
          res.status(500).json({ error: "Interner Serverfehler" }); // Fehlerantwort senden
        } else {
          if (result.length === 0) {
            res.status(404).json({ error: "Produkt nicht gefunden" }); // Produkt nicht gefunden
          } else {
            result[0].color = JSON.parse(result[0].color);
            res.json(result[0]); // Produkt senden (nur das erste Element, da die ID eindeutig ist)
          }
        }
      }
    );
  } catch (error) {
    console.error("Fehler beim Abrufen des Produkts:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});

/* app.post("/customer", async (req, res) => {
  const { userName, firstName, lastName, email, phone, shippingAddress } =
    req.body;

  if (
    !userName ||
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !shippingAddress
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    db.query(
      "INSERT INTO customers (userName, firstName, lastName, email, phone, shippingAddress) VALUES (?, ?, ?, ?, ?, ?)",
      [
        userName,
        firstName,
        lastName,
        email,
        phone,
        JSON.stringify(shippingAddress),
      ],
      (err, result) => {
        if (err) {
          console.error("Fehler bei der Datenbankabfrage:", err);
          res.status(500).json({ error: "Interner Serverfehler" }); // Fehlerantwort senden
        } else {
          res.status(201).json({ message: "Customer created successfully" }); // Produkt nicht gefunden
        }
      }
    );
  } catch (error) {
    console.error("Fehler beim Abrufen des Produkts:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
}); */

app.listen(PORT, () => {
  console.log(`Server running on port  http://localhost:${PORT}`);
});
