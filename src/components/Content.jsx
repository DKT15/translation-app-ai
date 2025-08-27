import React from "react";
import "../styles/Content.css";

export default function Content() {
  return (
    <div className="content-container">
      <h2>Text to translate</h2>
      <input type="text" />
      <h2>Select a language</h2>
      <input type="radio" />
      <input type="radio" />
      <input type="radio" />
      <button>Translate</button>
    </div>
  );
}
