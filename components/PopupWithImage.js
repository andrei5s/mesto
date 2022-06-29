import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    open(text, link) {
        const image = this._popup.querySelector('.popup__img-card');
        const title = this._popup.querySelector('.popup__img-title');

        image.src = link;
        title.textcontent = text;

        super.open();
    }
}