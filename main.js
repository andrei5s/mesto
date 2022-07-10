(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_hendleLikeIcon",(function(e){e.target.classList.toggle("element__like_active")})),t(this,"_deleteCard",(function(){i._element.remove(),i._element=null})),this._cardSelector=r,this._name=e.name,this._link=e.link,this._handleCardClick=o}var r,o;return r=n,(o=[{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",this._hendleLikeIcon),this._element.querySelector(".element__delete").addEventListener("click",this._deleteCard),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"createCard",value:function(){return this._element=this._cardSelector.content.querySelector(".element").cloneNode(!0),this._elementLike=this._element.querySelector(".element__like"),this._cardImage=this._element.querySelector(".element__image"),this._element.querySelector(".element__place").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._element}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formName=n,this._buttonElement=this._formName.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._formName.querySelectorAll(this._config.inputSelector))}var t,n;return t=e,(n=[{key:"_hideErrorMessage",value:function(e){var t=this._config,n=t.inputErrorClass,r=t.errorClass,o=this._formName.querySelector("#".concat(e.id,"-error"));e.classList.remove(n),o.classList.remove(r),o.textContent=""}},{key:"_showErrorMessage",value:function(e){var t=this._config,n=t.inputErrorClass,r=t.errorClass,o=this._formName.querySelector("#".concat(e.id,"-error"));e.classList.add(n),o.classList.add(r),o.textContent=e.validationMessage}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e,this._config):this._showErrorMessage(e,this._config)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._checkInputValidity(t),t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetForm",value:function(){var e=this;this._formName.reset(),this._inputList.forEach((function(t){e._hideErrorMessage(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._formName.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerSelector=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),p(y(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._popupForm.reset(),p(y(a.prototype),"close",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__img-card"),t._title=t._popup.querySelector(".popup__img-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._title.textContent=e,this._image.src=t,this._image.alt=e,v(E(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.userNameElement,r=t.userInfoElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=n,this._userInfoElement=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,about:this._userInfoElement.textContent}}},{key:"setUserInfo",value:function(e){this._userNameElement.textContent=e.name,this._userInfoElement.textContent=e.about}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=n,this.headers=r}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this.baseUrl,"users/me"),{headers:this.headers}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"cards"),{headers:this.headers}).then(this._getResponseData)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"createCard",value:function(e){return fetch("".concat(this.baseUrl,"cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getResponseData)}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._getResponseData)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getResponseData)}},{key:"setAvatar",value:function(e){return fetch("".concat(this.baseUrl,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._getResponseData)}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"b47138cb-fbda-4048-856a-684bd0ceb9ca","Content-Type":"application/json"}}),L=(document.querySelector(".popup_img"),document.querySelector(".popup__img-title"),document.querySelector(".popup_profile"),document.querySelector(".profile__edit")),P=(document.querySelector("#profileclose"),document.querySelector(".popup__profile-user"),document.querySelector("#inputname"),document.querySelector("#inputjob"),document.querySelector(".profile__title")),I=document.querySelector(".profile__subtitle"),R=document.querySelector(".popup_photo"),T=document.querySelector(".profile__add"),U=(document.querySelector("#photoclose"),R.querySelector("#inputcard")),x=R.querySelector("#inputnamecard"),B=(R.querySelector(".popup__photo-cards"),document.querySelector(".elements"),document.querySelector(".element__template")),D=(document.querySelector(".popup__img-card"),document.querySelector("#imgclose"),document.querySelectorAll(".popup"),document.querySelector(".popup_profile-edit")),N=document.querySelector(".popup-addCard").querySelector(".popup__form"),V=D.querySelector(".popup__form"),F=document.querySelector(".popup_profile").querySelector(".popup__input-top"),A=document.querySelector(".popup_profile").querySelector(".popup__input-bottom");C.getProfile().then((function(e){Q.setUserInfo(e.name,e.about)})),C.getInitialCards().then((function(e){e.forEach((function(e){var t=G({name:e.name,link:e.link});K.addItem(t)}))}));var M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactivButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_is-active"},J=new o(M,N),z=new o(M,V);J.enableValidation(),z.enableValidation();var H=new w(".popup_img");function G(e){return new n(e,B,(function(){H.open(e.name,e.link)})).createCard()}H.setEventListeners();var K=new a({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){K.addItem(G(e))}},".elements");K.renderItems();var Q=new j({title:P,subtitle:I}),W=new m({popupSelector:".popup_profile",handleFormSubmit:function(e){C.setUserInfo(e).then((function(e){Q.setUserInfo(e),W.close()})).catch((function(e){console.log("".concat(e))}))}});console.log("1"),W.setEventListeners();var X=new m({popupSelector:".popup_photo",handleFormSubmit:function(){var e=G({name:x.value,link:U.value});K.addItem(e),X.close()}});X.setEventListeners(),L.addEventListener("click",(function(){var e=Q.getUserInfo();F.value=e.name,A.value=e.about,W.open()})),T.addEventListener("click",(function(){X.open(),J.resetForm(),x.value="",U.value=""}))})();