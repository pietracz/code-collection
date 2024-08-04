import React from "react";
import { useEffect, useState } from "react";
import Head from "../components/head";
import Nav from "../components/navbar";
import Filter from "../components/filter";
import ItemCard from "../components/itemcard";
import Footer from "../components/footer";

function Smartphones() {
  const [products, setProducts] = useState([]);
  const [smartphoneManufacturers, setSmartphoneManufacturers] = useState([]);
  const [itemCards, setItemCards] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("http://localhost:5000/products");
        const product = await response.json();
        setProducts(product);
        console.log(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, []);

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
    console.log(smartphoneManufacturers);
  }, [products]);

  useEffect(() => {
    const itemCard = Array.from(
      new Set(
        products.filter(
          (item) => item.technicalDetails.type.toLowerCase() === "smartphone"
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
            item.technicalDetails.type.toLowerCase() === "smartphone" &&
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
          (item) => item.technicalDetails.type.toLowerCase() === "smartphone"
        )
      )
    );
    setItemCards(resetedDevices);
  }

  return (
    <>
      <Head site={"Smartphones"} />
      <Nav />
      <main>
        <div className="mainContainer">
          <div className="filterWrapper">
            <h2>Filter</h2>
            <div className="itemFilter">
              <Filter
                clickHandler={clickHandler}
                title="Hersteller"
                options={smartphoneManufacturers}
              />
              <button onClick={resetFilter}>Filter zurücksetzen</button>
            </div>
          </div>
          <div className="containerWrapper">
            <h2>Smartphones</h2>
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

export default Smartphones;
