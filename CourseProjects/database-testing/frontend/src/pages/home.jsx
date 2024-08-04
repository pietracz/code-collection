import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Head from "../components/head";
import Nav from "../components/navbar";
import ItemCard from "../components/itemcard";
import Footer from "../components/footer";

function Shard({ options }) {
  return (
    <>
      <NavLink to="#">
        <div className="shard">
          <h3 className="shardTitle">{options}</h3>
        </div>
      </NavLink>
    </>
  );
}

function Home() {
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [smartphoneManufacturers, setSmartphoneManufacturers] = useState([]);
  const [smartwatchesManufacturers, setSmartwatchesManufacturers] = useState(
    []
  );

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("http://localhost:5000/products");
        const product = await response.json();
        setProducts(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    async function fetchAvgRating() {
      try {
        const response = await fetch("http://localhost:5000/avgRating");
        const rating = await response.json();
        setRatings(rating);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchAvgRating();
  }, [products]);

  useEffect(() => {
    const smartphoneManufacturers = Array.from(
      new Set(
        products
          .filter(
            (item) => item.technicalDetails.type.toLowerCase() === "smartphone"
          )
          .map((item) => item.manufacturer)
      )
    );
    setSmartphoneManufacturers(smartphoneManufacturers);
  }, [products]);

  useEffect(() => {
    const smartwatchesManufacturers = Array.from(
      new Set(
        products
          .filter(
            (item) => item.technicalDetails.type.toLowerCase() === "smartwatch"
          )
          .map((item) => item.manufacturer)
      )
    );
    setSmartwatchesManufacturers(smartwatchesManufacturers);
  }, [products]);

  return (
    <>
      <Head site={"Home"} />
      <Nav />
      <main>
        <h2>Home</h2>
        <div className="mainContainer">
          <div className="shardContainer">
            <div className="shardRow">
              <NavLink to="/smartphones">
                <div className="shard">
                  <h3>Smartphones</h3>
                </div>
              </NavLink>
              {smartphoneManufacturers.map((smartphonManufacturer) => (
                <Shard options={smartphonManufacturer} />
              ))}
            </div>
            <div className="shardRow">
              {/* <NavLink to={`/smartwatches/${manufacturers.id}`}> */}
              <NavLink to="/smartwatches">
                <div className="shard">
                  <h3>Smartwatches</h3>
                </div>
              </NavLink>
              {smartwatchesManufacturers.map((smartwatchesManufacturer) => (
                <Shard options={smartwatchesManufacturer} />
              ))}
            </div>
          </div>
          <h2>Am besten bewertet:</h2>
          <div className="productContainer">
            {ratings ? (
              ratings.map((product) => <ItemCard options={product} />)
            ) : (
              <p>Lade...</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
