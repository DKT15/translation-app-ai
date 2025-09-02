import React from "react";
import "../styles/Header.css";
import parrot from "../assets/parrot.png";
import worldmap from "../assets/worldmap.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="worldmap-container">
          <img
            src={worldmap}
            alt="image of a world map."
            className="worldmap"
          />
        </div>
        <div className="content">
          <img src={parrot} alt="image of a happy parrot." className="parrot" />
          <div className="text-wrapper">
            <h1>PollyGlot</h1>
            <p className="subtitle">Perfect Translation Every Time</p>
          </div>
        </div>
      </header>
    </>
  );
}

/* 


The code needs to get hold of the users inputted text and the language selected to then pass on to the AI, 
when the translate button is hit.

Mapping the radios into the prompts so the AI knows what language it needs to translate. isLangauge state will be important here as it holds the language the user has selected.

Will create a frontend helper 
Serverless function will be created and linked to netflify to protect the API key.

Make sure CSS follows best practice and looks decent on larger screens.

*/
