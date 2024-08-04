import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css"; /* Die css kann auch in den pages separat importiert werden, wenn ein individuelles Styling notwendig ist  */
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Shop from "./pages/shop.jsx";
import Error from "./pages/404.jsx";
import Create from "./pages/create.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </>
);

/* export von mehreren variablen oder funktionen:

export {  
  function1,
  function2,
  function3
} 

import erfolgt so:
import * as test from './file'

Nutzung dann so:
<>
<h2>{test.pi}<h2/>
</> 
*/
