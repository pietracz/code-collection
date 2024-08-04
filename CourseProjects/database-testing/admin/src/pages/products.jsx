import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/head";
import Nav from "../components/navbar";
import Footer from "../components/footer";

function Produkte() {
  return (
    <>
      <Header site={"Produkte"} />
      <Nav />
      <main>
        <h2>Dashboard</h2>
        <div className="dashboard-wrapper"></div>
      </main>
      <Footer />
    </>
  );
}

export default Produkte;
