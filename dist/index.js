/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./main.css\");\n/* harmony import */ var _modules_KeysAndCode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/KeysAndCode.js */ \"./modules/KeysAndCode.js\");\n/* harmony import */ var _modules_keysEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keysEvents.js */ \"./modules/keysEvents.js\");\n/* harmony import */ var _modules_language_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/language.js */ \"./modules/language.js\");\n\n\n\n\nconst inputKey = [];\nconst pressedKey = [];\nlet isRu = true;\nlet isCapsLock = false;\nconst textArea = document.createElement('textarea');\n\nfunction init() {\n  textArea.classList.add('textArea');\n  const keyboard = document.createElement('div');\n  keyboard.classList.add('keyboard');\n  const keyboardKeys = document.createElement('div');\n  keyboardKeys.classList.add('keyboardKeys');\n  keyboard.append(keyboardKeys);\n\n  function addKeys(code, keys) {\n    const board = [];\n\n    for (let i = 0; i < code.length; i++) {\n      const button = document.createElement('button');\n      button.classList.add('keyboardKey');\n      button.setAttribute('data', code[i]);\n\n      if (button.getAttribute('data') === 'Space') {\n        button.classList.add('KeyboardKey-Space');\n      } else if (button.getAttribute('data') === 'Backspace' || button.getAttribute('data') === 'Tab' || button.getAttribute('data') === 'ShiftLeft' || button.getAttribute('data') === 'Enter') {\n        button.classList.add('keyboardKey-Func');\n      } else if (button.getAttribute('data') === 'CapsLock') {\n        button.classList.add('Capslock');\n      }\n\n      button.textContent = keys[i];\n      board.push(button);\n    }\n\n    return board;\n  }\n\n  keyboardKeys.append(...addKeys(_modules_KeysAndCode_js__WEBPACK_IMPORTED_MODULE_1__.eventCode, _modules_KeysAndCode_js__WEBPACK_IMPORTED_MODULE_1__.rusKey));\n  document.body.append(textArea);\n  document.body.append(keyboard);\n}\n/*\nfunction setCaretPosition(pos) {\n  if (textArea.setSelectionRange) {\n    textArea.focus();\n    textArea.setSelectionRange(pos, pos);\n  } else if (textArea.createTextRange) {\n    const range = textArea.createTextRange();\n    range.collapse(true);\n    range.moveEnd('', pos);\n    range.moveStart('', pos);\n    range.select();\n  }\n}\n\nfunction click() {\n  document.querySelectorAll('.keyboardKey').forEach((element) => {\n    element.addEventListener('click', (event) => {\n      textArea.focus();\n      const pos = textArea.selectionStart;\n\n      if (event.target.textContent === 'Tab') {\n        event.preventDefault();\n        inputKey.push(' ', ' ');\n        textArea.value += '  ';\n      } else if (event.target.textContent === 'CapsLock') {\n        capsLock();\n      } else if (event.target.textContent === 'Shift' ||\n        event.target.textContent === 'Ctr' ||\n        event.target.textContent === 'Alt') {\n        return false;\n      } else if (event.target.textContent === 'Enter') {\n        textArea.value += '\\n';\n      } else if (event.target.textContent === 'Backspace') {\n        inputKey.pop();\n        if (pos > 0) {\n          textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);\n          textArea.setSelectionRange(pos - 1, pos - 1);\n        }\n      } else if (event.target.textContent === ' ▲ ' ||\n      event.target.textContent === ' ◄ ' || event.target.textContent === ' ▼ ' ||\n      event.target.textContent === ' ► ') {\n        if (event.target.textContent === ' ▲ ') {\n          if (textArea.selectionStart >= 48) {\n            setCaretPosition(pos - 48);\n          } else {\n            setCaretPosition(0);\n          }\n        } else if (event.target.textContent === ' ► ') {\n          setCaretPosition(pos + 1);\n        } else if (event.target.textContent === ' ▼ ') {\n          setCaretPosition(pos + 48);\n        } else if (event.target.textContent === ' ◄ ') {\n          if (textArea.selectionStart > 0) {\n            setCaretPosition(pos - 1);\n          }\n        }\n      } else {\n        inputKey.push(event.target.textContent);\n        textArea.value = textArea.value.slice(0, pos) + inputKey[inputKey.length - 1] + textArea.value.slice(pos);\n        textArea.setSelectionRange(pos + 1, pos + 1);\n      }\n    });\n  });\n}\n\nfunction keyDown() {\n  document.addEventListener('keydown', (event) => {\n    document.querySelectorAll('button').forEach((elem) => {\n      elem.classList.remove('active');\n      textArea.focus();\n    });\n    document.querySelector(`.keyboardKey[data=\"${event.code}\"]`).classList.add('active');\n    const pos = textArea.selectionStart;\n\n    if (event.code === 'Tab') {\n      event.preventDefault();\n      inputKey.push(' ', ' ');\n      textArea.value += '  ';\n    } else if (event.code === 'CapsLock') {\n      capsLock();\n    } else if (event.code === 'ShiftLeft') {\n      document.querySelectorAll('.keyboardKey').forEach((elem) => {\n        if (elem.textContent.length === 1) {\n          elem.textContent = elem.textContent.toUpperCase();\n        }\n      });\n    } else if (event.code === 'Backspace') {\n      event.preventDefault();\n      inputKey.pop();\n      if (pos > 0) {\n        textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);\n        textArea.setSelectionRange(pos - 1, pos - 1);\n      }\n    } else if (event.code === 'Enter') {\n      event.preventDefault();\n      textArea.value += '\\n';\n    } else if (event.code === 'AltLeft') {\n      event.preventDefault();\n    } else if (event.code === 'ControlLeft') {\n      event.preventDefault();\n    } else if (event.code === 'ArrowUp' ||\n    event.code === 'ArrowLeft' || event.code === 'ArrowDown' ||\n    event.code === 'ArrowRight') {\n      return false;\n    } else {\n      const key = document.querySelector(`.keyboardKey[data=\"${event.code}\"]`);\n      event.preventDefault();\n      inputKey.push(key.textContent);\n      textArea.value = textArea.value.slice(0, pos) + inputKey[inputKey.length - 1] + textArea.value.slice(pos);\n      textArea.setSelectionRange(pos + 1, pos + 1);\n    }\n    pressedKey.push(event.code);\n    for (let i = 0; i < pressedKey.length; i++) {\n      if (pressedKey[i] === 'ShiftLeft' && pressedKey[i + 1] === 'AltLeft') {\n        changeLanguage();\n      }\n    }\n  });\n}\n\nfunction keyUp() {\n  document.addEventListener('keyup', (event) => {\n    document.querySelectorAll('button').forEach((elem) => {\n      elem.classList.remove('active');\n    });\n    if (event.code === 'ShiftLeft') {\n      document.querySelectorAll('.keyboardKey').forEach((elem) => {\n        if (elem.textContent.length === 1) {\n          elem.textContent = elem.textContent.toLowerCase();\n        }\n      });\n    }\n  });\n}\n\nfunction capsLock() {\n  if (!isCapsLock) {\n    document.querySelectorAll('.keyboardKey').forEach((element) => {\n      if (element.textContent.length === 1) {\n        element.textContent = element.textContent.toUpperCase();\n      }\n    });\n    isCapsLock = true;\n    const caps = document.querySelector('.Capslock');\n    caps.classList.add('CapslockActive');\n  } else {\n    document.querySelectorAll('.keyboardKey').forEach((element) => {\n      if (element.textContent.length === 1) {\n        element.textContent = element.textContent.toLowerCase();\n      }\n    });\n    isCapsLock = false;\n    const caps = document.querySelector('.Capslock');\n    caps.classList.remove('CapslockActive');\n  }\n}\n\nfunction loadLang() {\n  if (localStorage.getItem('isRu') === 'true') {\n    changeToRus();\n  } else if (localStorage.getItem('isRu') === 'false') {\n    changeToEng();\n  }\n}\n\nfunction changeLanguage() {\n  if (!isRu) {\n    isRu = true;\n    localStorage.setItem('isRu', isRu);\n    changeToRus();\n  } else {\n    isRu = false;\n    localStorage.setItem('isRu', isRu);\n    changeToEng();\n  }\n}\n\nfunction changeToRus() {\n  document.querySelectorAll('.keyboardKey').forEach((elem, i) => {\n    elem.textContent = rusKey[i];\n  });\n  pressedKey.length = 0;\n}\nfunction changeToEng() {\n  document.querySelectorAll('.keyboardKey').forEach((elem, i) => {\n    elem.textContent = engKey[i];\n  });\n  pressedKey.length = 0;\n}\n*/\n\n\nwindow.addEventListener('load', () => {\n  init();\n  (0,_modules_keysEvents_js__WEBPACK_IMPORTED_MODULE_2__.keyDown)();\n  (0,_modules_keysEvents_js__WEBPACK_IMPORTED_MODULE_2__.keyUp)();\n  (0,_modules_keysEvents_js__WEBPACK_IMPORTED_MODULE_2__.click)();\n  (0,_modules_language_js__WEBPACK_IMPORTED_MODULE_3__.loadLang)();\n});\n\n//# sourceURL=webpack://webpackvirtualboard/./index.js?");

