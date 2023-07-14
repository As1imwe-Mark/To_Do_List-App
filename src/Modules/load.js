import { iconToggle } from "./iconToggle";
import { complete } from "./status";
import { del } from "./remove";
import { clearAll } from "./clearAll";

let index = 0;
let list = [];

export const loadList = () => {
  const itemList = document.querySelector('.list-items');
  const storedList = JSON.parse(localStorage.getItem('Todo'));

  // If there is a stored list, load it into the list variable
  if (storedList && storedList.length > 0) {
    list = storedList;
    index = list.length;

    // Iterate through the stored list and create a list item for each item
    list.forEach((item) => {
      const listItem = createListItem(item);
      itemList.appendChild(listItem);
    });
  }

  // Update the iconToggle, del, complete, and clearAll functions with the updated list
  iconToggle(list);
  del(list);
  complete(list);
  clearAll(list);
};

export function add(description) {
  const item_ = {
    description: description,
    completed: false,
    index: index++
  };

  // Add the new item to the list and update the user interface
  list.push(item_);
  loadList();
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

