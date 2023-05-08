import React, { useState } from "react";
import env from "react-dotenv";

/* --------------------- //generates prompt with subject -------------------- */
function generatePrompt(subject) {
  const capitalizedSubject =
    subject[0].toUpperCase() + subject.slice(1).toLowerCase();

  return ` write a "haiku" about "${capitalizedSubject}".with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables. next, write three lines of guitar chords to accompany the haiku.
  
  `;
}

function OpenAiRequest() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    const prompt = generatePrompt("dog");
    const maxTokens = 50; //200
    const apiKey = env.OPENAI_API_KEY;
    const apiUrl = "https://api.openai.com/v1/completions";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.7,
          max_tokens: maxTokens,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      });
      const data = await response.json();
      const generatedText = data.choices[0].text;
      setResult(generatedText);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Loading" : "GenerateText"}
      </button>
      {result && <p>{result}</p>}
    </div>
  );
}
export default OpenAiRequest;
