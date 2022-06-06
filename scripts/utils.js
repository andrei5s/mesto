import { openPopup, closePopup, imgOpenPopup } from "./index.js";

const imgPopup = document.querySelector('.popup_img');
const imgTitle = document.querySelector('.popup__img-title');

function openImg(evt) {
    imgOpenPopup.src = evt.target.src;
    imgOpenPopup.alt = evt.target.alt;
    imgTitle.textContent = evt.target.alt;
    openPopup(imgPopup);
}

function closeImg() {
    closePopup(imgPopup);
}

export { openImg, closeImg }