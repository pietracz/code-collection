import React from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function Create() {
    return (
        <>
        <Header site={'Create'} />
        <Nav />
        <div className="create-blog content">
          <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="snippet">Snippet:</label> 
            <input type="text" id="snippet" name="snippet" required />
            <label htmlFor="body">Content:</label>
            <textarea id="body" name="body" required></textarea> 
  
            <button>Submit</button>
          </form>
        </div>
        <Footer />
        </>
)};

export default Create;