/***/ }),

/***/ "./modules/KeysAndCode.js":
/*!********************************!*\
  !*** ./modules/KeysAndCode.js ***!
  \********************************/
/*! namespace exports */
/*! export engKey [provided] [no usage info] [missing usage info prevents renaming] */
/*! export eventCode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rusKey [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventCode\": () => /* binding */ eventCode,\n/* harmony export */   \"rusKey\": () => /* binding */ rusKey,\n/* harmony export */   \"engKey\": () => /* binding */ engKey\n/* harmony export */ });\nconst eventCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'ArrowUp', 'Slash', 'ControlLeft', 'AltLeft', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];\nconst rusKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ' ▲ ', '/', 'Ctr', 'Alt', ' ', ' ◄ ', ' ▼ ', ' ► '];\nconst engKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', \"'\", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ' ▲ ', '/', 'Ctr', 'Alt', ' ', ' ◄ ', ' ▼ ', ' ► '];\n\n//# sourceURL=webpack://webpackvirtualboard/./modules/KeysAndCode.js?");

/***/ }),

/***/ "./modules/keysEvents.js":
/*!*******************************!*\
  !*** ./modules/keysEvents.js ***!
  \*******************************/
/*! namespace exports */
/*! export capsLock [provided] [no usage info] [missing usage info prevents renaming] */
/*! export click [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keyDown [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keyUp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setCaretPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCaretPosition\": () => /* binding */ setCaretPosition,\n/* harmony export */   \"click\": () => /* binding */ click,\n/* harmony export */   \"keyDown\": () => /* binding */ keyDown,\n/* harmony export */   \"keyUp\": () => /* binding */ keyUp,\n/* harmony export */   \"capsLock\": () => /* binding */ capsLock\n/* harmony export */ });\nfunction setCaretPosition(pos) {\n  if (textArea.setSelectionRange) {\n    textArea.focus();\n    textArea.setSelectionRange(pos, pos);\n  } else if (textArea.createTextRange) {\n    const range = textArea.createTextRange();\n    range.collapse(true);\n    range.moveEnd('', pos);\n    range.moveStart('', pos);\n    range.select();\n  }\n}\nfunction click() {\n  document.querySelectorAll('.keyboardKey').forEach(element => {\n    element.addEventListener('click', event => {\n      textArea.focus();\n      const pos = textArea.selectionStart;\n\n      if (event.target.textContent === 'Tab') {\n        event.preventDefault();\n        inputKey.push(' ', ' ');\n        textArea.value += '  ';\n      } else if (event.target.textContent === 'CapsLock') {\n        capsLock();\n      } else if (event.target.textContent === 'Shift' || event.target.textContent === 'Ctr' || event.target.textContent === 'Alt') {\n        return false;\n      } else if (event.target.textContent === 'Enter') {\n        textArea.value += '\\n';\n      } else if (event.target.textContent === 'Backspace') {\n        inputKey.pop();\n\n        if (pos > 0) {\n          textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);\n          textArea.setSelectionRange(pos - 1, pos - 1);\n        }\n      } else if (event.target.textContent === ' ▲ ' || event.target.textContent === ' ◄ ' || event.target.textContent === ' ▼ ' || event.target.textContent === ' ► ') {\n        if (event.target.textContent === ' ▲ ') {\n          if (textArea.selectionStart >= 48) {\n            setCaretPosition(pos - 48);\n          } else {\n            setCaretPosition(0);\n          }\n        } else if (event.target.textContent === ' ► ') {\n          setCaretPosition(pos + 1);\n        } else if (event.target.textContent === ' ▼ ') {\n          setCaretPosition(pos + 48);\n        } else if (event.target.textContent === ' ◄ ') {\n          if (textArea.selectionStart > 0) {\n            setCaretPosition(pos - 1);\n          }\n        }\n      } else {\n        inputKey.push(event.target.textContent);\n        textArea.value = textArea.value.slice(0, pos) + inputKey[inputKey.length - 1] + textArea.value.slice(pos);\n        textArea.setSelectionRange(pos + 1, pos + 1);\n      }\n    });\n  });\n}\nfunction keyDown() {\n  document.addEventListener('keydown', event => {\n    document.querySelectorAll('button').forEach(elem => {\n      elem.classList.remove('active');\n      textArea.focus();\n    });\n    document.querySelector(`.keyboardKey[data=\"${event.code}\"]`).classList.add('active');\n    const pos = textArea.selectionStart;\n\n    if (event.code === 'Tab') {\n      event.preventDefault();\n      inputKey.push(' ', ' ');\n      textArea.value += '  ';\n    } else if (event.code === 'CapsLock') {\n      capsLock();\n    } else if (event.code === 'ShiftLeft') {\n      document.querySelectorAll('.keyboardKey').forEach(elem => {\n        if (elem.textContent.length === 1) {\n          elem.textContent = elem.textContent.toUpperCase();\n        }\n      });\n    } else if (event.code === 'Backspace') {\n      event.preventDefault();\n      inputKey.pop();\n\n      if (pos > 0) {\n        textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);\n        textArea.setSelectionRange(pos - 1, pos - 1);\n      }\n    } else if (event.code === 'Enter') {\n      event.preventDefault();\n      textArea.value += '\\n';\n    } else if (event.code === 'AltLeft') {\n      event.preventDefault();\n    } else if (event.code === 'ControlLeft') {\n      event.preventDefault();\n    } else if (event.code === 'ArrowUp' || event.code === 'ArrowLeft' || event.code === 'ArrowDown' || event.code === 'ArrowRight') {\n      return false;\n    } else {\n      const key = document.querySelector(`.keyboardKey[data=\"${event.code}\"]`);\n      event.preventDefault();\n      inputKey.push(key.textContent);\n      textArea.value = textArea.value.slice(0, pos) + inputKey[inputKey.length - 1] + textArea.value.slice(pos);\n      textArea.setSelectionRange(pos + 1, pos + 1);\n    }\n\n    pressedKey.push(event.code);\n\n    for (let i = 0; i < pressedKey.length; i++) {\n      if (pressedKey[i] === 'ShiftLeft' && pressedKey[i + 1] === 'AltLeft') {\n        changeLanguage();\n      }\n    }\n  });\n}\nfunction keyUp() {\n  document.addEventListener('keyup', event => {\n    document.querySelectorAll('button').forEach(elem => {\n      elem.classList.remove('active');\n    });\n\n    if (event.code === 'ShiftLeft') {\n      document.querySelectorAll('.keyboardKey').forEach(elem => {\n        if (elem.textContent.length === 1) {\n          elem.textContent = elem.textContent.toLowerCase();\n        }\n      });\n    }\n  });\n}\nfunction capsLock() {\n  if (!isCapsLock) {\n    document.querySelectorAll('.keyboardKey').forEach(element => {\n      if (element.textContent.length === 1) {\n        element.textContent = element.textContent.toUpperCase();\n      }\n    });\n    isCapsLock = true;\n    const caps = document.querySelector('.Capslock');\n    caps.classList.add('CapslockActive');\n  } else {\n    document.querySelectorAll('.keyboardKey').forEach(element => {\n      if (element.textContent.length === 1) {\n        element.textContent = element.textContent.toLowerCase();\n      }\n    });\n    isCapsLock = false;\n    const caps = document.querySelector('.Capslock');\n    caps.classList.remove('CapslockActive');\n  }\n}\n\n//# sourceURL=webpack://webpackvirtualboard/./modules/keysEvents.js?");

