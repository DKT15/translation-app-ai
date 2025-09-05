// This is the code for the serverless function.

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.TRANSLATION_API_KEY });

export async function handler(event) {
  const { text, targetLang } = JSON.parse(event.body);

  try {
    const completion = await openai.chat.completions.create({
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
      temperature: 0,
      max_tokens: 50,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        translation: completion.choices[0].message.content,
      }),
    };
  } catch (error) {
    console.error("OpenAI error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Translation failed" }),
    };
  }
}
