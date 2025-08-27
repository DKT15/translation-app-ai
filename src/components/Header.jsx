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
The fields then need to either be replaced or the button links to a page to display the following:

Original text - with the users text in a text field 
Your translation - with the translated users text depending on the language they selected.
Start over button - takes the user back to the original screen

Using the open AI API to handle the translations and if available present language options to users on the frontend.

Will create a frontend helper 
Serverless function will be created and linked to netflify to protect the API key.

*/
