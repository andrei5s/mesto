export default class UserInfo {
    constructor({ titleSelector, subtitleSelector, avatarSelector }) {
        this._title = document.querySelector(titleSelector);
        this._subtitle = document.querySelector(subtitleSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._title.textContent,
            about: this._subtitle.textContent
        }

    }

    setUserInfo(inputValues) {
        this._title.textContent = inputValues['name'];
        this._subtitle.textContent = inputValues['about'];
        this._avatar.src = inputValues['avatar'];
        this._avatar.alt = inputValues['name'];
    }
}