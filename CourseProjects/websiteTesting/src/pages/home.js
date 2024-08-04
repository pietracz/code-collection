import React from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

function BlogList({blogs = []}) {
  if (blogs.length > 0) {
    return (
      <div>
        {blogs.forEach(blog => (
          <div key={blog.id}>
            <h3 className="title">{blog.title}</h3>
            <p className="snippet">{blog.snippet}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>There are no blogs to display</p>;
  }
}
  

function Home() {
    return (
  <>
  <Header site={'Blogs'}/>
  <Nav />
  <BlogList />
  <Footer />
  </>
)};

export default Home;