/***/ }),

/***/ "./modules/language.js":
/*!*****************************!*\
  !*** ./modules/language.js ***!
  \*****************************/
/*! namespace exports */
/*! export changeLanguage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export changeToEng [provided] [no usage info] [missing usage info prevents renaming] */
/*! export changeToRus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export loadLang [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadLang\": () => /* binding */ loadLang,\n/* harmony export */   \"changeLanguage\": () => /* binding */ changeLanguage,\n/* harmony export */   \"changeToRus\": () => /* binding */ changeToRus,\n/* harmony export */   \"changeToEng\": () => /* binding */ changeToEng\n/* harmony export */ });\nfunction loadLang() {\n  if (localStorage.getItem('isRu') === 'true') {\n    changeToRus();\n  } else if (localStorage.getItem('isRu') === 'false') {\n    changeToEng();\n  }\n}\nfunction changeLanguage() {\n  if (!isRu) {\n    isRu = true;\n    localStorage.setItem('isRu', isRu);\n    changeToRus();\n  } else {\n    isRu = false;\n    localStorage.setItem('isRu', isRu);\n    changeToEng();\n  }\n}\nfunction changeToRus() {\n  document.querySelectorAll('.keyboardKey').forEach((elem, i) => {\n    elem.textContent = rusKey[i];\n  });\n  pressedKey.length = 0;\n}\nfunction changeToEng() {\n  document.querySelectorAll('.keyboardKey').forEach((elem, i) => {\n    elem.textContent = engKey[i];\n  });\n  pressedKey.length = 0;\n}\n\n//# sourceURL=webpack://webpackvirtualboard/./modules/language.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./main.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./main.css ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".textArea {\\r\\n  position: relative;\\r\\n  display: block;\\r\\n   width: 1060px;\\r\\n  height: 50vh;\\r\\n  margin: auto;\\r\\n  border: 2px solid rgb(194, 87, 45);\\r\\n  font-size: 30pt;\\r\\n}\\r\\n\\r\\n.textArea:focus {\\r\\n  outline: none !important;\\r\\n  border: 2px solid rgb(194, 87, 45);\\r\\n}\\r\\n\\r\\n.keyboard {\\r\\n  width: 1240px;\\r\\n  height: 40vh;\\r\\n  border: 2px solid white;\\r\\n  position: relative;\\r\\n  margin: auto;\\r\\n  padding: 4px;\\r\\n}\\r\\n\\r\\n.keyboardKeys {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.keyboardKey {\\r\\n  display: inline-flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  vertical-align: top;\\r\\n  position: relative;\\r\\n  width: 54px;\\r\\n  height: 6.5vh;\\r\\n  font-size: 20pt;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background-color: rgb(192, 120, 120);\\r\\n  border-radius: 16px;\\r\\n  color: #fff;\\r\\n  transition: all 0.5s;\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n.keyboardKey:hover {\\r\\n  cursor: pointer;\\r\\n  background: #ff5c2ab4;\\r\\n}\\r\\n\\r\\n.keyboardKey:active, .active {\\r\\n  background-color: rgb(83, 34, 14);\\r\\n  transition: 0.25s;\\r\\n}\\r\\n\\r\\n.keyboardKey-Func, .Capslock {\\r\\n  width: 215px;\\r\\n}\\r\\n\\r\\n.KeyboardKey-Space {\\r\\n  width: 600px;\\r\\n}\\r\\n.CapslockActive {\\r\\n  background:darkred ;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpackvirtualboard/./main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpackvirtualboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./main.css":
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./main.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://webpackvirtualboard/./main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpackvirtualboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;