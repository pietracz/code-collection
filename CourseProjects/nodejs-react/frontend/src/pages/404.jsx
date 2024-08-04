import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';

function Error() {
    return (
        <>
        <Header site={'404'}/>
        <Nav />
        <div className="not-found content">
            <h2>Oops, page not found!</h2>
        </div>
        <Footer />
        </>
    )
};

export default Error;