import React from "react";

export default function Header() {
  <>
    <header></header>
  </>;
}

/* 
Create the Header 
In the main there are a few things that need to be addressed:
- Text to translate section - with text field 
- Select language - a list of 3 languages for the use to select
- Translate button 

When the translate button is hit, 
the fields need to either need to be replaced or the button links to a page to display the following:

Original text - with the users text in a text field 
Your translation - with the translated users text depending on the language they selected.
Start over button - takes the user back to the original screen

Using the open AI API to handle the translations and if available present language options to users on the frontend.

Will create a frontend helper 
Serverless function will be created and linked to netflify to protect the API key.

*/
