const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const quotes = [
  "Wenn du denkst, du bist am Ende, bist du erst bei 40%. Der wahre Kampf beginnt jetzt.",
  "Schmerz ist der Wachhund des Erfolgs – je mehr du ihn fühlst, desto näher bist du deinem Ziel.",
  "Niemand kommt, um dich zu retten. Du musst selbst dein eigener Held sein.",
  "Hör auf, Ausreden zu finden. Niemand schuldet dir etwas – hol es dir selbst.",
  "Erfolg kommt nicht zu denen, die darauf warten. Er gehört denen, die bereit sind, die Hölle zu durchschreiten.",
  "Der Mensch ist zu unglaublichen Dingen fähig – wenn er bereit ist, durch den Schmerz zu gehen.",
  "Es gibt keinen einfachen Weg. Das Einzige, was zählt, ist, wie viel du bereit bist zu opfern.",
  "Du musst der härteste Motherf*cker in deinem eigenen Kopf sein. Kein Mitleid, nur Fokus.",
  "Jede Sekunde, die du vergeudest, verliert jemand anders nicht. Sei der, der immer weitergeht.",
  "Du kannst der Schwächste im Raum sein, aber wenn du nie aufgibst, bist du der Stärkste im Geist.",
];

app.get("/quotes", (req, res) => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  res.status(200).json({
    quote: {
      id: randomNumber,
      quote: quotes[randomNumber],
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
