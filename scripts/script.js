const ProfileOpenPopup = document.querySelector('.popupprofile');
const profileOpenButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('#profileclose');
const profileForm = document.querySelector('.popupprofile__user');
const nameInput = document.querySelector('#inputname');
const jobInput = document.querySelector('#inputjob');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const photoPopup = document.querySelector('.popupphoto');
const photoAddOpenButon = document.querySelector('.profile__add');
const photoAddCloseButon = document.querySelector('#photoclose');
const inputPhoto = photoPopup.querySelector('#inputcard');
const inputPhotoName = photoPopup.querySelector('#inputnamecard');
const photoCards = photoPopup.querySelector('.popupphoto__cards');

const elements = document.querySelector('.elements');
const elementAdd = document.querySelector('#add');
const elementTemplate = document.querySelector('.element__template');
const elementLike = document.querySelector('.element__like');

const imgPopup = document.querySelector('.popupimg');
const ImgOpenPopup = document.querySelector('.popupimg__card');
const ImgClosePopup = document.querySelector('#imgclose');
const imgTitle = document.querySelector('.popupimg__title');

const popups = document.querySelectorAll('.popup');

const ESC_CODE = 'Escape';

function renderInitialCards() {
    initialCards.forEach(renderCard);
}

function createCard(item) {
    const element = elementTemplate.content.querySelector('.element').cloneNode(true);
    const cardImage = element.querySelector('.element__image');
    cardImage.addEventListener('click', openImg);

    element.querySelector('.element__place').textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    element.querySelector('.element__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like_active');
    });


    element.querySelector('.element__delete').addEventListener('click', function() {
        element.remove();
    });

    return element;
}

function renderCard(item) {
    const element = createCard(item);
    elements.prepend(element);
}

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
    openPopup(ProfileOpenPopup);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function closeProfilePopap() {
    closePopup(ProfileOpenPopup);
}

function openPhotoPopup() {
    openPopup(photoPopup);
    inputPhotoName.value = '';
    inputPhoto.value = '';
}

function closePhotoPopup() {
    closePopup(photoPopup);
}


function openImg(evt) {

    openPopup(imgPopup);
    ImgOpenPopup.src = evt.target.src;
    ImgOpenPopup.alt = evt.target.alt;
    imgTitle.textContent = evt.target.alt;
}

function closeImg() {
    closePopup(imgPopup);
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

ImgOpenPopup.addEventListener('click', openImg);
ImgClosePopup.addEventListener('click', closeImg);

renderInitialCards();