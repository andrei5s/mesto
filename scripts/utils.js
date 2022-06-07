import { openPopup, closePopup, imgOpenPopup } from "./index.js";
import { imgPopup, imgTitle } from "./constans.js";

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