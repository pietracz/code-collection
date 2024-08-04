import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Listing from './Listing';

const name = 'Julian';
function myIfAnweisung(){}; /* Ausgelagerte Funktion */

const customStyle = { /* Kann auch so verwendet werden: <h3 style={customStyle}>{name}</h3> */
  color: 'blue',
  backgroundColor: 'yellow',
  border: '1px solid black'
}

customStyle.backgroundColor = "black"; /* Änder die HIntergrundfarbe, die oben definiert wurde */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> {/* Fragmente */}
  <h1> Hallo Welt</h1> {/* einzelne Tags können nicht gerendert werden, dazu brauchen wir Fragmente, die um die Tags liegen */}
  <h2 className="heading">Ich bin {name}</h2> {/* In react nutzen wir nicht die gewöhnlichen Klassen sondern müssen diese className nennen */}
  <h3 style={{color: 'blue',}} /* Wenn wir etwas inline stylen wollen, müssen wir ein JS Object verwenden und um JS Code zu nutzen, müssen wir nochmal geschweifte Klammern nutzen */>Meine Lieblingszahl ist: {Math.round(Math.random() * 10)}</h3>
  <h4> Meine If-Schleife ist: {}</h4> {/* Du kannst Schleifen nicht einfach in die geschweiften Klammern schreiben, sondern musst die als Funktion auslagern */}
  <Listing Name={'Christina'} Price={'30'}/> {/* // Übergabe der Parameter an die Funktion */}
  </>
);