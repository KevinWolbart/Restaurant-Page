/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createAbout = (content = document.getElementById('content')) => {\n    let aboutDiv = document.createElement('div');\n    let headerDiv = document.createElement('div');\n    let pDiv = document.createElement('div');\n    let adWrapper = document.createElement('div');\n    let ad1 = document.createElement('div');\n    let ad2 = document.createElement('div');\n    let ad3 = document.createElement('div');\n\n    let restName = document.createElement('h2');\n    let restBio = document.createElement('p');\n    let restAd1 = document.createElement('h4');\n    let restAd2 = document.createElement('h4');\n    let restAd3 = document.createElement('h4');\n\n    let steak = document.createElement('img');\n\n    aboutDiv.classList.add('about');\n    headerDiv.classList.add('content-wrap');\n    pDiv.classList.add('content-wrap');\n    restAd1.classList.add('content-wrap');\n    restAd2.classList.add('content-wrap');\n    restAd3.classList.add('content-wrap');\n    \n    steak.src = './steak.png';\n    restName.textContent = \"Kevin's Steaks\";\n    restBio.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\n    restAd1.textContent = \"Savory\";\n    restAd2.textContent = \"Seared\";\n    restAd3.textContent = \"Succulant\";\n\n    headerDiv.appendChild(restName);\n    pDiv.appendChild(restBio);\n    ad1.appendChild(restAd1);\n    ad2.appendChild(restAd2);\n    ad3.appendChild(restAd3);\n    adWrapper.appendChild(ad1);\n    adWrapper.appendChild(ad2);\n    adWrapper.appendChild(ad3);\n\n    aboutDiv.appendChild(headerDiv);\n    aboutDiv.appendChild(pDiv);\n    aboutDiv.appendChild(steak);\n    aboutDiv.appendChild(adWrapper);\n\n    content.appendChild(aboutDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Contact = (content = document.getElementById('content')) => {\n    let contactWrap = document.createElement('div');\n\n    let phone = document.createElement('div');\n    phone.classList.add('content-wrap');\n\n    let email = document.createElement('div');\n    email.classList.add('content-wrap');\n    \n    let address = document.createElement('div');\n    address.classList.add('content-wrap');\n\n    let phone1 = document.createElement('h3');\n    let phone2 = document.createElement('h3');\n    let phone3 = document.createElement('h3');\n\n    phone1.textContent = \"444-444-4444\";\n    phone2.textContent = \"222-222-2222\";\n    phone3.textContent = \"333-333-3333\";\n\n    let email1 = document.createElement('h3');\n    let email2 = document.createElement('h3');\n    let email3 = document.createElement('h3');\n\n    email1.textContent = \"fake@fake.com\";\n    email2.textContent = \"lorem@ipsom.com\";\n    email3.textContent = \"Ipsom@lorem.com\";\n\n    let address1 = document.createElement('h3');\n    let address2 = document.createElement('h3');\n    let address3 = document.createElement('h3');\n\n    address1.textContent = \"123 Main Street\";\n    address2.textContent = \"456 Main Street\";\n    address3.textContent = \"789 Main Street\";\n\n    phone.appendChild(phone1);\n    phone.appendChild(phone2);\n    phone.appendChild(phone3);\n\n    email.appendChild(email1);\n    email.appendChild(email2);\n    email.appendChild(email3);\n\n    address.appendChild(address1);\n    address.appendChild(address2);\n    address.appendChild(address3);\n\n    contactWrap.appendChild(phone);\n    contactWrap.appendChild(email);\n    contactWrap.appendChild(address);\n\n    content.appendChild(contactWrap);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst checkTab = (function() {\n    let content = document.getElementById('content');\n    let aboutNode = document.getElementById('about');\n    let menuNode = document.getElementById('menu');\n    let contactNode = document.getElementById('contact');\n\n    aboutNode.addEventListener('click', function() {\n        while (content.hasChildNodes()) {\n            content.removeChild(content.firstChild);\n        }\n\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\n    });\n\n    menuNode.addEventListener('click', function() {\n        while (content.hasChildNodes()) {\n            content.removeChild(content.firstChild);\n        }\n\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n    });\n\n    contactNode.addEventListener('click', function() {\n        while (content.hasChildNodes()) {\n            content.removeChild(content.firstChild);\n        }\n\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n    });\n})();   \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Menu = (content = document.getElementById('content')) => {\n    let menuWrap = document.createElement('div');\n    \n    let appetizers = document.createElement('div');\n    appetizers.classList.add('content-wrap');\n    let appHead = document.createElement('h2');\n    let appDish1 = document.createElement('div');\n    appDish1.classList.add('content-wrap');\n    let appDish1Name = document.createElement('h3');\n    let appDish1Des = document.createElement('p');\n    let appDish2 = document.createElement('div');\n    appDish2.classList.add('content-wrap');\n    let appDish2Name = document.createElement('h3');\n    let appDish2Des = document.createElement('p');\n    let appDish3 = document.createElement('div');\n    appDish3.classList.add('content-wrap');\n    let appDish3Name = document.createElement('h3');\n    let appDish3Des = document.createElement('p');\n\n    appHead.textContent = \"Appetizers\";\n    appDish1Name.textContent = \"German Pretzel\";\n    appDish1Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    appDish2Name.textContent = \"Salad\";\n    appDish2Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    appDish3Name.textContent = \"Fried Green Beans\";\n    appDish3Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    let mains = document.createElement('div');\n    mains.classList.add('content-wrap');\n    let mainHead = document.createElement('h2');\n    let mainDish1 = document.createElement('div');\n    mainDish1.classList.add('content-wrap');\n    let mainDish1Name = document.createElement('h3');\n    let mainDish1Des = document.createElement('p');\n    let mainDish2 = document.createElement('div');\n    mainDish2.classList.add('content-wrap');\n    let mainDish2Name = document.createElement('h3');\n    let mainDish2Des = document.createElement('p');\n    let mainDish3 = document.createElement('div');\n    mainDish3.classList.add('content-wrap');\n    let mainDish3Name = document.createElement('h3');\n    let mainDish3Des = document.createElement('p');\n\n    mainHead.textContent = \"Mains\";\n    mainDish1Name.textContent = \"Ribeye\";\n    mainDish1Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    mainDish2Name.textContent = \"NY Strip\";\n    mainDish2Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    mainDish3Name.textContent = \"Prime Rib\";\n    mainDish3Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    let desserts = document.createElement('div');\n    desserts.classList.add('content-wrap');\n    let desHead = document.createElement('h2');\n    let desDish1 = document.createElement('div');\n    desDish1.classList.add('content-wrap');\n    let desDish1Name = document.createElement('h3');\n    let desDish1Des = document.createElement('p');\n    let desDish2 = document.createElement('div');\n    desDish2.classList.add('content-wrap');\n    let desDish2Name = document.createElement('h3');\n    let desDish2Des = document.createElement('p');\n    let desDish3 = document.createElement('div');\n    desDish3.classList.add('content-wrap');\n    let desDish3Name = document.createElement('h3');\n    let desDish3Des = document.createElement('p');\n\n    desHead.textContent = \"Desserts\";\n    desDish1Name.textContent = \"Ice cream\";\n    desDish1Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    desDish2Name.textContent = \"Bread Pudding\";\n    desDish2Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    desDish3Name.textContent = \"Chocolate Cake\";\n    desDish3Des.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n\n    appDish1.appendChild(appDish1Name);\n    appDish1.appendChild(appDish1Des);\n    appDish2.appendChild(appDish2Name);\n    appDish2.appendChild(appDish2Des);\n    appDish3.appendChild(appDish3Name);\n    appDish3.appendChild(appDish3Des);\n    appetizers.appendChild(appHead);\n    appetizers.appendChild(appDish1);\n    appetizers.appendChild(appDish2);\n    appetizers.appendChild(appDish3);\n\n    mainDish1.appendChild(mainDish1Name);\n    mainDish1.appendChild(mainDish1Des);\n    mainDish2.appendChild(mainDish2Name);\n    mainDish2.appendChild(mainDish2Des);\n    mainDish3.appendChild(mainDish3Name);\n    mainDish3.appendChild(mainDish3Des);\n    mains.appendChild(mainHead);\n    mains.appendChild(mainDish1);\n    mains.appendChild(mainDish2);\n    mains.appendChild(mainDish3);\n\n    desDish1.appendChild(desDish1Name);\n    desDish1.appendChild(desDish1Des);\n    desDish2.appendChild(desDish2Name);\n    desDish2.appendChild(desDish2Des);\n    desDish3.appendChild(desDish3Name);\n    desDish3.appendChild(desDish3Des);\n    desserts.appendChild(desHead);\n    desserts.appendChild(desDish1);\n    desserts.appendChild(desDish2);\n    desserts.appendChild(desDish3);\n\n    menuWrap.appendChild(appetizers);\n    menuWrap.appendChild(mains);\n    menuWrap.appendChild(desserts);\n\n    content.appendChild(menuWrap);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;