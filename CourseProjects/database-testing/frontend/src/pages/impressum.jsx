import React from "react";
import Head from "../components/head";
import Nav from "../components/navbar";
import Footer from "../components/footer";

function Impressum() {
  return (
    <>
      <Head site={"Impressum"} />
      <Nav />
      <main>
        <h2>Impressum</h2>
      </main>
      <Footer />
    </>
  );
}

export default Impressum;
