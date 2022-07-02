import './pages/index.css';
import { Card } from "./components/Card.js";
import { initialCards } from "./utils/initialCards.js";
import { FormValidator } from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";

import {
    topInputProfile,
    bottomInputProfile,
    profileOpenButton,
    profileTitle,
    profileSubtitle,
    inputPhotoName,
    elements,
    formAddCard,
    formEditProfile,
    photoAddOpenButon,
    inputPhoto,
    elementTemplate
} from "./utils/constans.js";

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

//создание новой карточки
const openPopupImage = new PopupWithImage('.popup_img');
openPopupImage.setEventListeners();

function generateCard(data) {
    const card = new Card(data, elementTemplate, () => {
        openPopupImage.open(data.name, data.link);
    });
    return card.createCard()
}

//загрузка начальных карточек
function renderCard(data) {
    const cardElement = generateCard(data);
    elements.prepend(cardElement);
}

const section = new Section({ items: initialCards, renderer: renderCard }, '.elements');
section.renderItems();

const userInfo = new UserInfo({
    title: profileTitle,
    subtitle: profileSubtitle,
});

// инициализация попапа "Профиль"
const popupProfile = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleFormSubmit: (inputValues) => {
        userInfo.setUserInfo(inputValues);
        popupProfile.close();
    },
});

popupProfile.setEventListeners();

// инициализация попапа "Фото"
const popupPhoto = new PopupWithForm({
    popupSelector: ".popup_photo",

    handleFormSubmit() {
        const card = generateCard({
            name: inputPhotoName.value,
            link: inputPhoto.value
        });

        section.addItem(card);
        popupPhoto.close();
    }
});

popupPhoto.setEventListeners();

// слушатель для попапа "Профиль"
profileOpenButton.addEventListener("click", () => {
    const getUserInfo = userInfo.getUserInfo();
    topInputProfile.value = getUserInfo.name;
    bottomInputProfile.value = getUserInfo.about;

    popupProfile.open();
    profileFormValidate.resetForm();
});

// слушатель для попапа "Фото"
photoAddOpenButon.addEventListener("click", () => {
    popupPhoto.open();
    photoCardsValidate.resetForm();
    inputPhotoName.value = '';
    inputPhoto.value = '';
});