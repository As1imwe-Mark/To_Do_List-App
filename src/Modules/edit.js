import { save } from "./save";

export function edit(list) {
const description = document.querySelectorAll('.txt');
description.forEach(txt => {
txt.addEventListener('dblclick', () => {
const oldValue = txt.textContent;
txt.contentEditable = true;
txt.focus();

  txt.addEventListener('blur', () => {
    const newValue = txt.textContent;
    txt.contentEditable = false;

    if (newValue !== oldValue) {
      const key = txt.parentElement.querySelector('.check').dataset.id;
      const itemIndex = list.findIndex(item => item.index.toString() === key);
      if (itemIndex !== -1) {
        list[itemIndex].description = newValue;
        save(list);
      }
    }
  });
});
});
}


