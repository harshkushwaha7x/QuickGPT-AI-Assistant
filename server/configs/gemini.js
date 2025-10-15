import axios from "axios";

// Gemini API setup for direct HTTP calls using axios
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

export async function sendGeminiChat(prompt) {
  const body = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  };
  const { data } = await axios.post(GEMINI_API_URL, body);
  return data;
}
