import React from "react";
import data from "./MacbookList.json";
import './ProductPage.css';

function Macbook () {
    return (
        <>
        <div id="product-page">
            <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
            <img id="logo-product" src={process.env.PUBLIC_URL + "/Images/AppleLogo.png"}/>
            </a>
            <h1 id="header">MacBook</h1>
        <div id="lists">
        {data.ItemList.map((macbook) => (
                <div id="product-box" key={macbook.src}>
                    <img id="product-image" src={process.env.PUBLIC_URL + '/Images/' + macbook.src}/>
                    <p id="product-name-text" key={macbook.src}>{macbook.model}</p>
                        <p id="spec-detail" key={macbook.src}><p id="specifications">Specifications:</p>{macbook.specifications}</p>
                        <p id="price">{macbook.price}</p>
                    <button id="add-to-cart">Add to Cart<img id="cart-image" src={process.env.PUBLIC_URL + "/Images/ButtonCartLogo.png"}/></button>
                </div>
        ))}
        </div>
        </div>
        </>
    )
}

export default Macbook;