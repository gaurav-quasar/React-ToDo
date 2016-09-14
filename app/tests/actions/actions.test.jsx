var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search Text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'New todo item'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add todos action', () => {
    var todos= [{
      id: 1,
      text: 'Test1',
      isCompleted: false,
      completedAt: undefined,
      createdAt: 200
    },
    {
      id: 2,
      text: 'Test2',
      isCompleted: false,
      completedAt: undefined,
      createdAt: 300
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(action.todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 23
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
