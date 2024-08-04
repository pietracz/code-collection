import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Head from "../components/head";
import Nav from "../components/navbar";
import Footer from "../components/footer";

function Product() {
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState([]);
  const [tagName, setTagname] = useState("");
  const [tagButtons, setTagButtons] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const product = await response.json(response);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    function findTagname() {
      if (product.technicalDetails) {
        const type = product.technicalDetails.type.toLowerCase();
        if (type === "smartphone") {
          setTagname("Speicherkapzität");
          setTagButtons(product.technicalDetails.storage);
        } else if (type === "smartwatch") {
          setTagname("Displaygröße");
          setTagButtons(product.technicalDetails.displaySize);
        }
      }
    }
    findTagname();
  }, [product]);

  return (
    <>
      <Head site={product.name} />
      <Nav />
      <main>
        <div className="mainContainer">
          <div className="productWrapper">
            <div className="productOverview">
              <div className="overviewLeft">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="overviewRight">
                <h2>
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(product.price)}
                </h2>
                <p>Farbauswahl</p>
                <div className="colorOptions">
                  {product.color ? (
                    product.color.map((color, index) => (
                      <button key={index}>{color}</button>
                    ))
                  ) : (
                    <p>Lade...</p>
                  )}
                </div>
                <p>{tagName}</p>
                <div className="technicalOptions">
                  {tagButtons.map((buttons, index) => (
                    <button key={index}>{buttons}</button>
                  ))}
                </div>
                <button onClick={() => addToCart(product)}>
                  In den Warenkorb
                </button>
              </div>
            </div>
            {/* <div className="productCombination"></div> */}
            <div className="productDetails">
              <div className="productDescription"></div>
              <div className="technicalDetails"></div>
              <div className="reviews"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Product;
