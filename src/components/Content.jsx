import React from "react";
import "../styles/Content.css";

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
    <div className="content-container">
      <h2>Text to translate</h2>
      <input type="text" />
      <h2>Select a language</h2>
      <label className="french-label">
        <input
          type="radio"
          name="language"
          value="french"
          checked={isLanguage === "french"}
          onChange={handleLanguage}
        />
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
        Spanish
      </label>
      <br />
      {/* The button will only show if a language has been selected. */}
      {isLanguage && <button>Translate</button>}
    </div>
  );
}
