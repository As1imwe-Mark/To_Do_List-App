export function iconToggle() {
  const menuItems = document.querySelectorAll('.menu');

  menuItems.forEach((menuItem) => {
    const deleteIcon = menuItem.nextElementSibling;

    menuItem.addEventListener('click', (e) => {
      const targetMenuItem = e.target;
      const parentListItem = targetMenuItem.parentElement.parentElement;

      parentListItem.classList.add('color');
      targetMenuItem.classList.add('hide');
      deleteIcon.classList.remove('hide');
    });
  });
}

  
 
  


