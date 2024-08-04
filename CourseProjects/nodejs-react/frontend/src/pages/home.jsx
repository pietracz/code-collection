import { useEffect, useState } from 'react';
import React from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function BlogList({ blog }) {
    return (
        <div key={blog.id}>
            <h3 className="title">{blog.title}</h3>
            <p className="body">{blog.body}</p>
        </div>
    )
};

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/submit')
       .then(res => res.json())
       .then(data => setData(data))
    }, []);

    return (
        <>
        <Header site={'Blogs'} />
        <Nav />
        <div className="content">
            <h2>Blogs</h2>
        <div className='blogs'>
            {data.length > 0 ? (
            data.map((blog, index) => (
        <BlogList 
        key={index}
        blog={blog}/>
            ))) : (
                <p>There are no blogs to display</p>
            )}
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Home;