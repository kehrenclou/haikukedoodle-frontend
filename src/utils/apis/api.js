import { useAuth } from "../../hooks/useAuth";
const baseUrl = "http://localhost:3001";

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

  getInfo = () => {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    });
  };

  getCards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "GET",
    });
  }

  loadMoreCards(cardSkip) {
    return this._request(`${this._baseUrl}/cards/${cardSkip}`, {
      headers: this._headers,
      method: "GET",
    });
  }

  getBookmarks(userId) {
    return this._request(`${this._baseUrl}/cards/${userId}/bookmarks`, {
      headers: this._headers,
      method: "GET",
    });
  }

  loadMoreBookmarks(cardSkip, userId) {
    return this._request(
      `${this._baseUrl}/cards/${cardSkip}/${userId}/bookmarks`,
      {
        headers: this._headers,
        method: "GET",
      }
    );
  }
  loadMoreOwnerCards(cardSkip, userId) {
    return this._request(`${this._baseUrl}/cards/${cardSkip}/${userId}/cards`, {
      headers: this._headers,
      method: "GET",
    });
  }
  getOwnerCards(userId) {
    return this._request(`${this._baseUrl}/cards/${userId}/cards`, {
      headers: this._headers,
      method: "GET",
    });
  }

  updateCardOwner(userId, userName, cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/owner`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ owner: userId, author: userName }),
    });
  }

  changeLikeCardStatus(cardId, like) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: like ? "PUT" : "DELETE",
      // body: JSON.stringify({
      //   userId: userId,
      // }),
    });
  }

  changeBookmarkCardStatus(cardId, bookmark) {
    return this._request(`${this._baseUrl}/cards/${cardId}/bookmarks`, {
      headers: this._headers,
      method: bookmark ? "PUT" : "DELETE",
      // body: JSON.stringify({
      //   userId: userId,
      // }),
    });
  }

  deleteCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/delete`, {
      headers: this._headers,
      method: "DELETE",
    });
  }
}

//sets headers with token on all api calls
export const api = new Api({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${useAuth.token}`,
  },
});
