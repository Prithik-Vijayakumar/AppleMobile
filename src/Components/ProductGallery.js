import React from "react";
import './Master.css';
import data from './Products.json';
import { useNavigate } from "react-router-dom";

function ProductGallery() {
  const navigate = useNavigate();

  const handleClick = (product) => {
    if (product.src === "IPhone.png") {
      navigate('/iPhonePage');
    } else if (product.src === "Macbook.png") {
      navigate('/MacBookPage')
    } else if (product.src === "IMac.png") {
      navigate('/IMacPage')
    } else if (product.src === "IPad.png") {
      navigate('/iPadPage')
    }
  };

  return (
    <>
      <body id="product-gallery">
        <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
          <img id="logo-gallery" src="../Images/AppleLogo.png" alt="Apple Logo" />
        </a>
        <div id="gallery">
          {data.ProductList.map((product) => (
            <div id="product-container" key={product.src}>
              <img id="product" src={'../Images/' + product.src} alt={product.name} />
              <p id="product-name">{product.name}</p>
              <p id="product-details">{product.description}</p>
              <button id="to-buy" onClick={() => handleClick(product)}>To Buy</button>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <button id="more">Learn More</button>
              </a>
            </div>
          ))}
        </div>
      </body>
    </>
  );
}

export default ProductGallery;
