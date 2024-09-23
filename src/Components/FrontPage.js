import React from "react";
import './Master.css'
import { useNavigate } from "react-router-dom";

function FrontPage () {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('./ProductGallery');
    }

    return (
        <>
        <body>
            <div id="page-container">
                <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
                <img src="../Images/AppleLogo.png" id="logo"/>
                </a>
                <h1 id="title">Apple</h1>
                <h3 id="moto">The Technologies that<br/>Surprise You!</h3>
                <p id="para">Catalogue Website</p>
                <button id="btn-1" onClick={handleClick}>Catalogue</button>
            </div>
        </body>
        </>
    )
}

export default FrontPage;