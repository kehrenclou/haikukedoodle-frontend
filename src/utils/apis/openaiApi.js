export const BASE_URL =
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
  const allowedOrigins = [
    "https://haikukedoodle.com",
    "http://haikukedoodle.com",
    "https://www.haikukedoodle.com",
    "http://www.haikukedoodle.com",
  ];
  return fetch(`${BASE_URL}/openai/haiku`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": allowedOrigins,
    },
    body: JSON.stringify({ subject, user, terms }),
  }).then(handleOpenApiResponse);
};
