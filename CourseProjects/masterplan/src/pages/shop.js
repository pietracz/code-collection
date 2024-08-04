import React from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import itemInformation from '../components/itemInformation';



function Items({ title, image, oldPrice, newPrice }) {
    return (
      <div className="container">
        <div className="overlay"> 
          <div className="items head">
            <p className="name">{title}</p>
            <hr />
          </div>
          <div className="items price">
            <p className="old">Old Price: <div className="line-trough">${oldPrice}</div></p>
            <p className="new">New Price: <div>${newPrice}</div></p>
          </div>
          <div className="items cart">
            <i className="fa fa-shopping-cart"></i>
            <span><strong>ADD TO CART</strong></span>
          </div>
        </div>
        <img src={image} alt={title} className="bg-image" /> {/* Bild als Hintergrund */}
      </div>
    );
  }

function Shop() {
    return (
  <>
  <Header site={'Shop'}/>
  <Nav />
    <div className="content">
        <h2>Shop</h2>
        <div className="items-container">
        {itemInformation.map((item, index) => ( /* Index über map in die Liste eintragen und als key speichern */
        <Items 
        key={index}
        title={item.title}
        image={item.image}
        oldPrice={item.oldPrice}
        newPrice={item.newPrice}/>
        ))}
        </div>
        </div>
  <Footer />
  </>
)};

export default Shop;