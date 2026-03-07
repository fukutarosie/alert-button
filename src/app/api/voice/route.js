import { OpenAI } from "openai";

// 1. Initialize OpenAI using the environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

export async function POST(req) {
  try {
    // 2. Receive the text from your javascriptcam.js
    const { text } = await req.json();

    // 3. Process with GPT-4o
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", 
      messages: [
        { 
          role: "system", 
          content: "You are a professional assistant. Clean up this speech transcript for clarity, grammar, and professional tone." 
        },
        { role: "user", content: text }
      ],
    });

    // 4. Send back the original and the improved version
    return new Response(JSON.stringify({ 
      original: text,
      improved: completion.choices[0].message.content 
    }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("OpenAI Route Error:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to OpenAI" }), { status: 500 });
  }
}