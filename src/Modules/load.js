import { iconToggle } from "./iconToggle";
import { complete } from "./status";
import { del } from "./remove";
import { save } from "./save";
import { edit } from "./edit";

let index=0;
let list=[];
export const loadList=() =>{
  const itemList=document.querySelector('.list-items');
  const storedList = JSON.parse(localStorage.getItem('Todo' || []));
  itemList.innerHTML = '';
  if (storedList) {
    list = storedList;
    let listHtml = '';
    list.forEach((item) => {
      listHtml += `<li><input class='check' type="checkbox" data-id="${item.index}"><span class='txt'>${item.description}</span><span><i class="menu fa">&#xf142;</i><i data-id="${item.index}" class="delete hide fa">&#xf014;</i></span></li>`;
      index=list.length;
    })
    itemList.innerHTML = listHtml;
    save(list)
   
  }else {
    list;
    index;
  }

 iconToggle();
 del(list);
 complete(list);
 edit(list);

}
