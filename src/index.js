// import _ from 'lodash';
import './style.css';

const itemList=document.querySelector('.list-items');

let index=1;

const list =[
  {
    description:'Wash the dishes',
    completed: false,
    index:index++
  },
  {
    description:'Complete To Do list project',
    completed: false,
    index: index++
  },
  {
    description:'Watch some React tutorials',
    completed: false,
    index: index++
  }
]

console.log(list);

const populate=()=>{
  let listHtml='';
  list.forEach((item)=>{
    listHtml+=`<li><input type="checkbox" id=""><span>${item.description}</span><span><i class="refresh fa">&#xf142;</i></span>`
    itemList.innerHTML=listHtml;
  })
}

document.addEventListener('DOMContentLoaded',populate)

