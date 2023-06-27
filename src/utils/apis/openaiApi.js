export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.haikukedoodle.com"
    : "http://localhost:3001";

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
