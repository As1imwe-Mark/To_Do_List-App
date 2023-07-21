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

export const handleCheckboxchange = (event, list) => {
  const checkbox = event.target;
  if (checkbox.type === 'checkbox') {
    const listItem = checkbox.closest('li');
    const taskId = listItem.getAttribute('data-id');
    list[taskId - 1].completed = checkbox.checked;
    save(list);
    if (checkbox.checked) {
      listItem.querySelector('.text').classList.add('finished');
    } else {
      listItem.querySelector('.text').classList.remove('finished');
    }
    save(list);
  }
};


const loadActivityArrayFromLocalStorage = () => {
  const activityArrayString = localStorage.getItem('Todo');
  if (activityArrayString) {
    return JSON.parse(activityArrayString);
  }
  return [];
};

const activityArray1 = loadActivityArrayFromLocalStorage();

activityArray1.forEach((task, index) => {
  const listItem = document.querySelector(`[data-id="${index + 1}"]`);
  if (task.completed) {
    listItem.querySelector('.text').classList.add('finished');
  }
});


