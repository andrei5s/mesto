import '../pages/index.css';
import { Card } from "../components/Card";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import {
    topInputProfile,
    bottomInputProfile,
    profileOpenButton,
    inputPhotoName,
    formAddCard,
    formEditProfile,
    photoAddOpenButon,
    inputPhoto,
    elementTemplate,
    editButtonAvatar,
    formAvatar,
} from "../utils/constans.js";

let userId;

Promise.all([
        api.getProfile(),
        api.getInitialCards()
    ])
    .then(([res, cardList]) => {

        userInfo.setUserInfo(res),
            userId = res._id;
        section.renderItems(cardList);

        console.log(res);
        console.log(cardList);
    })
    .catch((err) => {
        console.log(err);
    });

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
const avatarFormValidate = new FormValidator(config, formAvatar);

photoCardsValidate.enableValidation();
profileFormValidate.enableValidation();
avatarFormValidate.enableValidation();

const imageOpenPopup = new PopupWithImage('.popup_img');
imageOpenPopup.setEventListeners();

//создание новой карточки
function generateCard(data) {
    const card = new Card(
        data,
        elementTemplate,
        () => {
            imageOpenPopup.open(data.name, data.link);
        },
        (id) => {
            popupDell.open();
            popupDell.chengeSubmitHendler(() => {
                api.deleteCard(id)
                    .then(() => {
                        card.deleteCard();
                        popupDell.close()
                    })
                    .catch(() => {
                        console.log('ошибка удаления');
                    })
            })
        },
        (id) => {
            if (card.isLiked()) {
                api.deleteLike(id)
                    .then(res => {
                        card.setLikes(res.likes)
                    })
            } else {
                api.addLike(id)
                    .then(res => {
                        card.setLikes(res.likes)
                    })
                    .catch(() => {
                        console.log('ошибка постановки лайка');
                    })
            }

        }
    );
    return card.createCard()
}

//загрузка начальных карточек
const section = new Section({
    // items: [],
    renderer: (data) => {
        section.addItem(generateCard({
            name: data.name,
            link: data.link,
            likes: data.likes,
            id: data._id,
            userId: userId,
            ownerId: data.owner._id
        }));

    }
}, '.elements');

const userInfo = new UserInfo({
    titleSelector: '.profile__title',
    subtitleSelector: '.profile__subtitle',
    avatarSelector: '.profile__image'
});

// инициализация попапа "Профиль"
const popupProfile = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleFormSubmit: (inputValues) => {
        popupProfile.setUserUX(true);
        api.editProfile(inputValues)
            .then(userId => {
                userInfo.setUserInfo(userId)
                popupProfile.close();

            })
            .catch((error) => console.log(error))
            .finally(() => popupProfile.setUserUX(false));
    },
});

popupProfile.setEventListeners();

// инициализация попапа "Фото"
const popupPhoto = new PopupWithForm({
    popupSelector: ".popup_photo",

    handleFormSubmit() {
        popupPhoto.setUserUX(true);
        api.addCard(inputPhotoName.value, inputPhoto.value)
            .then(res => {
                const card = generateCard({
                    name: res.name,
                    link: res.link,
                    likes: res.likes,
                    id: res._id,
                    userId: userId,
                    ownerId: res.owner._id
                })
                section.addItem(card);
                popupPhoto.close();
            })
            .catch((error) => console.log(error))
            .finally(() => popupPhoto.setUserUX(false));
    }
});

popupPhoto.setEventListeners();

// инициализация попапа "Аватарка"
const popupAvatar = new PopupWithForm({
    popupSelector: ".popup-avatar",
    handleFormSubmit: (inputValues) => {
        popupAvatar.setUserUX(true);
        api.setAvatar(inputValues)
            .then(userId => {
                userInfo.setUserInfo(userId);
                popupAvatar.close();
            })
            .catch((error) => console.log(error))
            .finally(() => popupAvatar.setUserUX(false));
    },
});
popupAvatar.setEventListeners();

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
});

const popupDell = new PopupWithConfirmation({
    popupSelector: '.popup-dellCard'
})
popupDell.setEventListeners();


// слушатель для попапа "Аватарка"
editButtonAvatar.addEventListener("click", () => {
    popupAvatar.open();
    avatarFormValidate.resetForm();
});