import { save } from "./save";

export function del(list) {
  const itemList = document.querySelector('.list-items');
  itemList.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
      const listItem = e.target.closest('li');
      if (listItem && itemList.contains(listItem)) {
        itemList.removeChild(listItem);
        const id = parseInt(e.target.getAttribute('data-id'));
        const index = list.findIndex(item => item.index === id);
        if (index !== -1) {
          list[index].index--;
          for (let i = index + 1; i < list.length; i++) {
            list[i].index--;
          }
          list.splice(index, 1);
          save(list);
        }
      }
    }
  });
}
