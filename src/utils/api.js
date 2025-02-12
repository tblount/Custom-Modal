import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Uses the environment variable
  dangerouslyAllowBrowser: true,  // Required for client-side React apps
});

export const fetchChatHistory = async (query) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: query }],
      max_tokens: 200,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return "Error retrieving chat history.";
  }
};
