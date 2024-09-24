import React from "react";
import data from "./IPadList.json";
import './ProductPage.css';

function IPad () {
    return (
        <>
        <body id="product-page">
            <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
            <img id="logo-product" src="../Images/AppleLogo.png"/>
            </a>
            <h1 id="header">iPad</h1>
        <div id="lists">
        {data.ItemList.map((ipad) => (
                <div id="product-box" key={ipad.src}>
                    <img id="product-image" src={'./Images/' + ipad.src}/>
                    <p id="product-name-text" key={ipad.src}>{ipad.model}</p>
                        <p id="spec-detail" key={ipad.src}><p id="specifications">Specifications:</p>{ipad.specifications}</p>
                        <p id="price">{ipad.price}</p>
                    <button id="add-to-cart">Add to Cart<img id="cart-image" src="./Images/ButtonCartLogo.png"/></button>
                </div>
        ))}
        </div>
        </body>
        </>
    )
}

export default IPad;