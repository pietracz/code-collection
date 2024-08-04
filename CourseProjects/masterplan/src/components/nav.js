import React from 'react';

function Nav() {
    return (
        <nav>
        <div className="site-title">
            <a href="/">
                <h1>Limitless Continuum</h1>
            </a>
            <p>If you want it, go get it</p>
        </div>
        <ul>
            <li><a href="/">Blogs</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/merchandise">Merchandise</a></li>
            <li><a href="/blogs/create">New Blog</a></li>
        </ul>
    </nav>
    )
}

export default Nav;