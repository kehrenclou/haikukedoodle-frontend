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

  getCards() {
    return new Promise((resolve, reject) => {
      if (!resolve) {
        return setTimeout(
          () => reject(new Error("Email or password not found")),
          250
        );
      }

      setTimeout(() => resolve({}), 250);
    });
    //TODOD: when Backend done
    // return this._request(`${this._baseUrl}/cards`, {
    //   headers: this._headers,
    //   method: "GET",
    // });
  }

  saveCard() {
    return new Promise((resolve, reject) => {
      if (!resolve) {
        return setTimeout(
          () => reject(new Error("Email or password not found")),
          250
        );
      }

      setTimeout(() => resolve({}), 250);
    });
  }

  changeLikeCardStatus(card) {
    return new Promise((resolve, reject) => {
      if (!resolve) {
        return setTimeout(
          () => reject(new Error("Email or password not found")),
          250
        );
      }

      setTimeout(() => resolve(card), 250);
    });
    //TODOD: when Backend done
    // return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
    //   headers: this._headers,
    //   method: like ? "PUT" : "DELETE",
    //   body: JSON.stringify(),
    // });
  }
  changeBookmarkCardStatus(card) {
    return new Promise((resolve, reject) => {
      if (!resolve) {
        return setTimeout(
          () => reject(new Error("Email or password not found")),
          250
        );
      }

      setTimeout(() => resolve(card), 250);
    });
    //TODOD: when Backend done
    // return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
    //   headers: this._headers,
    //   method: like ? "PUT" : "DELETE",
    //   body: JSON.stringify(),
    // });
  }

  deleteCard(cardId) {
    return new Promise((resolve, reject) => {
      if (!resolve) {
        return setTimeout(
          () => reject(new Error("Email or password not found")),
          250
        );
      }

      setTimeout(() => resolve(cardId), 250);
    });
    //TODOD: when Backend done
    // return this._request(`${this._baseUrl}/cards/${cardId}`, {
    //   headers: this._headers,
    //   method: "DELETE",
    // });
  }
}

//sets headers with token on all api calls
export const api = new Api({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
