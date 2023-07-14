export function add(list) {
  class Items {
    constructor(description, completed, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
  }

  const item = document.querySelector('.item-input');
  const itemValue = item.value.trim();

  if (itemValue === '') {
    return;
  } else {
    const item_ = new Items(itemValue, false, list.length);
    list.push(item_);
  }
}
