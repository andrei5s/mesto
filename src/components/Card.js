class Card {
    constructor(data, cardSelector, handleCardClick, hendleDeleteClick, hendleLikeClick) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data.id;
        this._userId = data.userId;
        this._ownerId = data.ownerId;
        this._handleCardClick = handleCardClick;
        this._hendleDeleteClick = hendleDeleteClick;
        this._hendleLikeClick = hendleLikeClick;
    }

    _addLike() {
        this._element.querySelector('.element__like').classList.add('element__like_active');
    }

    _removeLike() {
        this._element.querySelector('.element__like').classList.remove('element__like_active');
    }

    deleteCard = () => {
        this._element.remove();
        this._element = null;
    }

    isLiked() {
        const userLikedCard = this._likes.find(user => user._id === this._userId);
        return userLikedCard
    }

    setLikes(newLikes) {
        this._likes = newLikes;
        //const likeElementCount = this._element.querySelector('.element__like-count');
        this._likeElementCount.textContent = this._likes.length;


        if (this.isLiked()) {
            this._addLike()
        } else {
            this._removeLike()
        }
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => this._hendleLikeClick(this._id));
        this._element.querySelector('.element__delete').addEventListener('click', () => this._hendleDeleteClick(this._id));
        this._cardImage.addEventListener('click', () => this._handleCardClick());

    }

    createCard() {
        this._element = this._cardSelector.content.querySelector('.element').cloneNode(true);
        this._elementLike = this._element.querySelector('.element__like');
        this._cardImage = this._element.querySelector('.element__image');
        this._elementDelete = this._element.querySelector('.element__delete');
        this._likeElementCount = this._element.querySelector('.element__like-count');

        this.setLikes(this._likes);
        this._element.querySelector('.element__place').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        this._setEventListeners();
        if (this._ownerId !== this._userId) {
            this._elementDelete.style.display = 'none';
        }

        return this._element;
    }

}

export { Card }