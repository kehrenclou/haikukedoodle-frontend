export const BASE_URL = "http://localhost:3001";

/* --------------------------- use to mock backend -------------------------- */
// export const signUp = (username, email, password) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve({}), 250);
//   });
// };

export const logIn = (data) => {
  return new Promise((resolve, reject) => {
    if (!resolve) {
      return setTimeout(
        () => reject(new Error("Email or password not found")),
        250
      );
    }

    setTimeout(() => resolve(data), 250);
  });
};
/* -------------------- to implement when back end ready -------------------- */
const handleAuthResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error:${res.status}`);
  } else {
    return res.json();
  }
};

export const signup = (name, email, password) => {
  debugger;
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(handleAuthResponse);
};

// export const login = (email, password) => {
//   return fetch(`${BASE_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(handleAuthResponse);
// };
