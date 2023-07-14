import { save } from "./save";

export const clearAll = (list) => {
  const clear=document.querySelector('.clear')
  clear.addEventListener('click',()=>{
    const completedTasks = list.filter((task) => task.completed);
    completedTasks.forEach((completedTask) => {
      const index = list.indexOf(completedTask);
      list.splice(index, 1);
    });
    save(list);
    location.reload();
  })
 
};
