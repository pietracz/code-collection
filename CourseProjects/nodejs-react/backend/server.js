const express = require('express');
const cors = require('cors');
const fs = require('fs').promises; // uses fs.readFile instead of fs.readFileSync
const bodyParser = require('body-parser');
const PORT = 5000

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/submit', async (req, res) => {
    try {
      const blogs = await fs.readFile('blogs.json', 'utf8'); // async/await verwenden
      const parsedBlogs = JSON.parse(blogs);
      res.status(200).json(parsedBlogs);
    } catch (error) {
      console.error('Fehler beim Lesen der Blogs:', error);
      res.status(500).json({ error: 'Interner Serverfehler' });
    }
  });
  
  app.get('/shop', async (req, res) => {
    try {
      const items = await fs.readFile('itemInformation.json', 'utf8'); // async/await verwenden
      const parsedItems = JSON.parse(items);
      res.status(200).json(parsedItems);
    } catch (error) {
      console.error('Fehler beim Lesen der Items:', error);
      res.status(500).json({ error: 'Interner Serverfehler' });
    }
  });

app.post('/submit', async (req, res) => {
    try {
        const newBlog = req.body; // Daten aus dem Anfragekörper (Request Body) auslesen
    
        // Datenvalidierung (optional, aber empfohlen)
        if (!newBlog.title || !newBlog.body) {
          return res.status(400).json({ error: 'Title and body are required' });
        }
    
        // Bestehende Blogs aus der Datei lesen
        let blogs = [];
        try {
          const data = await fs.readFile('blogs.json', 'utf8');
          blogs = JSON.parse(data);
        } catch (err) {
          // Wenn die Datei nicht existiert, wird ein leeres Array verwendet
          if (err.code !== 'ENOENT') {
            throw err; // Andere Fehler weiterwerfen
          }
        }
    
        // Neuen Blog hinzufügen
        blogs.push(newBlog);
    
        // Aktualisierte Blogs in die Datei schreiben
        await fs.writeFile('blogs.json', JSON.stringify(blogs, null, 2)); // 2 Leerzeichen für Einrückung
    
        res.status(201).json({ message: 'Blog erfolgreich erstellt', blog: newBlog }); // Erfolgsantwort
      } catch (error) {
        console.error('Fehler beim Speichern des Blogs:', error);
        res.status(500).json({ error: 'Interner Serverfehler' }); // Fehlerantwort
      }
    });

app.listen(PORT, () => 
    console.log(`Server läuft auf http://localhost:${PORT}`));