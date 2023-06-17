export const BASE_URL = "http://localhost:3001";

/* --------------------- //generates prompt with subject -------------------- */
function generatePrompt(subject) {
  const capitalizedSubject =
    subject[0].toUpperCase() + subject.slice(1).toLowerCase();

  return ` write a "haiku" about  "${capitalizedSubject}".
  with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables.
next, write three lines of guitar chords to accompany the haiku.

`;
}

const handleOpenApiResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error:${res.status}`);
  } else {
    return res.json();
  }
};

export const generateHaiku = (subject, user, terms) => {
  return fetch(`${BASE_URL}/openai/haiku`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ subject, user, terms }),
  }).then(handleOpenApiResponse);
};
/* ------------ the test Api that was called from a button click ------------ */
async function testApi() {
  try {
    const response = await fetch("src/utils/openaiApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject: "dog" }),
      // body: JSON.stringify({ subject: subjectInput }),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
    // setData(data);
    // setResult(data.result);
    // extract(data.result);
    // setSubjectInput("");
  } catch (error) {
    // Consider implementing your own error handling logic here
    console.error(error);
    alert(error.message);
  }
}
