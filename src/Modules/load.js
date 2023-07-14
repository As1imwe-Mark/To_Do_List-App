import { iconToggle } from "./iconToggle";
import { complete } from "./status";
import { del } from "./remove";
import { clearAll } from "./clearAll";

let index = 0;
let list = [];

export const loadList = () => {
  const itemList = document.querySelector('.list-items');
  const storedList = JSON.parse(localStorage.getItem('Todo'));

  if (storedList && storedList.length > 0) {
    list = storedList;
    index = list.length;

    list.forEach((item) => {
      const listItem = createListItem(item);
      itemList.appendChild(listItem);
    });
  }

  iconToggle();
  del(list);
  complete(list);
  clearAll(list)
};

export function add(description) {
  const item_ = {
    description: description,
    completed: false,
    index: index++
  };

  list.push(item_);
  saveList();
}

export function saveList() {
  localStorage.setItem('Todo', JSON.stringify(list));
}

function createListItem(item) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <input class="check" type="checkbox" data-id="${item.index}">
    <span class='txt'>${item.description}</span>
    <span>
      <i class="menu fa">&#xf142;</i>
      <i data-id="${item.index}" class="delete hide fa">&#xf014;</i>
    </span>
  `;

  return listItem;
}


