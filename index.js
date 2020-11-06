import './main.css';

import { eventCode, rusKey, engKey } from './modules/KeysAndCode.js';

import {
  inputKey, pressedKey, isCapsLock, isRu, textArea, init
} from './modules/addKeys.js';

import {
  click, keyDown, keyUp, capsLock, setCaretPosition
} from './modules/keysEvents.js';

import {
  loadLang, changeLanguage, changeToRus, changeToEng
} from './modules/language.js';
/*
const inputKey = [];
const pressedKey = [];
let isRu = true;
let isCapsLock = false;
const textArea = document.createElement('textarea');

function init() {
  textArea.classList.add('textArea');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const keyboardKeys = document.createElement('div');
  keyboardKeys.classList.add('keyboardKeys');
  keyboard.append(keyboardKeys);

  function addKeys(code, keys) {
    const board = [];
    for (let i = 0; i < code.length; i++) {
      const button = document.createElement('button');
      button.classList.add('keyboardKey');
      button.setAttribute('data', code[i]);
      if (button.getAttribute('data') === 'Space') {
        button.classList.add('KeyboardKey-Space');
      } else if (button.getAttribute('data') === 'Backspace' ||
        button.getAttribute('data') === 'Tab' ||
        button.getAttribute('data') === 'ShiftLeft' ||
        button.getAttribute('data') === 'Enter') {
        button.classList.add('keyboardKey-Func');
      } else if (button.getAttribute('data') === 'CapsLock') {
        button.classList.add('Capslock');
      }
      button.textContent = keys[i];
      board.push(button);
    }
    return board;
  }
  keyboardKeys.append(...addKeys(eventCode, rusKey));
  document.body.append(textArea);
  document.body.append(keyboard);
}

function setCaretPosition(pos) {
  if (textArea.setSelectionRange) {
    textArea.focus();
    textArea.setSelectionRange(pos, pos);
  } else if (textArea.createTextRange) {
    const range = textArea.createTextRange();
    range.collapse(true);
    range.moveEnd('', pos);
    range.moveStart('', pos);
    range.select();
  }
}

function click() {
  document.querySelectorAll('.keyboardKey').forEach((element) => {
    element.addEventListener('click', (event) => {
      textArea.focus();
      const pos = textArea.selectionStart;

      if (event.target.textContent === 'Tab') {
        event.preventDefault();
        inputKey.push(' ', ' ');
        textArea.value += '  ';
      } else if (event.target.textContent === 'CapsLock') {
        capsLock();
      } else if (event.target.textContent === 'Shift' ||
        event.target.textContent === 'Ctr' ||
        event.target.textContent === 'Alt') {
        return false;
      } else if (event.target.textContent === 'Enter') {
        textArea.value += '\n';
      } else if (event.target.textContent === 'Backspace') {
        inputKey.pop();
        if (pos > 0) {
          textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);
          textArea.setSelectionRange(pos - 1, pos - 1);
        }
      } else if (event.target.textContent === ' ▲ ' ||
      event.target.textContent === ' ◄ ' || event.target.textContent === ' ▼ ' ||
      event.target.textContent === ' ► ') {
        if (event.target.textContent === ' ▲ ') {
          if (textArea.selectionStart >= 48) {
            setCaretPosition(pos - 48);
          } else {
            setCaretPosition(0);
          }
        } else if (event.target.textContent === ' ► ') {
          setCaretPosition(pos + 1);
        } else if (event.target.textContent === ' ▼ ') {
          setCaretPosition(pos + 48);
        } else if (event.target.textContent === ' ◄ ') {
          if (textArea.selectionStart > 0) {
            setCaretPosition(pos - 1);
          }
        }
      } else {
        inputKey.push(event.target.textContent);
        textArea.value = textArea.value.slice(0, pos) + inputKey[inputKey.length - 1] + textArea.value.slice(pos);
        textArea.setSelectionRange(pos + 1, pos + 1);
      }
    });
  });
}

function keyDown() {
  document.addEventListener('keydown', (event) => {
    document.querySelectorAll('button').forEach((elem) => {
      elem.classList.remove('active');
      textArea.focus();
    });
    document.querySelector(`.keyboardKey[data="${event.code}"]`).classList.add('active');
    const pos = textArea.selectionStart;

    if (event.code === 'Tab') {
      event.preventDefault();
      inputKey.push(' ', ' ');
      textArea.value += '  ';
    } else if (event.code === 'CapsLock') {
      capsLock();
    } else if (event.code === 'ShiftLeft') {
      document.querySelectorAll('.keyboardKey').forEach((elem) => {
        if (elem.textContent.length === 1) {
          elem.textContent = elem.textContent.toUpperCase();
        }
      });
    } else if (event.code === 'Backspace') {
      event.preventDefault();
      inputKey.pop();
      if (pos > 0) {
        textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos);
        textArea.setSelectionRange(pos - 1, pos - 1);
      }
    } else if (event.code === 'Enter') {
      event.preventDefault();
      textArea.value += '\n';
    } else if (event.code === 'AltLeft') {
      event.preventDefault();
    } else if (event.code === 'ControlLeft') {
      event.preventDefault();
    } else if (event.code === 'ArrowUp' ||
    event.code === 'ArrowLeft' || event.code === 'ArrowDown' ||
    event.code === 'ArrowRight') {
      return false;
    } else {
      const key = document.querySelector(`.keyboardKey[data="${event.code}"]`);
      event.preventDefault();
      inputKey.push(key.textContent);
      textArea.value = textArea.value.slice(0, pos) + inputKey[inputKey.length - 1] + textArea.value.slice(pos);
      textArea.setSelectionRange(pos + 1, pos + 1);
    }
    pressedKey.push(event.code);
    for (let i = 0; i < pressedKey.length; i++) {
      if (pressedKey[i] === 'ShiftLeft' && pressedKey[i + 1] === 'AltLeft') {
        changeLanguage();
      }
    }
  });
}

function keyUp() {
  document.addEventListener('keyup', (event) => {
    document.querySelectorAll('button').forEach((elem) => {
      elem.classList.remove('active');
    });
    if (event.code === 'ShiftLeft') {
      document.querySelectorAll('.keyboardKey').forEach((elem) => {
        if (elem.textContent.length === 1) {
          elem.textContent = elem.textContent.toLowerCase();
        }
      });
    }
  });
}

function capsLock() {
  if (!isCapsLock) {
    document.querySelectorAll('.keyboardKey').forEach((element) => {
      if (element.textContent.length === 1) {
        element.textContent = element.textContent.toUpperCase();
      }
    });
    isCapsLock = true;
    const caps = document.querySelector('.Capslock');
    caps.classList.add('CapslockActive');
  } else {
    document.querySelectorAll('.keyboardKey').forEach((element) => {
      if (element.textContent.length === 1) {
        element.textContent = element.textContent.toLowerCase();
      }
    });
    isCapsLock = false;
    const caps = document.querySelector('.Capslock');
    caps.classList.remove('CapslockActive');
  }
}

function loadLang() {
  if (localStorage.getItem('isRu') === 'true') {
    changeToRus();
  } else if (localStorage.getItem('isRu') === 'false') {
    changeToEng();
  }
}

function changeLanguage() {
  if (!isRu) {
    isRu = true;
    localStorage.setItem('isRu', isRu);
    changeToRus();
  } else {
    isRu = false;
    localStorage.setItem('isRu', isRu);
    changeToEng();
  }
}

function changeToRus() {
  document.querySelectorAll('.keyboardKey').forEach((elem, i) => {
    elem.textContent = rusKey[i];
  });
  pressedKey.length = 0;
}
function changeToEng() {
  document.querySelectorAll('.keyboardKey').forEach((elem, i) => {
    elem.textContent = engKey[i];
  });
  pressedKey.length = 0;
}
*/
window.addEventListener('load', () => {
  init();
  keyDown();
  keyUp();
  click();
  loadLang();
});
