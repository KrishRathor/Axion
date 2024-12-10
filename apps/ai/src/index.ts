import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
import { systemPrompt } from "./prompt";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: systemPrompt,
});

const talkToLlm = async (prompt: string) => {
  const chat = model.startChat({
    history: [],
  });

  const result = await chat.sendMessageStream(
    "Write a story that begins with a cryptic message from the future that warns of a global disaster, but the message is only half-complete. The protagonist must decode the rest of the message and solve the mystery, blending elements of sci-fi, thriller, and mystery genres."
  );

  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    process.stdout.write(chunkText);
  }
};

talkToLlm("Explain how ai works");
