import { save } from '../src/Modules/save.js';
import { describe, test, expect,  beforeEach } from '@jest/globals';
describe('check if task is completed', () => {
  let list = [
    {
      index: 1,
      description: 'Asiimwe Mark',
      completed: false
    },
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
    document.body.appendChild(txtElement);
  });
  test('adding the completed', () => {
    const checkbox = document.querySelector('.check');
    checkbox.click();
  if(checkbox.type === 'checkbox') {
   const text = checkbox.querySelector('.txt');
   const classListArray = Array.from(text.classList);
   expect(classListArray).toContain('finished');
  }
  })
})