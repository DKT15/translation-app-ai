import React from "react";
import "../styles/Content.css";
import France from "../assets/fr-flag.png";
import Japan from "../assets/jpn-flag.png";
import Spain from "../assets/sp-flag.png";

export default function Content() {
  const [isLanguage, setIsLanguage] = React.useState(""); // will be tracking the value here.
  const [isTranslated, setIsTranslated] = React.useState(false); // tracking to see if the user has hit the button the translate
  const [inputText, setInputText] = React.useState(""); // state for input
  const [userTranslation, setUserTranslation] = React.useState(""); //state for translation

  console.log(isTranslated);

  // setting onchange to the actual value from the radio e.target.value gets back.
  // e.target.value is used as that is how to access a radios value and to know what the user has selected.
  const handleLanguage = (e) => {
    setIsLanguage(e.target.value);
  };

  const newTranslation = () => {
    setIsTranslated(false);
    setIsLanguage("");
    setInputText("");
    setUserTranslation("");
  };

  const translateText = () => {
    return (
      <div className="content-container">
        <h2>Original text 👇</h2>
        <textarea className="original-text" value={inputText}></textarea>
        <h2>Your translation 👇</h2>
        <textarea
          className="user-translation"
          value={userTranslation} //setting the value of state to whatever the users translation is.
          readOnly
        ></textarea>
        <button onClick={isTranslated && newTranslation} className="reset-btn">
          Start Over
        </button>
      </div>
    );
  };

  // the state value is being set in checked.
  // onChange updates state with the handleLanguage function.
  return (
    <div className="container">
      {!isTranslated ? (
        <div className="content-container">
          <h2>Text to translate 👇</h2>
          <textarea
            className="translation-input"
            value={inputText} // setting the value of the state.
            onChange={(e) => setInputText(e.target.value)} //updating state to whatever the user types.
          ></textarea>
          <h2>Select a language 👇</h2>
          <div className="buttons-element">
            <label className="french-label">
              <input
                type="radio"
                name="language"
                value="french"
                checked={isLanguage === "french"}
                onChange={handleLanguage}
              />
              <img src={France} alt="French flag" className="flag-icon" />{" "}
              French
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
              <img src={Spain} alt="Spanish flag" className="flag-icon" />{" "}
              Spanish
            </label>
          </div>
          <br />
          {/* The button will only show if a language has been selected. */}
          {isLanguage && (
            <button
              onClick={() => setIsTranslated(true)} //updating state to true when the button is clicked.
              className="translate-btn"
            >
              Translate
            </button>
          )}
        </div>
      ) : (
        translateText()
      )}
    </div>
  );
}
