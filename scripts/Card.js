import { openImg } from "./utils.js";

class Card {
    constructor(item, cardTemplateSelector) {
        this._elementTemplate = cardTemplateSelector;
        this._name = item.name;
        this._link = item.link;
    }

    _hendleLikeIcon = (evt) => {
        evt.target.classList.toggle('element__like_active');
    }

    _deleteCard = () => {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', this._hendleLikeIcon);
        this._element.querySelector('.element__delete').addEventListener('click', this._deleteCard);
        this._cardImage.addEventListener('click', openImg);
    }

    createCard() {
        this._element = this._elementTemplate.content.querySelector('.element').cloneNode(true);
        this._elementLike = this._element.querySelector('.element__like');
        this._cardImage = this._element.querySelector('.element__image');


        this._element.querySelector('.element__place').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        this._setEventListeners();
        return this._element;
    }

}

export { Card }