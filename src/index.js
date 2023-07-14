// // import _ from 'lodash';
// import './style.css';
// import { add } from "./Modules/add.js";
// import { clear } from './Modules/clear.js';
// import { save } from "./Modules/save.js";
// import { loadList } from './Modules/load.js';
// import { iconToggle } from './Modules/iconToggle.js';
// import { del } from './Modules/remove';
// import { complete } from './Modules/status';
// import { clearAll } from './Modules/clearAll';
// import { refresh } from './Modules/refresh';

// let list =[];
// function populate(){
//   const itemList=document.querySelector('.list-items');
//   const item = document.querySelector('.item-input');
//   item.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//       add(list);
//       list.forEach((item)=>{
//         const newItem = document.createElement('li');
//           newItem.innerHTML = `
//           <input class="check" type="checkbox" data-id="${item.index}"><span class='finished'>${item.description}</span><span><i class="menu fa">&#xf142;<i data-id="${item.index}" class="delete hide fa">&#xf014;</span>
//           `;
//           itemList.appendChild(newItem);
        
//           save(list);
//           clear();
//       })
//     iconToggle();
//   }
// });
// loadList(list)
// complete(list);
// }

// populate();
// refresh();
// clearAll();

// del(list);

// console.log(document.querySelector('.check'))

// // document.addEventListener('DOMContentLoaded')


  
  
import './style.css';
import { add } from "./Modules/add.js";
import { clear } from './Modules/clear.js';
import { save } from "./Modules/save.js";
import { loadList } from './Modules/load.js';
import { iconToggle } from './Modules/iconToggle.js';
import { del } from './Modules/remove.js';
import { complete } from './Modules/status.js';
import { clearAll } from './Modules/clearAll.js';
import { refresh } from './Modules/refresh.js';

let list = [];

function populate() {
  const itemList = document.querySelector('.list-items');
  const item = document.querySelector('.item-input');

  item.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      add(list);
      const newItem = list[list.length - 1];
      const newItemElement = document.createElement('li');
      newItemElement.innerHTML = `
        <input class="check" type="checkbox" data-id="${newItem.index}">
        <span class='txt'>${newItem.description}</span>
        <span>
          <i class="menu fa">&#xf142;</i>
          <i data-id="${newItem.index}" class="delete hide fa">&#xf014;</i>
        </span>
      `;
      itemList.appendChild(newItemElement);
      save(list);
      clear();
      // iconToggle();
    }
  });

  loadList(list);
  complete(list);
  del(list);
}

populate();
refresh();
clearAll();



console.log(document.querySelector('.check'));





  
 



