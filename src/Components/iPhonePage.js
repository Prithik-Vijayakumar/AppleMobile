import React from "react";
import data from "./IphoneList.json";
import './ProductPage.css';

function Iphone () {
    return (
        <>
        <div id="product-page">
            <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
            <img id="logo-product" src={process.env.PUBLIC_URL + "/Images/AppleLogo.png"}/>
            </a>
            <h1 id="header">iPhone</h1>
        <div id="lists">
        {data.ItemList.map((iphone) => (
                <div id="product-box" key={iphone.src}>
                    <img id="product-image" src={process.env.PUBLIC_URL + '/Images/' + iphone.src}/>
                    <p id="product-name-text" key={iphone.src}>{iphone.model}</p>
                        <p id="spec-detail" key={iphone.src}><p id="specifications">Specifications:</p>{iphone.specifications}</p>
                        <p id="price">{iphone.price}</p>
                    <button id="add-to-cart">Add to Cart<img id="cart-image" src={process.env.PUBLIC_URL + "/Images/ButtonCartLogo.png"}/></button>
                </div>
        ))}
        </div>
        </div>
        </>
    )
}

export default Iphone;