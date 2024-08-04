const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = 3000

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.get('/home', (req, res) => {
    res.sendFile(
      __dirname + '/views/home.html'
    );
  });

app.get('/about', (req, res) => {
    res.sendFile(
      __dirname + '/views/about.html'
    );
  });

app.get('/contact', (req, res) => {
    res.sendFile(
      __dirname + '/views/contact.html'
    );
  });

app.get('/login', (req, res) => {
    res.sendFile(
      __dirname + '/views/login.html'
    );
  });

app.get('/register', (req, res) => {
    res.sendFile(
      __dirname + '/views/register.html'
    );
  });

app.get('/courses', (req, res) => {
    res.sendFile(
      __dirname + '/views/courses.html'
    );
  });

app.get('/projects', (re, res) => {
    res.sendFile(
      __dirname + '/views/projects.html'
    );
  });
  
  app.post('/submit', (req, res) => {

    const form = req.body;
  
    let meineListe = {
      firstname: form.firstname, 
      lastname: form.lastname,
      email: form.email,
      password: bcrypt.hashSync(form.password, 10),
    };
  
    fs.readFile('users.json', (err, data) => {
      if (err) {
        fs.writeFile('users.json', JSON.stringify([meineListe], null, 2), err => {
          if (err) {
            res.status(500).send('Fehler beim Erstellen der Datei');
            return;
          }
          res.send('Daten wurden erfolgreich empfangen!');
        });
      } else if (!err) {
        let json = JSON.parse(data);
        json.push(meineListe);
        fs.writeFile('users.json', JSON.stringify(json, null, 2), err => {
          if (err) {
            res.status(500).send('Fehler beim Speichern der Daten');
            return;
          }
          res.send('Daten wurden erfolgreich empfangen!');
        });
      } else {
        res.status(500).send('Unbekannter Fehler');
      }
    });
  });

  app.listen(PORT, (req, res) => {
    console.log(`Server gestartet, unter: http://localhost:${PORT}/home`);
  })