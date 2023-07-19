// Summarized Code (Reduced Lines):

import { add } from '../src/Modules/add.js';
describe('testing the add and delete functions',()=>{
  jest.spyOn(Storage.prototype, 'setItem');
global.document.querySelector = jest.fn(() => ({ value: 'Test Item' }));
let list = [];
beforeEach(() => { list = []; 
  localStorage.setItem.mockClear(); });

test('add function should add a new item to the list array', () => {
  add(list);
  expect(list).toHaveLength(1);
  expect(list[0]).toMatchObject({ description: 'Test Item', completed: false, index: 1 });
  expect(localStorage.setItem).toHaveBeenCalledWith('Todo', JSON.stringify(list));
});

test('add function should not add an empty item to the list array', () => {
  global.document.querySelector = jest.fn(() => ({ value: '' }));
  add(list);
  expect(list).toHaveLength(0);
  expect(localStorage.setItem).not.toHaveBeenCalled();
});
});


