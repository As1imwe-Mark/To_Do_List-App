import { describe, test, expect,  beforeEach } from '@jest/globals';
import { save } from '../src/Modules/save.js';
describe('Testing function to clear all completed tasks',()=>{
  let list = [
    {
      index: 1,
      description: 'Asiimwe Mark',
      completed: false
    },
    {
      index: 2,
      description: 'Mark',
      completed: false
    }
  ];
  beforeEach(() => {
    save(list);
    const txtElement = document.createElement('div');
    const checkBox=document.createElement('input');
    checkBox.type='checkbox';
    const txt = document.createElement('span');
    txt.classList.add('txt');
    txtElement.classList.add('check');
    txtElement.appendChild(checkBox)
    const txtElement2 = document.createElement('div');
    const checkBox2=document.createElement('input');
    checkBox2.type='checkbox';
    const txt2 = document.createElement('span');
    txt2.classList.add('txt');
    txtElement2.appendChild(checkBox2)
    const clearBtn=document.createElement('button');
    clearBtn.classList.add('clear')
    document.body.appendChild(clearBtn)
    document.body.appendChild(txtElement2);
  });
    test('Testing function to clear all completed tasks from the DOM',()=>{
      const checkbox = document.querySelectorAll('.check');
      checkbox.forEach((box)=>{
        box.click();
      })
      const clearBtn=document.querySelector('.clear');
      clearBtn.click()
      expect(document.querySelector('.txt')).toBeNull();
    })
})