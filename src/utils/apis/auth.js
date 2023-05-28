export const BASE_URL = "http://localhost:3000";

/* --------------------------- use to mock backend -------------------------- */
export const signUp = (nickname, email, password) => {
  return new Promise((resolve, reject) => {
    resolve({});
  });
};

export const logIn = (email, password) => {
  return new Promise((resolve, reject) => {
    if (!resolve) {
      return setTimeout(() => reject(new Error("Email or password not found")), 250);
    }
    setTimeout(() => resolve(Object.values(resolve)), 250);
  });
};
/* -------------------- to implement when back end ready -------------------- */
// const handleAuthResponse = (res) => {
//   if (!res.ok) {
//     return Promise.reject(`Error:${res.status}`);
//   } else {
//     return res.json();
//   }
// };

// export const register = (nickname,email, password) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ nickname,email, password }),
//   }).then(handleAuthResponse);
// };

// export const login = (email, password) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(handleAuthResponse);
// };
