import { useAuth } from "../../hooks/useAuth";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.haikukedoodle.com"
    : "http://localhost:3001";

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    // this._headers = headers;
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

  // setHeaders() {
  //   this._headers = {
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${useAuth.token}`,
  //   };
  // }

  getInfo = () => {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${useAuth.token}`,
      },
    });
  };

  getCards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
  }

  loadMoreCards(cardSkip) {
    return this._request(`${this._baseUrl}/cards/${cardSkip}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
  }

  getBookmarks(userId) {
    return this._request(`${this._baseUrl}/cards/${userId}/bookmarks`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${useAuth.token}`,
      },
      method: "GET",
    });
  }

  loadMoreBookmarks(cardSkip, userId) {
    return this._request(
      `${this._baseUrl}/cards/${cardSkip}/${userId}/bookmarks`,
      {
        Headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${useAuth.token}`,
        },
        method: "GET",
      }
    );
  }
  loadMoreOwnerCards(cardSkip, userId) {
    return this._request(`${this._baseUrl}/cards/${cardSkip}/${userId}/cards`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${useAuth.token}`,
      },
      method: "GET",
    });
  }
  getOwnerCards(userId) {
    return this._request(`${this._baseUrl}/cards/${userId}/cards`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${useAuth.token}`,
      },
      method: "GET",
    });
  }

  updateCardOwner(userId, userName, cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/owner`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ owner: userId, author: userName }),
    });
  }

  changeLikeCardStatus(cardId, userId, like) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: like ? "PUT" : "DELETE",
      body: JSON.stringify({
        userId: userId,
      }),
    });
  }

  changeBookmarkCardStatus(cardId, bookmark) {
    return this._request(`${this._baseUrl}/cards/${cardId}/bookmarks`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${useAuth.token}`,
      },
      method: bookmark ? "PUT" : "DELETE",
    });
  }

  deleteCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/delete`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${useAuth.token}`,
      },
      method: "DELETE",
    });
  }
}

//sets headers with token on all api calls
export const api = new Api({
  baseUrl: baseUrl,
  // headers: {
  //   "Content-Type": "application/json",
  //   // authorization: `Bearer ${useAuth.token}`,
  // },
});
