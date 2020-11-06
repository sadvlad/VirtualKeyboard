export const inputKey = [];
export const pressedKey = [];
export let isRu = true;
export let isCapsLock = false;
export const textArea = document.createElement('textarea');

export function init() {
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
