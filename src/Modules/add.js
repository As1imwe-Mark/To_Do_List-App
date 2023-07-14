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
    // alert('Please enter a to-do!');
    return;
  } else {
    const item_ = new Items(itemValue, false, list.length); // Use list.length as the index
    list.push(item_);
  }
}
