const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const openPopupProf = document.querySelector('.popupprofile');
const openPopupButton = document.querySelector('.profile__edit');
const closePopupButton = document.querySelector('.popupprofile__close');
const formElement = document.querySelector('.popupprofile__user');
const nameInput = document.querySelector('#inputname');
const jobInput = document.querySelector('#inputjob');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupphoto = document.querySelector('.popupphoto');
const openPopupphotoButton = document.querySelector('.profile__add');
const closePopupphotoButton = document.querySelector('.popupphoto__close');
const inputPhoto = popupphoto.querySelector('#inputcard');
const inputPhotoName = popupphoto.querySelector('#inputnamecard');
const popupphotoCards = popupphoto.querySelector('.popupphoto__cards');

const elements = document.querySelector('.elements');
const elementAdd = document.querySelector('#add');
const elementTemplate = document.querySelector('.element__template');
const elementLike = document.querySelector('.element__like');

const popupimg = document.querySelector('.popupimg');
const popupimgContainer = document.querySelector('.popupimg__container');
const openPopupimg = document.querySelector('.popupimg__card');
const closePopupimg = document.querySelector('.popupimg__close');
const popupimgTitle = document.querySelector('.popupimg__title');


function renderInitialCards() {
    initialCards.forEach(renderCard);
}

function createCard(item) {
    const element = elementTemplate.content.querySelector('.element').cloneNode(true);
    const newElement = element.querySelector('.element__image');
    newElement.addEventListener('click', openImg);

    element.querySelector('.element__place').textContent = item.name;
    newElement.src = item.link;
    newElement.alt = item.name;

    element.querySelector('.element__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like_active');
    });

    element.querySelector('.element__delete').addEventListener('click', function(evt) {
        evt.target.closest('.element').remove();
    });

    return element;
}

function renderCard(item) {
    const element = createCard(item);
    elements.prepend(element);
}

function popupOpen(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openPopupProfile() {
    popupOpen(openPopupProf);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function closePopupProfile() {
    closePopup(openPopupProf);
}

function openPopupphoto() {
    popupOpen(popupphoto);
    inputPhotoName.value = '';
    inputPhoto.value = '';
}

function closePopupphoto() {
    closePopup(popupphoto);
}


function openImg(evt) {

    popupOpen(popupimg);
    openPopupimg.src = evt.target.src;
    openPopupimg.alt = evt.target.alt;
    popupimgTitle.textContent = evt.target.alt;
}

function closeImg() {
    closePopup(popupimg);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopupProfile();
}

function PhotoFormSubmitHandler(evt) {
    evt.preventDefault();
    renderCard({ name: inputPhotoName.value, link: inputPhoto.value });
    closePopupphoto();
}


openPopupButton.addEventListener('click', openPopupProfile);
closePopupButton.addEventListener('click', closePopupProfile);
formElement.addEventListener('submit', formSubmitHandler);

openPopupphotoButton.addEventListener('click', openPopupphoto);
closePopupphotoButton.addEventListener('click', closePopupphoto);
popupphotoCards.addEventListener('submit', PhotoFormSubmitHandler);

openPopupimg.addEventListener('click', openImg);
closePopupimg.addEventListener('click', closeImg);

renderInitialCards();