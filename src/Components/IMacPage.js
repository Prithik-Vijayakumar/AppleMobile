import React from "react";
import data from "./IMacList.json";
import './ProductPage.css';

function IMac () {
    return (
        <>
        <body id="product-page">
            <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
            <img id="logo-product" src="../Images/AppleLogo.png"/>
            </a>
            <h1 id="header">iMac</h1>
        <div id="lists">
        {data.ItemList.map((imac) => (
                <div id="product-box" key={imac.src}>
                    <img id="product-image" src={'./Images/' + imac.src}/>
                    <p id="product-name-text" key={imac.src}>{imac.model}</p>
                        <p id="spec-detail" key={imac.src}><p id="specifications">Specifications:</p>{imac.specifications}</p>
                        <p id="price">{imac.price}</p>
                    <button id="add-to-cart">Add to Cart<img id="cart-image" src="./Images/ButtonCartLogo.png"/></button>
                </div>
        ))}
        </div>
        </body>
        </>
    )
}

export default IMac;