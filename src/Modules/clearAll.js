export function clearAll (){
  const clearBtn=document.querySelector('.clear');
  clearBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.clear();   
    location.reload();
  })
}