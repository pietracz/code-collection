import React from "react";
import Head from "../components/head";
import Nav from "../components/navbar";
import Footer from "../components/footer";

function Privacy() {
  return (
    <>
      <Head site={"Datenschutzerklärung"} />
      <Nav />
      <main>
        <h2>Datenschutzerklärung</h2>
      </main>
      <Footer />
    </>
  );
}

export default Privacy;
