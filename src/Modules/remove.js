// import { save } from "./save";

// export function del(list) {
//   const itemList = document.querySelector('.list-items');
//   itemList.addEventListener('click', function (e) {
//     if (e.target.classList.contains('delete')) {
//       const id = parseInt(e.target.getAttribute('data-id'));
//       remove(id);
//       console.log(id)
//     }
//   });

//   function remove(id) {
//     const index = list.findIndex(item => item.index=== id);
//     console.log('This '+ index)
//     if (index !== -1) {
//       list.splice(index, 1);
//       renderList();
//       save(list);
//     }
//   }

//   function renderList() {
//     let listHtml = '';
//     list.forEach((item) => {
//       listHtml += `<li><input type="checkbox" id=""><span>${item.description}</span><span><i class="menu fa">&#xf142;</i><i data-id="${item.index}" class="delete hide fa">&#xf014;</i></span></li>`;
//     });
//     itemList.innerHTML = listHtml;
//   }

// }


  
import { save } from "./save";

export function del(list) {
  const itemList = document.querySelector('.list-items');
  itemList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      remove(id);
    }
  });

  function remove(id) {
    const index = list.findIndex(item => item.index === id);
    if (index !== -1) {
      list.splice(index, 1);
      updateIndexes(); // Update indexes of remaining items
      renderList();
      save(list);
    }
  }

  function updateIndexes() {
    list.forEach((item, index) => {
      item.index = index + 1; // Update the indexes starting from 1
    });
  }

  function renderList() {
    let listHtml = '';
    list.forEach((item) => {
      listHtml += `<li><input type="checkbox" id=""><span>${item.description}</span><span><i class="menu fa">&#xf142;</i><i data-id="${item.index}" class="delete hide fa">&#xf014;</i></span></li>`;
    });
    itemList.innerHTML = listHtml;
  }
}
