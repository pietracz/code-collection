import React from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function About() {
    return (
  <>
  <Header site={'About'} />
  <Nav />
    <div className="about content">
        <h2>About Us</h2>
        <p>
        Be the last one out to get this dough? No way
        <br/>
        Love one of you bucket-headed hoes? No way
        <br/>
        Hit the streets, then we break the code? No way
        <br/>
        Hit the brakes, when they on patrol? No way
        <br/>
        - Money Trees
        </p>
    </div>
  <Footer />
  </>
)};

export default About;