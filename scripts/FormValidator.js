export class FormValidator {
    constructor(config, formName) {
        this._config = config;
        this._formName = formName;
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

    _hasInvalidInput(inputList) {
        return inputList.some((item) => {
            if (item.validity.valid) {
                return false;
            } else {
                return true;
            }
        })
    }

    _disableSubmitButton(buttonElement) {
        buttonElement.classList.add(this._config.inactiveButtonClass);
        buttonElement.disabled = true;
    }

    _enableSubmitButton(buttonElement) {
        buttonElement.classList.remove(this._config.inactiveButtonClass);
        buttonElement.disabled = false;
    }

    _toggleButtonState() {
        const { inputSelector, submitButtonSelector } = this._config;
        const buttonElement = this._formName.querySelector(submitButtonSelector);
        const inputList = Array.from(this._formName.querySelectorAll(inputSelector));
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitButton(buttonElement);
        } else {
            this._enableSubmitButton(buttonElement);
        }
    }

    _setEventListeners() {
        const { inputSelector, submitButtonSelector } = this._config;
        const inputList = Array.from(this._formName.querySelectorAll(inputSelector));
        const buttonElement = this._formName.querySelector(submitButtonSelector);
        this._toggleButtonState(buttonElement);

        inputList.forEach((inputElement) => {
            this._checkInputValidity(inputElement);
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(buttonElement);
            })
        })
    }

    resetForm() {
        const { inputSelector } = this._config;
        this._formName.reset();
        const inputList = Array.from(this._formName.querySelectorAll(inputSelector));
        inputList.forEach((input) => {
            this._hideErrorMessage(input);
        })

        this._toggleButtonState();
    }

    enableValidation() {
        const { formSelector } = this._config;
        const formList = Array.from(document.querySelectorAll(formSelector));

        formList.forEach((formElement) => {
            this._setEventListeners(formElement);
        })
    }
}