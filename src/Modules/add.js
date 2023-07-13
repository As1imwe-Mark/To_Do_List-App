let index=0;
export function add(list) {
  class Items {
    constructor(description, completed, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
  }
  const item = document.querySelector('.item-input');
  const itemValue=item.value.trim();
  if (itemValue === '') {
    alert('Please enter a to-do!');
    return false;
  } else {
    
      const item_ = new Items(item.value, false, index++);
      list.push(item_);
}
}
