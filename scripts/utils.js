import { openPopup, closePopup, ImgOpenPopup } from "./index.js";

const imgPopup = document.querySelector('.popupimg');
//const ImgOpenPopup = document.querySelector('.popupimg__card');
//const ImgClosePopup = document.querySelector('#imgclose');
const imgTitle = document.querySelector('.popupimg__title');

function openImg(evt) {
    openPopup(imgPopup);
    ImgOpenPopup.src = evt.target.src;
    ImgOpenPopup.alt = evt.target.alt;
    imgTitle.textContent = evt.target.alt;
}

function closeImg() {
    closePopup(imgPopup);
}

export { openImg, closeImg }