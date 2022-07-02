import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    open(name, link) {
        const image = this._popup.querySelector('.popup__img-card');
        const title = this._popup.querySelector('.popup__img-title');

        title.textContent = name;
        image.src = link;
        image.alt = name;

        super.open();
    }
}