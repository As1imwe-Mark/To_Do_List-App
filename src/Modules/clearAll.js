export function clearAll(list) {
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const storedList = JSON.parse(localStorage.getItem('list')) || [];
    list = storedList.filter(item => !item.completed);
    console.log(list)
    localStorage.setItem('list', JSON.stringify(list));
    location.reload();
  });
}