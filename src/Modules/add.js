import { del } from "./remove";
import { save } from "./save";
class Items {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
export function add(list) {
  const item = document.querySelector('.item-input');
  const itemValue = item.value.trim();
  if (itemValue === '') {
    return;
  } else {
    const index = list.length;
    const item_ = new Items(itemValue, false, index);
    list.push(item_);
    item_.index = list.length;
    save(list);
    del(list)
  }
}

