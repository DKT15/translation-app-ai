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
  const [loading, setLoading] = React.useState(false); // tracking the loading state

  // setting onchange to the actual value from the radio e.target.value gets back.
  // e.target.value is used as that is how to access a radios value and to know what the user has selected.
  const handleLanguage = (e) => {
    setIsLanguage(e.target.value);
  };

  // when the startover button is hit, all values will be reset/
  const newTranslation = () => {
    setIsTranslated(false);
    setIsLanguage("");
    setInputText("");
    setUserTranslation("");
  };

  // communicating with the netlify function to complete the translation
  const handleTranslate = async () => {
    setLoading(true);
    try {
      // sending data off to the ai to begin with.
      const res = await fetch("/.netlify/functions/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText, targetLang: isLanguage }), // this inserts the current user text and language selection in the AI prompt.
      });

      // awaiting the response. Setting the user translation to what the ai gives back.
      const data = await res.json();
      setUserTranslation(data.translation); //translation is the property the server responds with the correct translated text.
      setIsTranslated(true); //setting true which will switch the users view so they can see the translated text.
    } catch (error) {
      console.error("Translation failed", error);
    } finally {
      setLoading(false); //loading is now false.
    }
  };

  // code that will be the new view for the user when they hit the translate button.
  const translateText = () => {
    return (
      <div className="content-container">
        <h2 id="original-text">Original text 👇</h2>
        <textarea
          className="original-text"
          value={inputText}
          readOnly // doesn't allow users to type.
          aria-describedby="original-text"
        ></textarea>
        <h2 id="your-translation">Your translation 👇</h2>
        <textarea
          className="user-translation"
          value={userTranslation} //setting the value of state to whatever the users translation is.
          readOnly
          aria-label={`Here is your ${isLanguage} translation: ${userTranslation}`}
          aria-describedby="user-translation"
        ></textarea>
        <button onClick={newTranslation} className="reset-btn">
          Start Over
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      {!isTranslated ? (
        <div className="content-container">
          <h2>Text to translate 👇</h2>
          <textarea
            className="translation-input"
            value={inputText} // setting the value of the state.
            onChange={(e) => setInputText(e.target.value)} //updating state to whatever the user types.
            aria-label="Enter the text you want to translate"
          ></textarea>
          <h2 id="language-heading">Select a language 👇</h2>
          <div
            className="buttons-element"
            role="radiogroup"
            aria-labelledby="language-heading"
          >
            <label className="french-label">
              <input
                type="radio"
                name="language"
                value="french"
                checked={isLanguage === "french"} // the state value is being set in checked.
                onChange={handleLanguage} // onChange updates state with the handleLanguage function.
                aria-label="French"
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
                aria-label="Japanese"
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
                aria-label="Spanish"
              />
              <img src={Spain} alt="Spanish flag" className="flag-icon" />{" "}
              Spanish
            </label>
          </div>
          <br />
          {/* The button will only show if a language has been selected. */}
          {isLanguage && (
            <button
              onClick={handleTranslate} // fetches the translation which allows for the view to be changed.
              className="translate-btn"
              disabled={loading}
            >
              {loading ? "Translating..." : "Translate"}
            </button>
          )}
        </div>
      ) : (
        translateText()
      )}
    </div>
  );
}
