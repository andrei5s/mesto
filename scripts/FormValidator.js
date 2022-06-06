export class FormValidator {
    constructor(config, formName) {
        this._config = config;
        this._formName = formName;
        this._buttonElement = this._formName.querySelector(this._config.submitButtonSelector);
        this._inputList = Array.from(this._formName.querySelectorAll(this._config.inputSelector));
    }

    _hideErrorMessage(inputElement) {
        const { inputErrorClass, errorClass } = this._config;
        const errorElement = this._formName.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.remove(inputErrorClass);
        errorElement.classList.remove(errorClass);

        errorElement.textContent = ''
    }

    _showErrorMessage(inputElement) {
        const { inputErrorClass, errorClass } = this._config;
        const errorElement = this._formName.querySelector(`#${inputElement.id}-error`);

        inputElement.classList.add(inputErrorClass);
        errorElement.classList.add(errorClass);

        errorElement.textContent = inputElement.validationMessage;
    }

    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideErrorMessage(inputElement, this._config);
        } else {
            this._showErrorMessage(inputElement, this._config);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((item) => {
            if (item.validity.valid) {
                return false;
            } else {
                return true;
            }
        })
    }

    _disableSubmitButton() {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

    _enableSubmitButton() {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = false;
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    }

    _setEventListeners() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            this._checkInputValidity(inputElement);
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
    }

    resetForm() {

        this._formName.reset();
        this._inputList.forEach((input) => {
            this._hideErrorMessage(input);
        })

        this._toggleButtonState();
    }

    enableValidation() {
        const { formSelector } = this._config;
        const formList = Array.from(document.querySelector(formSelector));

        formList.forEach((formElement) => {
            this._setEventListeners(formElement);
        })

    }
}