
import { GoogleGenAI, Type } from "@google/genai";
import { BabyNameResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    name: {
      type: Type.STRING,
      description: "The generated name for the baby."
    },
    gender: {
      type: Type.STRING,
      description: "The gender of the baby (e.g., Male, Female)."
    },
    description: {
      type: Type.STRING,
      description: "A short, heartwarming description of the baby's personality, inspired by the parents' love."
    }
  },
  required: ['name', 'gender', 'description']
};

export const generateBabyName = async (maleName: string, femaleName: string): Promise<BabyNameResult> => {
  try {
    const prompt = `
      Based on the names of the parents, ${maleName} and ${femaleName}, who share a deep and loving bond, generate a beautiful name for their first-born baby.

      The name should be unique and meaningful, reflecting the love between the parents. Also, include the baby's gender and a short, heartwarming description of the baby's potential personality, inspired by the parents' names.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    const text = response.text.trim();
    // In case the model wraps the JSON in markdown
    const cleanedText = text.replace(/^```json\s*|```\s*$/g, '');
    const parsedResult = JSON.parse(cleanedText);

    return parsedResult as BabyNameResult;

  } catch (error) {
    console.error("Error generating baby name:", error);
    throw new Error("Failed to generate a name. The AI might be feeling shy today. Please try again.");
  }
};
