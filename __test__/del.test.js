import { del } from '../src/Modules/remove.js';

import { describe, test, expect, jest} from '@jest/globals';
describe('delete',()=>{
  const mockRemoveChild = jest.fn();
  const mockContains = jest.fn((element) => element.tagName === 'LI');
  const mockAddEventListener = jest.fn();
  
  
  const mockQuerySelector = jest.fn(() => ({
    contains: mockContains,
    removeChild: mockRemoveChild,
    addEventListener: mockAddEventListener,
  }));
  
  global.document.querySelector = mockQuerySelector;
  
  let list = [
    { description: 'Item 1', completed: false, index: 1 },
    { description: 'Item 2', completed: false, index: 2 },
    { description: 'Item 3', completed: false, index: 3 },
  ];
  test('del function should remove the item from the list array and DOM', () => {
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
})





