class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    editProfile(inputValues) {
        return fetch(`${this._baseUrl}/users/me`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    name: inputValues['name'],
                    about: inputValues['job']
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
                method: "DELETE",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: "DELETE",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: "PUT",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

    setAvatar(inputValues) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar: inputValues['avatar']
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log)
    }

}

export const api = new Api({
    //baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
    headers: {
        //authorization: 'b47138cb-fbda-4048-856a-684bd0ceb9ca',
        authorization: '55080562-6390-49a9-9fc0-d604508c3448',
        'Content-Type': 'application/json'
    }
});