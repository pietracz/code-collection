import React from "react";
import { useEffect, useState } from "react";
import Head from "../components/head";
import Nav from "../components/navbar";
import Filter from "../components/filter";
import ItemCard from "../components/itemcard";
import Footer from "../components/footer";

function Smartwatches() {
  const [products, setProducts] = useState([]);
  const [smartwatchesManufacturers, setSmartwatchesManufacturers] = useState(
    []
  );
  const [itemCards, setItemCards] = useState([]);

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
    const smartwatchesManufacturers = Array.from(
      new Set(
        products
          .filter(
            (item) => item.technicalDetails.type.toLowerCase() === "smartwatch"
          )
          .map((item) => item.manufacturer)
      )
    );
    // Filterung der Produkte um Inhalt spezifisch abzubilden
    //Verweis useEffect ab Zeile 37
    setSmartwatchesManufacturers(smartwatchesManufacturers);
    console.log(smartwatchesManufacturers);
  }, [products]);

  useEffect(() => {
    const itemCard = Array.from(
      new Set(
        products.filter(
          (item) => item.technicalDetails.type.toLowerCase() === "smartwatch"
        )
      )
    );
    setItemCards(itemCard);
  }, [products]);

  function clickHandler(manufacturer) {
    const filteredDevices = Array.from(
      new Set(
        products.filter(
          (item) =>
            item.technicalDetails.type.toLowerCase() === "smartwatch" &&
            item.manufacturer === manufacturer
        )
      )
    );
    setItemCards(filteredDevices);
  }

  function resetFilter() {
    const resetedDevices = Array.from(
      new Set(
        products.filter(
          (item) => item.technicalDetails.type.toLowerCase() === "smartwatch"
        )
      )
    );
    setItemCards(resetedDevices);
  }

  return (
    <>
      <Head site={"Smartwatches"} />
      <Nav />
      <main>
        <div className="mainContainer">
          <div className="filterWrapper">
            <h2>Filter</h2>
            <div className="itemFilter">
              <Filter
                clickHandler={clickHandler}
                title="Hersteller"
                options={smartwatchesManufacturers}
              />
              <button onClick={resetFilter}>Filter zurücksetzen</button>
            </div>
          </div>
          <div className="containerWrapper">
            <h2>Smartwatches</h2>
            <div className="itemContainer">
              {itemCards.map((product) => (
                <ItemCard options={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Smartwatches;
