import { save } from "./save";

export const clearAll = (list) => {
  const clear = document.querySelector('.clear');
  clear.addEventListener('click', (e) => {
    e.preventDefault()
    const completedTasks = list.filter((task) => task.completed === true);
    completedTasks.forEach((completedTask) => {
      const index = list.indexOf(completedTask);
      list.splice(index, 1);
    });
    save(list);
    location.reload();
  });
};
