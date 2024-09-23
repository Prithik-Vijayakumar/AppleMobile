import React from "react";
import './Master.css';
import data from './Products.json';
import FrontPage from "./FrontPage";

function ProductGallery () {
    return (
        <>
            <body>
                <div id="gallery">
                    {data.ProductList.map((product) => (
                    <div id="product-container" key={product.src}>
                        <img id="product" src={'../Images/' + product.src}/>
                        <p id="product-name" key={product.src}>{product.name}</p>
                        <p id="product-details" key={product.src}>{product.description}</p>
                        <button id="cart">To Buy</button>
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <button id="more">Learn More</button>
                        </a>    
                    </div>               
                    ))}
                </div>    
            </body>
        </>
    )
}

export default ProductGallery;