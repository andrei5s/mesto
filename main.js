(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var u,c,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c=function(){a._element.remove(),a._element=null},(u="deleteCard")in this?Object.defineProperty(this,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[u]=c,this._cardSelector=n,this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._handleCardClick=r,this._hendleDeleteClick=o,this._hendleLikeClick=i}var n,r;return n=t,(r=[{key:"_addLike",value:function(){this._element.querySelector(".element__like").classList.add("element__like_active")}},{key:"_removeLike",value:function(){this._element.querySelector(".element__like").classList.remove("element__like_active")}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".element__like-count").textContent=this._likes.length,this.isLiked()?this._addLike():this._removeLike()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(){return e._hendleLikeClick(e._id)})),this._element.querySelector(".element__delete").addEventListener("click",(function(){return e._hendleDeleteClick(e._id)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"createCard",value:function(){return this._element=this._cardSelector.content.querySelector(".element").cloneNode(!0),this._elementLike=this._element.querySelector(".element__like"),this._cardImage=this._element.querySelector(".element__image"),this._elementDelete=this._element.querySelector(".element__delete"),this.setLikes(this._likes),this._element.querySelector(".element__place").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._ownerId!==this._userId&&(this._elementDelete.style.display="none"),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formName=n,this._buttonElement=this._formName.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._formName.querySelectorAll(this._config.inputSelector))}var t,r;return t=e,(r=[{key:"_hideErrorMessage",value:function(e){var t=this._config,n=t.inputErrorClass,r=t.errorClass,o=this._formName.querySelector("#".concat(e.id,"-error"));e.classList.remove(n),o.classList.remove(r),o.textContent=""}},{key:"_showErrorMessage",value:function(e){var t=this._config,n=t.inputErrorClass,r=t.errorClass,o=this._formName.querySelector("#".concat(e.id,"-error"));e.classList.add(n),o.classList.add(r),o.textContent=e.validationMessage}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e,this._config):this._showErrorMessage(e,this._config)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._checkInputValidity(t),t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerSelector=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function h(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popup.querySelector(".popup__form"),t._button=t._popup.querySelector('button[type="submit"]'),t._buttonDefaultText=t._button.textContent,t._inputList=t._popup.querySelectorAll(".popup__input"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"chengeSubmitHendler",value:function(e){this._handleFormSubmit=e}},{key:"setUserUX",value:function(e){this._button.textContent=e?"Сохранение...":this._buttonDefaultText}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),s(d(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._popupForm.reset(),s(d(u.prototype),"close",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__img-card"),t._title=t._popup.querySelector(".popup__img-title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._title.textContent=e,this._image.src=t,this._image.alt=e,b(g(u.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.titleSelector,r=t.subtitleSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=document.querySelector(n),this._subtitle=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._title.textContent,about:this._subtitle.textContent}}},{key:"setUserInfo",value:function(e){this._title.textContent=e.name,this._subtitle.textContent=e.about,this._avatar.src=e.avatar,this._avatar.alt=e.name}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then(this._getResponseData)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-47",headers:{authorization:"55080562-6390-49a9-9fc0-d604508c3448","Content-Type":"application/json"}});function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function U(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var T,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._button=t._popup.querySelector('button[type="submit"]'),t}return t=u,(n=[{key:"chengeSubmitHendler",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;P(D(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(){e._handleFormSubmit()}))}},{key:"close",value:function(){P(D(u.prototype),"close",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c),B=(document.querySelector(".popup_img"),document.querySelector(".popup__img-title"),document.querySelector(".popup_profile"),document.querySelector(".profile__edit")),F=(document.querySelector(".popup__profile-user"),document.querySelector("#inputname"),document.querySelector("#inputjob"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".profile__image"),document.querySelector("#avatar-button")),V=document.querySelector("#inputavatar"),N=document.querySelector(".popup_photo"),A=document.querySelector(".profile__add"),X=N.querySelector("#inputcard"),H=N.querySelector("#inputnamecard"),M=(N.querySelector(".popup__photo-cards"),document.querySelector(".elements"),document.querySelector(".element__template")),J=(document.querySelector(".popup__img-card"),document.querySelector("#imgclose"),document.querySelectorAll(".popup"),document.querySelector(".popup_profile-edit")),z=document.querySelector(".popup-addCard").querySelector(".popup__form"),G=J.querySelector(".popup__form"),K=document.querySelector(".popup-avatar").querySelector(".popup__form"),Q=(document.querySelector(".popup-dellCard"),document.querySelector(".element__delete"),document.querySelector(".popup_profile").querySelector(".popup__input-top")),W=document.querySelector(".popup_profile").querySelector(".popup__input-bottom");console.log("2"),q.getProfile().then((function(e){oe.setUserInfo(e),T=e._id})),q.getInitialCards().then((function(e){re.renderItems(e),e.forEach((function(e){var t=ne({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:T,ownerId:e.owner._id});re.addItem(t)}))}));var Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactivButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_is-active"},Z=new r(Y,z),$=new r(Y,G),ee=new r(Y,K);Z.enableValidation(),$.enableValidation(),ee.enableValidation();var te=new w(".popup_img");function ne(e){var n=new t(e,M,(function(){te.open(e.name,e.link)}),(function(e){ae.open(),ae.chengeSubmitHendler((function(){q.deleteCard(e).then((function(){n.deleteCard(),ae.close()})).catch((function(){console.log("ошибка удаления")}))}))}),(function(e){n.isLiked()?q.deleteLike(e).then((function(e){n.setLikes(e.likes)})):q.addLike(e).then((function(e){n.setLikes(e.likes)})).catch((function(){console.log("ошибка постановки лайка")}))}));return n.createCard()}te.setEventListeners();var re=new i({renderer:function(e){re.addItem(ne(e))}},".elements"),oe=new E({titleSelector:".profile__title",subtitleSelector:".profile__subtitle",avatarSelector:".profile__image"}),ie=new _({popupSelector:".popup_profile",handleFormSubmit:function(e){ie.setUserUX(!0),q.editProfile(e).then((function(e){oe.setUserInfo(e),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){return ie.setUserUX(!1)}))}});ie.setEventListeners();var ue=new _({popupSelector:".popup_photo",handleFormSubmit:function(){ue.setUserUX(!0),q.addCard(H.value,X.value).then((function(e){var t=ne({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:T,ownerId:e.owner._id});re.addItem(t),ue.close()})).catch((function(e){return console.log(e)})).finally((function(){return ue.setUserUX(!1)}))}});ue.setEventListeners();var ce=new _({popupSelector:".popup-avatar",handleFormSubmit:function(e){ce.setUserUX(!0),q.setAvatar(e).then((function(e){oe.setUserInfo(e),ce.close()})).catch((function(e){return console.log(e)})).finally((function(){return ce.setUserUX(!1)}))}});ce.setEventListeners(),B.addEventListener("click",(function(){var e=oe.getUserInfo();Q.value=e.name,W.value=e.about,ie.open()})),A.addEventListener("click",(function(){ue.open(),H.value="",X.value=""}));var ae=new x({popupSelector:".popup-dellCard"});ae.setEventListeners(),F.addEventListener("click",(function(){ce.open(),V.value=""}))})();