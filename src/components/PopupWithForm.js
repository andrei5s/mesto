import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._button = this._popup.querySelector('button[type="submit"]');
        this._buttonDefaultText = this._button.textContent;
        this._inputList = this._popup.querySelectorAll(".popup__input");
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(
            (input) => { this._formValues[input.name] = input.value }
        );
        return this._formValues;
    }

    chengeSubmitHendler(newSubmitHendler) {
        this._handleFormSubmit = newSubmitHendler
    }

    setUserUX(isSending) {
        this._button.textContent = isSending ? 'Сохранение...' : this._buttonDefaultText;
    }

    setEventListeners() {

        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}