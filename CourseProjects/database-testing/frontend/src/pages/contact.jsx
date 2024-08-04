import React from "react";
import Head from "../components/head";
import Nav from "../components/navbar";
import Footer from "../components/footer";

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Head site={"Kontakt"} />
      <Nav />
      <main>
        <div style={{ padding: "20px" }}>
          <h1>Contact Us</h1>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "500px", margin: "auto" }}
          >
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  height: "100px",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                background: "blue",
                color: "white",
                border: "none",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
