import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function Create() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const blogInfo = {
      title: event.target.title.value,
      body: event.target.body.value
    };
  
    try {
      const response = await fetch('http://localhost:5000/submit', { // response wird hier zugewiesen
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogInfo)
      });
  
      if (response.ok) { // Überprüfe den Status der Antwort
        const data = await response.json(); // Nur aufrufen, wenn die Antwort erfolgreich war
        console.log(data);
        navigate('/');
      } else {
        // Fehlerbehandlung, z. B. eine Fehlermeldung anzeigen
        console.error('Fehler beim Senden der Daten:', response.status, response.statusText);
      }
  
    } catch (error) {
      console.error("Error submitting data:", error);
      // Hier könntest du dem Benutzer eine Fehlermeldung anzeigen, z.B. mit einem Alert
    }
  }

    return (
        <>
        <Header site={'Create'} />
        <Nav />
        <div className="create-blog content">
          <form onSubmit={handleSubmit}> {/* Eventhandler für Submit */}
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="body">Content:</label>
            <textarea id="body" name="body" required></textarea> 
            <div className="buttons">
              <button className="btn"><span></span><p data-start="good luck!" data-text="Create Blog" data-title="Ready"></p></button>
            </div>
          </form>
        </div>
        <Footer />
        </>
    )
}

export default Create;