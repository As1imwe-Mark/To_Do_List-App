
import { save } from "./save";

export function del(list) {
  const itemList = document.querySelector('.list-items');
  itemList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      const index = list.findIndex(item => item.index === id);
      if (index !== -1) {
        list.splice(index, 1);
        let listHtml = '';
        list.forEach((item, index) => {
          item.index = index + 1;
          listHtml += `<li><input type="checkbox" id=""><span>${item.description}</span><span><i class="menu fa">&#xf142;</i><i data-id="${item.index}" class="delete hide fa">&#xf014;</i></span></li>`;
        });
        itemList.innerHTML = listHtml;
        save(list);
      }
    }
  });
}
