const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__info');
const closePopup = popup.querySelector('.popup__close');
let edit = document.querySelector('#edit');
let conteins = edit.classList.contains('popup__opened');
const formElement = document.querySelector('.popup__user');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
console.log(conteins);

openPopup.addEventListener('click', function() {
    popup.classList.toggle('popup__opened');
});

closePopup.addEventListener('click', function() {
    popup.classList.toggle('popup__opened');
});

function togglePopup() {
    popup.classList.toggle('popup__opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    togglePopup();
}


formElement.addEventListener('submit', formSubmitHandler);