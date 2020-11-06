import { rusKey, engKey } from './KeysAndCode.js';
import { pressedKey } from '../index.js';
import {
  isCapsLock, capsLock
} from './keysEvents.js';

let isRu = true;
export function loadLang() {
  if (localStorage.getItem('isRu') === 'true') {
    changeToRus();
  } else if (localStorage.getItem('isRu') === 'false') {
    changeToEng();
  }
}

export function changeLanguage() {
  if (!isRu) {
    isRu = true;
    localStorage.setItem('isRu', isRu);
    changeToRus();
    if (isCapsLock) {
      capsLock();
    }
  } else {
    isRu = false;
    localStorage.setItem('isRu', isRu);
    changeToEng();
    if (isCapsLock) {
      capsLock();
    }
  }
}

export function changeToRus() {
  document.querySelectorAll('.keyboardKey').forEach((elem, i) => {
    elem.textContent = rusKey[i];
  });
  pressedKey.length = 0;
}
export function changeToEng() {
  document.querySelectorAll('.keyboardKey').forEach((elem, i) => {
    elem.textContent = engKey[i];
  });
  pressedKey.length = 0;
}
