import React from "react";
import Head from "../components/head";
import Nav from "../components/navbar";
import Footer from "../components/footer";

function Error() {
  return (
    <>
      <Head site={"Error"} />
      <Nav />
      <main>
        <h2>Error</h2>
      </main>
      <Footer />
    </>
  );
}

export default Error;
