const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.popup__open');
const closePopup = popup.querySelector('.popup__close');

function togglePopup() {
    popup.classList.toggle('popup__opened');

}

popup.addEventListener('click', function(event) {
    if (event.target === event.currentTarget) {
        togglePopup();
    }
});

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

const formElement = document.querySelector('.username');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elementLikes = document.querySelectorAll('.element__like');

for (let i = 0; i < elementLikes.length; i++) {
    elementLikes[i].addEventListener('click', function() { elementLikes[i].classList.toggle('element__like_active'); });
}



function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);