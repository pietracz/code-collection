import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.css'; /* Die css kann auch in den pages separat importiert werden, wenn ein individuelles Styling notwendig ist  */
import Home from './pages/home';
import About from './pages/about';
import Shop from './pages/shop';
import Error from './pages/404';
import Create from './pages/create';

const root = ReactDOM.createRo

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/create" element={<Create />} />
            <Route path="/about" element={<About />} />
            <Route path="/merchandise" element={<Shop />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );