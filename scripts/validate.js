function enableValidation(config) {
    const form = document.querySelector(config.form);

    form.addEventListener('submit', (event) => handleFormSubmit(event, config));
    form.addEventListener('input', (event) => hendleFormInput(event, config));

}

function handleFormSubmit(event, config) {
    event.preventDefault();

    const form = event.currentTarget;

    setSubmitButtonState(form, config);
}

function hendleFormInput(event, config) {
    event.preventDefault();

    const form = event.currentTarget;
    const input = event.target;

    setCustomError(input);
    setFieldError(input);
    setSubmitButtonState(form, config);
}

function setCustomError(input) {
    const validity = input.validity;

    input.setCustomValidity('');

    if (validity.valueMissing) {
        input.setCustomValidity("Вы пропустили это поле");
    }

    if (validity.tooShort || validity.tooLong) {
        const currentLenght = input.value.length;
        const min = input.getAttribute('minlength');
        input.setCustomValidity(`минимальное количество символов: ${min}. Длина текста сейчас ${currentLenght} символ`);
    }

    if (validity.typeMismatch) {
        input.setCustomValidity("введите адрес сайта");
    }
}

function setFieldError(input) {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;

}


function setSubmitButtonState(form, config) {

    const button = form.querySelector(config.submitButton);
    const isValid = form.checkValidity();

    if (isValid) {
        button.classList.remove(config.popupIsInvalid);
        button.removeAttribute('disabled');
    } else {
        button.classList.add(config.popupIsInvalid);
        button.setAttribute('disabled', 'disabled');
    }

}

/* Разделил кнопки на отдельные классы, чтобы в будующем, если ещё появятся формы, можно было добавлять
этим формам функцию enableValidation с другими параметрами config, а не ломать потом переменную {
    submitButton: '.popup__button', 
    popupIsValid: 'popup__button_valid', 
    popupIsInvalid: 'popup__button_invalid'
} */

enableValidation({
    form: '.popupprofile__user[name="user"]',
    submitButton: '.popupprofile__save',
    popupIsInvalid: 'popupprofile__save_invalid',
});

enableValidation({
    form: '.popupphoto__cards[name="cards"]',
    submitButton: '.popupphoto__save',
    popupIsInvalid: 'popupphoto__save_invalid',
});