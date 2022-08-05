import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._button = this._popup.querySelector('button[type="submit"]');
    }

    chengeSubmitHendler(newSubmitHendler) {
        this._handleFormSubmit = newSubmitHendler
    }

    setEventListeners() {
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
        });
        super.setEventListeners();
    }

    close() {
        super.close();
    }

}