import { openImg, closeImg } from "./utils.js";
import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js"
import { FormValidator } from "./FormValidator.js";

const profileOpenPopup = document.querySelector('.popup_profile');
const profileOpenButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('#profileclose');
const profileForm = document.querySelector('.popup__profile-user');
const nameInput = document.querySelector('#inputname');
const jobInput = document.querySelector('#inputjob');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const photoPopup = document.querySelector('.popup_photo');
const photoAddOpenButon = document.querySelector('.profile__add');
const photoAddCloseButon = document.querySelector('#photoclose');
const inputPhoto = photoPopup.querySelector('#inputcard');
const inputPhotoName = photoPopup.querySelector('#inputnamecard');
const photoCards = photoPopup.querySelector('.popup__photo-cards');

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element__template');

const imgOpenPopup = document.querySelector('.popup__img-card');
const imgClosePopup = document.querySelector('#imgclose');

const popups = document.querySelectorAll('.popup');

const popupEditProfile = document.querySelector('.popup_profile-edit');
const popupAddCard = document.querySelector('.popup-addCard');
const formAddCard = popupAddCard.querySelector('.popup__form');
const formEditProfile = popupEditProfile.querySelector('.popup__form');

const ESC_CODE = 'Escape';

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactivButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_is-active'
}

const photoCardsValidate = new FormValidator(config, formAddCard);
const profileFormValidate = new FormValidator(config, formEditProfile);

photoCardsValidate.enableValidation();
profileFormValidate.enableValidation();

function renderCard(item) {
    const element = new Card(item, elementTemplate);
    const cardElement = element.createCard();
    elements.prepend(cardElement);
}

function renderInitialCards() {

    initialCards.forEach(renderCard);
}

renderInitialCards();

function closeByEsc(evt) {
    if (evt.key === ESC_CODE) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

function openProfilePopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;

    openPopup(profileOpenPopup);

}

function closeProfilePopap() {
    closePopup(profileOpenPopup);
}

function openPhotoPopup() {
    photoCardsValidate.resetForm();
    inputPhotoName.value = '';
    inputPhoto.value = '';
    openPopup(photoPopup);
}

function closePhotoPopup() {
    closePopup(photoPopup);
}

function handlerProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closeProfilePopap();
}

function handlerPhotoFormSubmit(evt) {
    evt.preventDefault();
    renderCard({ name: inputPhotoName.value, link: inputPhoto.value });
    closePhotoPopup();
}

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });
});

profileOpenButton.addEventListener('click', openProfilePopup);
profileCloseButton.addEventListener('click', closeProfilePopap);
profileForm.addEventListener('submit', handlerProfileFormSubmit);

photoAddOpenButon.addEventListener('click', openPhotoPopup);
photoAddCloseButon.addEventListener('click', closePhotoPopup);
photoCards.addEventListener('submit', handlerPhotoFormSubmit);

imgOpenPopup.addEventListener('click', openImg);
imgClosePopup.addEventListener('click', closeImg);



export { openPopup, closePopup, imgOpenPopup };