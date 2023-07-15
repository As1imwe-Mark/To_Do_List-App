import { save } from "./save";

export function complete(list) {
  const itemList = document.querySelector('.list-items');
  const storedList = JSON.parse(localStorage.getItem('list')) || [];
  list.forEach((item, index) => {
    if (storedList[index] && storedList[index].completed) {
      item.completed = true;
    }
  });

  itemList.addEventListener('click', function (e) {
    if (e.target.classList.contains('check')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      const index = list.findIndex(item => item.index === id);
      if (index !== -1) {
        list[index].completed = !list[index].completed;
        e.target.nextElementSibling.classList.toggle('finished');
        save(list);
        e.target.checked = list[index].completed;
      }
    }
  });

  list.forEach((item) => {
    const checkbox = document.querySelector(`[data-id="${item.index}"]`);
    const label = checkbox.nextElementSibling;
    checkbox.checked = item.completed;
    if (item.completed) {
      label.classList.add('finished');
    }
  });
}




