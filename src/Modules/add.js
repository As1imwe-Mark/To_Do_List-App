
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
    const index = list.length + 1;
    const item_ = new Items(itemValue, false, index);
    list.push(item_);
  }
}
