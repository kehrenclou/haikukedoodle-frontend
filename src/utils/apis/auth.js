export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.haikukedoodle.com"
    : "http://localhost:3001";

const handleAuthResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error:${res.status}`);
  } else {
    return res.json();
  }
};

export const signup = (
  name,
  email,
  password,
  isAnonymous,
  counter,
  counterTimeStamp,
  counterMax
) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      isAnonymous,
      counter,
      counterTimeStamp,
      counterMax,
    }),
  }).then(handleAuthResponse);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleAuthResponse);
};
