const express = require('express')
const app = express()
const fs = require('fs')
const PORT = 3000

app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  console.log(req.method)
  console.log(`Hallo aus der middleware.`)
  next()
})

app.get('/', (req, res) => {
  res.sendFile(
    __dirname + '/main.html'
  );
});

app.post('/submit', (req, res) => {

  const form = req.body;

  let meineListe = {
    firstName: form.firstname, 
    lastName: form.lastname,
    email: form.email,
    password: form.password,
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

app.listen(PORT, () => {
  console.log(`Server gestartet: http://localhost:${PORT}`)
})