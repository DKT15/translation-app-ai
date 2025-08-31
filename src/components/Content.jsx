import React from "react";
import "../styles/Content.css";
import France from "../assets/fr-flag.png";
import Japan from "../assets/jpn-flag.png";
import Spain from "../assets/sp-flag.png";

export default function Content() {
  const [isLanguage, setIsLanguage] = React.useState(""); // will be tracking the value here.

  // setting onchange to the actual value from the radio e.target.value gets back.
  // e.target.value is used as that is how to access a radios value and to know what the user has selected.
  const handleLanguage = (e) => {
    setIsLanguage(e.target.value);
  };

  // the state value is being set in checked.
  // onChange updates state with the handleLanguage function.
  return (
    <div className="container">
      <div className="content-container">
        <h2>Text to translate</h2>
        <input type="text" />
        <h2>Select a language</h2>
        <div className="buttons-element">
          <label className="french-label">
            <input
              type="radio"
              name="language"
              value="french"
              checked={isLanguage === "french"}
              onChange={handleLanguage}
            />
            <img src={France} alt="French flag" className="flag-icon" /> French
          </label>
          <label className="japanese-label">
            <input
              type="radio"
              name="language"
              value="japanese"
              checked={isLanguage === "japanese"}
              onChange={handleLanguage}
            />
            <img src={Japan} alt="Japanese flag" className="flag-icon" />{" "}
            Japanese
          </label>
          <label className="spanish-label">
            <input
              type="radio"
              name="language"
              value="spanish"
              checked={isLanguage === "spanish"}
              onChange={handleLanguage}
            />
            <img src={Spain} alt="Spanish flag" className="flag-icon" /> Spanish
          </label>
        </div>
        <br />
        {/* The button will only show if a language has been selected. */}
        {isLanguage && <button className="translate-btn">Translate</button>}
      </div>
    </div>
  );
}
