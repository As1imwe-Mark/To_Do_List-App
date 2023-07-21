import { describe, expect, beforeEach, test } from '@jest/globals';
import { save } from '../src/Modules/save.js';
import { edit } from '../src/Modules/edit.js';
describe('edit', () => {
  let list = [
    {
      index: 1,
      description: 'Asiimwe Mark',
    },
  ];
  beforeEach(() => {
    save(list);
    const txtElement = document.createElement('div');
    txtElement.classList.add('txt');
    document.body.appendChild(txtElement);
  });
  test('should update the description of a todo item', () => {
    const txt = document.querySelector('.txt');
    txt.textContent = 'This is a new todo item';
    txt.blur();
    edit(list, 0, txt.textContent);
    expect(list[0].description).toBe('Asiimwe Mark');
  });
  test('should not update the description of a todo item if the value is not changed', () => {
    const txt = document.querySelector('.txt');
    txt.textContent = 'Asiimwe Mark';
    txt.blur();
    edit(list, 0, txt.textContent);
    expect(list[0].description).toBe('Asiimwe Mark');
  });
});