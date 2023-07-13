import { save } from "./save";
export const check = (list) => {
  const check_ = document.querySelectorAll('#check');
  const itemList = document.querySelector('.list-items');

  check_.forEach((checkBox) => {
    checkBox.addEventListener('change', (e) => {
      
      const index = Array.from(check_).indexOf(e.target);
      if (index !== -1 && list[index].complete === false) {
        list[index] = { ...list[index], complete: true };
        console.log('Im working')
        console.log( list[index] )
        itemList.innerHTML = '';

        list.forEach((item) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <input type="checkbox" id="check">
            <span>${item.description}</span>
            <span>
              <i class="menu fa">&#xf142;</i>
              <i data-id="${item.index}" class="delete hide fa">&#xf014;</i>
            </span>
          `;
          itemList.appendChild(listItem);
        });
      save();
      }
    });
  });
save();

console.log()
};
