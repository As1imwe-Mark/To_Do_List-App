import { save } from "./save";
export function edit(list) {
  const description = document.querySelectorAll('.txt');
  description.forEach(txt => {
    txt.addEventListener('click', () => {
      const oldValue = txt.textContent;
      const newValue = prompt('Enter the new value:', oldValue);
      if (newValue !== null && newValue !== oldValue) {
        const key = txt.parentElement.querySelector('.check').dataset.id;
        const itemIndex = list.findIndex(item => item.index.toString() === key);
        if (itemIndex !== -1) {
          list[itemIndex].description = newValue;
          txt.textContent = newValue;
          save(list);
        }
      }
    });
  });
}


