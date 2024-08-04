import React from "react";
import Head from "../components/head";
import Nav from "../components/navbar";
import Footer from "../components/footer";

function Login() {
  return (
    <>
      <Head site={"Login"} />
      <Nav />
      <main>
        <h2>Login</h2>
      </main>
      <Footer />
    </>
  );
}

export default Login;
