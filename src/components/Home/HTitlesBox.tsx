import React from 'react'
import VoadesLogoImg from "./../../resources/voadesLogoImg.png";

const HTitlesBox : React.FC  = () => {


    return (
        <div className="HTitlesBox">
            <span className="MainTitles">
                <div className="LogoTitleContainer">
                    <img src={VoadesLogoImg}/>
                    <p>México</p>
                </div>
                <h2>Voces Amigas de Esperanza</h2>
            </span>
        </div>
    )
}

export default HTitlesBox
