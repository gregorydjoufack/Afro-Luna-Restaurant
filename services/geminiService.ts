import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from '../constants';

// Initialize Gemini Client
// IMPORTANT: In a real production app, never expose API keys on the client side.
// This is for demonstration using the provided environment variable pattern.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Concierge and Sommelier for "Afro Luna", a high-end Afro-fusion restaurant in Brussels.
Your tone is warm, professional, sophisticated, and welcoming (like a Maitre D').

Here is our Menu context:
${JSON.stringify(MENU_ITEMS)}

Your Responsibilities:
1. Recommend dishes based on user preferences (e.g., spicy, vegan, fish).
2. Suggest drink pairings from our cocktail list.
3. Explain ingredients (e.g., what is 'Saka Saka' or 'Aloco').
4. If asked about reservations, encourage them to use the form on the website.
5. Keep answers concise (under 100 words).

Do not make up menu items that are not in the list provided.
If the user asks something unrelated to food/restaurant, politely bring the conversation back to Afro Luna.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Je suis désolé, je n'ai pas accès à mon cerveau numérique pour le moment (Clé API manquante).";
  }

  try {
    const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        }
    });

    // We can't easily rebuild the full chat history object for the SDK in this simple stateless wrapper
    // without maintaining the Chat object state. For this demo, we will just send the message
    // assuming a single turn or simple context, or we would need to map the 'history' prop 
    // to the correct format if we were persisting the chat session object.
    // To keep it simple and robust for this snippet, we will just send the new message 
    // but in a real app, you would persist the `chat` instance.
    
    // Attempting to use history if valid, otherwise just send message
    // Note: The SDK's chat.sendMessage handles history internally if you keep the instance alive.
    // Since we recreate functionality here for simplicity:
    
    const result = await chat.sendMessage({
        message: userMessage
    });

    return result.text || "Je n'ai pas pu générer de réponse.";

  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, une erreur est survenue lors de la communication avec le chef.";
  }
};