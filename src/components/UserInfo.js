export default class UserInfo {
    constructor({ title, subtitle, avatar }) {
        this._title = title;
        this._subtitle = subtitle;
        this._avatar = avatar
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