var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todoData = [{
        id: 20,
        text: 'Test Features',
        isCompleted: false
      }];

      TodoAPI.setTodos(todoData);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todoData);
    });

    it('should not set inValid todos array', () => {
      var todoData = 'Invalid Data';
      TodoAPI.setTodos(todoData);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad or empty todo data', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it('should return todos list if valid array exists', () => {
      var todoData = [{
        id: 20,
        text: 'Test Features',
        isCompleted: false
      }];
      localStorage.setItem('todos', JSON.stringify(todoData));

      expect(TodoAPI.getTodos()).toEqual(todoData);
    });
  });

  describe('filterTodos', () => {
    var todoData = [{
      id: 1,
      text: 'Test 1',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Test 2',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Test 3',
      isCompleted: true
    }];

    it('should return all items if show completed is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todoData, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only non completed items if show completed is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todoData, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort all items on completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todoData, true, '');
      expect(filteredTodos[0].isCompleted).toBe(false);
    });

    it('should return all items if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todoData, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return all items matches a searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todoData, true, '3');
      expect(filteredTodos.length).toBe(1);
    });
  });
});
