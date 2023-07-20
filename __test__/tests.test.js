import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { add } from '../src/Modules/add.js';
import { del } from '../src/Modules/remove.js';

describe('Testing add and delete functions', () => {
  jest.spyOn(Storage.prototype, 'setItem');
  global.document.querySelector = jest.fn(() => ({ value: 'Test Item' }));

  let list;

  beforeEach(() => {
    list = [
      { description: 'Item 1', completed: false, index: 1 },
      { description: 'Item 2', completed: false, index: 2 },
      { description: 'Item 3', completed: false, index: 3 },
    ];
    localStorage.setItem.mockClear();
  });

  test('add function should add a new item to the list array', () => {
    add(list);
    expect(list).toHaveLength(4); 
    expect(list[3]).toMatchObject({ description: 'Test Item', completed: false, index: 4 });
    expect(localStorage.setItem).toHaveBeenCalledWith('Todo', JSON.stringify(list));
  });

  test('add function should not add an empty item to the list array', () => {
    global.document.querySelector = jest.fn(() => ({ value: '' }));
    add(list);
    expect(list).toHaveLength(3); 
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  test('del function should remove the item from the list array and DOM', () => {
    const mockRemoveChild = jest.fn();
    const mockContains = jest.fn((element) => element.tagName === 'LI');
    const mockAddEventListener = jest.fn();

    const mockQuerySelector = jest.fn(() => ({
      contains: mockContains,
      removeChild: mockRemoveChild,
      addEventListener: mockAddEventListener,
    }));

    global.document.querySelector = mockQuerySelector;

    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        classList: {
          contains: jest.fn((className) => className === 'delete'),
        },
        getAttribute: jest.fn((attrName) => (attrName === 'data-id' ? '1' : null)),
        closest: jest.fn((selector) => {
          if (selector === 'li') {
            return document.createElement('li');
          }
          return null;
        }),
      },
    };

    del(list);
    mockAddEventListener.mock.calls[0][1](mockEvent);
    expect(list).toHaveLength(2);
    expect(list[0]).toEqual({ description: 'Item 2', completed: false, index: 1 });
    expect(list[1]).toEqual({ description: 'Item 3', completed: false, index: 2 });
    expect(mockContains).toHaveBeenCalledWith(expect.any(HTMLLIElement));
    expect(mockRemoveChild).toHaveBeenCalledWith(expect.any(HTMLLIElement));
  });
});
