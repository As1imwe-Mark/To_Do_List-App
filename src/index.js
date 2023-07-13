// import _ from 'lodash';
import './style.css';
import { add } from "./Modules/add.js";
import { clear } from './Modules/clear.js';
import { save } from "./Modules/save.js";
import { loadList } from './Modules/load.js';
import { iconToggle } from './Modules/iconToggle.js';
import { del } from './Modules/remove';
// import { check } from './Modules/status';

let list =[];


  const itemList=document.querySelector('.list-items');
  const item = document.querySelector('.item-input');
  item.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      add(list);
      let listHtml = '';
        list.forEach((item) => {
          listHtml += `<li><input type="checkbox" id="check"><span>${item.description}</span><span><i class="menu fa">&#xf142;</i><i data-id="${item.index}" class="delete hide fa">&#xf014;</i></span></li>`;
        });
        itemList.innerHTML = listHtml;
       
      clear();
     
      save(list);
      
    }
  })
  iconToggle();
  
 
  del(list);
  check()
  loadList(list)



// populate();






function check() {
  const check_ = document.querySelectorAll('#check');
  const itemList = document.querySelector('.list-items');

  check_.forEach((checkBox, index) => {
    checkBox.addEventListener('change', () => {
      if (list[index].completed === false) {
        list[index] = { ...list[index], completed: true };
        renderList();
        save();
      }
    });
  });

  function renderList() {
    itemList.innerHTML = '';

    list.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <input type="checkbox" id="check" ${item.completed ? 'checked' : ''}>
        <span>${item.description}</span>
        <span>
          <i class="menu fa">&#xf142;</i>
          <i data-id="${item.index}" class="delete hide fa">&#xf014;</i>
        </span>
      `;
      itemList.appendChild(listItem);
    });
  }

  renderList();
}

// check(list);



//  document.addEventListener('DOMContentLoaded',loadList(list))

  
 



