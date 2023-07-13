export function save (list) {
  localStorage.setItem('Todo', JSON.stringify(list));
};
