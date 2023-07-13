
export const loadList=(list) =>{
  const itemList=document.querySelector('.list-items');
  const storedList = JSON.parse(localStorage.getItem('Todo'));
  itemList.innerHTML = '';
  if (storedList) {
    list = storedList;
    let listHtml = '';
    list.forEach((item) => {
      listHtml += `<li><input type="checkbox" id=""><span>${item.description}</span><span><i class="menu fa">&#xf142;</i><i data-id="${item.index}" class="delete hide fa">&#xf014;</i></span></li>`;
    });
    itemList.innerHTML = listHtml;
  }
  // iconToggle();
}

