const baseUrl = "http://localhost:3000";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _request(url, options) {
    return fetch(url, options).then(this._handleResponse);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error:${res.status}`);
  }

  handleErrorResponse = (err) => {
    console.log(`Error: ${err}`);
  };

  setHeaders(headers) {
    this._headers = headers;
  }

  signUp(nickname, email, password) {
    return new Promise((resolve) => {
      resolve({});
    });
  }

  logIn(email, password) {
    return new Promise((resolve) => {
      resolve({ jwt: "fake-jwt-token", nickname:"nickname" });
    });
  }
}

//sets headers with token on all api calls
export const api = new Api({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
