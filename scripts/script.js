const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit');
const closePopup = popup.querySelector('.popup__close');
let edit = document.querySelector('#edit');
const formElement = document.querySelector('.popup__user');
const nameInput = document.querySelector('#inputname');
const jobInput = document.querySelector('#inputjob');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function togglePopup() {
    edit.classList.add('popup_opened');
    popup.classList.toggle('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    togglePopup();
}

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);