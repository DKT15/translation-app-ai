import React from "react";
import "../styles/Content.css";

export default function Content() {
  return (
    <div className="content-container">
      <h2>Text to translate</h2>
      <input type="text" />
      <h2>Select a language</h2>
      <label className="french-label">
        <input type="radio" name="language" value="french" />
        French
      </label>
      <label className="japanese-label">
        <input type="radio" name="language" value="japanese" />
        Japanese
      </label>
      <label className="spanish-label">
        <input type="radio" name="language" value="spanish" />
        Spanish
      </label>
      <br />
      <button>Translate</button>
    </div>
  );
}
