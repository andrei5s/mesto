(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var u,c,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c=function(){a._element.remove(),a._element=null},(u="deleteCard")in this?Object.defineProperty(this,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[u]=c,this._cardSelector=n,this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._handleCardClick=r,this._hendleDeleteClick=o,this._hendleLikeClick=i}var n,r;return n=t,(r=[{key:"_addLike",value:function(){this._element.querySelector(".element__like").classList.add("element__like_active")}},{key:"_removeLike",value:function(){this._element.querySelector(".element__like").classList.remove("element__like_active")}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".element__like-count").textContent=this._likes.length,this.isLiked()?this._addLike():this._removeLike()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(){return e._hendleLikeClick(e._id)})),this._element.querySelector(".element__delete").addEventListener("click",(function(){return e._hendleDeleteClick(e._id)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"createCard",value:function(){return this._element=this._cardSelector.content.querySelector(".element").cloneNode(!0),this._elementLike=this._element.querySelector(".element__like"),this._cardImage=this._element.querySelector(".element__image"),this._elementDelete=this._element.querySelector(".element__delete"),this.setLikes(this._likes),this._element.querySelector(".element__place").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._ownerId!==this._userId&&(this._elementDelete.style.display="none"),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formName=n,this._buttonElement=this._formName.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._formName.querySelectorAll(this._config.inputSelector))}var t,r;return t=e,(r=[{key:"_hideErrorMessage",value:function(e){var t=this._config,n=t.inputErrorClass,r=t.errorClass,o=this._formName.querySelector("#".concat(e.id,"-error"));e.classList.remove(n),o.classList.remove(r),o.textContent=""}},{key:"_showErrorMessage",value:function(e){var t=this._config,n=t.inputErrorClass,r=t.errorClass,o=this._formName.querySelector("#".concat(e.id,"-error"));e.classList.add(n),o.classList.add(r),o.textContent=e.validationMessage}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e,this._config):this._showErrorMessage(e,this._config)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._checkInputValidity(t),t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetForm",value:function(){var e=this;this._formName.reset(),this._inputList.forEach((function(t){e._hideErrorMessage(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._formName.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerSelector=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function h(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"chengeSubmitHendler",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),l(d(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._popupForm.reset(),l(d(u.prototype),"close",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__img-card"),t._title=t._popup.querySelector(".popup__img-title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._title.textContent=e,this._image.src=t,this._image.alt=e,v(g(u.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.title,r=t.subtitle,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=n,this._subtitle=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._title.textContent,about:this._subtitle.textContent}}},{key:"setUserInfo",value:function(e){this._title.textContent=e.name,this._subtitle.textContent=e.job,this._avatar.src=e.avatar,this._avatar.alt=e.name}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q,O=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-47",headers:{authorization:"55080562-6390-49a9-9fc0-d604508c3448","Content-Type":"application/json"}}),C=(document.querySelector(".popup_img"),document.querySelector(".popup__img-title"),document.querySelector(".popup_profile"),document.querySelector(".profile__edit")),P=(document.querySelector("#profileclose"),document.querySelector(".popup__profile-user"),document.querySelector("#inputname"),document.querySelector("#inputjob"),document.querySelector(".profile__title")),I=document.querySelector(".profile__subtitle"),T=document.querySelector(".profile__image"),R=document.querySelector("#avatar-button"),U=document.querySelector(".popup_photo"),B=document.querySelector(".profile__add"),x=(document.querySelector("#photoclose"),U.querySelector("#inputcard")),F=U.querySelector("#inputnamecard"),D=(U.querySelector(".popup__photo-cards"),document.querySelector(".elements"),document.querySelector(".element__template")),V=(document.querySelector(".popup__img-card"),document.querySelector("#imgclose"),document.querySelectorAll(".popup"),document.querySelector(".popup_profile-edit")),N=document.querySelector(".popup-addCard").querySelector(".popup__form"),A=V.querySelector(".popup__form"),M=document.querySelector(".popup-avatar").querySelector(".popup__form"),H=(document.querySelector(".popup-dellCard"),document.querySelector(".element__delete"),document.querySelector(".popup_profile").querySelector(".popup__input-top")),J=document.querySelector(".popup_profile").querySelector(".popup__input-bottom");O.getProfile().then((function(e){Z.setUserInfo(e),q=res._id})),O.getInitialCards().then((function(e){e.forEach((function(e){var t=X({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:q,ownerId:e.owner._id});Y.addItem(t)}))}));var z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactivButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_is-active"},G=new r(z,N),K=new r(z,A),Q=new r(z,M);G.enableValidation(),K.enableValidation(),Q.enableValidation();var W=new w(".popup_img");function X(e){var n=new t(e,D,(function(){W.open(e.name,e.link)}),(function(e){ne.open(),ne.chengeSubmitHendler((function(){O.deleteCard(e).then((function(){n.deleteCard(),ne.close()}))}))}),(function(e){n.isLiked()?O.deleteLike(e).then((function(e){n.setLikes(e.likes)})):O.addLike(e).then((function(e){n.setLikes(e.likes)}))}));return n.createCard()}W.setEventListeners();var Y=new i({items:[],renderer:function(e){Y.addItem(X(e))}},".elements");Y.renderItems();var Z=new L({title:P,subtitle:I,avatar:T}),$=new _({popupSelector:".popup_profile",handleFormSubmit:function(e){O.editProfile(e).then((function(e){Z.setUserInfo(e),console.log("userId",e),$.close()}))}});console.log("2"),$.setEventListeners();var ee=new _({popupSelector:".popup_photo",handleFormSubmit:function(){O.addCard(F.value,x.value).then((function(e){var t=X({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:q,ownerId:e.owner._id});Y.addItem(t),ee.close()}))}});ee.setEventListeners();var te=new _({popupSelector:".popup-avatar",handleFormSubmit:function(e){O.setAvatar(e).then((function(e){Z.setUserInfo(e),te.close(),console.log("userId",e)}))}});te.setEventListeners(),C.addEventListener("click",(function(){var e=Z.getUserInfo();H.value=e.name,J.value=e.about,$.open(),K.resetForm()})),B.addEventListener("click",(function(){ee.open(),G.resetForm(),F.value="",x.value=""}));var ne=new _({popupSelector:".popup-dellCard"});ne.setEventListeners(),R.addEventListener("click",(function(){te.open(),Q.resetForm(),x.value=""}))})();