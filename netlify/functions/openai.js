// This is the code for the serverless function.

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.TRANSLATION_API_KEY }); // setting openai to equal the API key for it to be called later.

export async function handler(event) {
  const { text, targetLang } = JSON.parse(event.body); //reads the request body that has been sent from the frontend by extracting the text and targetLang into variables.

  // opening up a try and catch.
  try {
    const completion = await openai.chat.completions.create({
      //sending a chat completion request to OpenAI.
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a translation assistant. Translate everything into ${targetLang}. Do not explain, only translate.`,
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0, //using less creativity here as it isn't needed for translation.
      max_tokens: 50, //limits the output lenghth.
    });
    return {
      // On success, HTTP 200 is returned along with pushing the translation string extracted from the AI.
      statusCode: 200,
      body: JSON.stringify({
        translation: completion.choices[0].message.content, //this is where the translation is located and you can see this when console logging.
      }),
    };
  } catch (error) {
    // if anything goes wrong, an error is logged and a HTTP 500 is returned along with an error message.
    console.error("OpenAI error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Translation failed" }),
    };
  }
}
