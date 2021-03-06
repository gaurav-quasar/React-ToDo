var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'work'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Do the work'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should add new todo', () => {
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

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(2);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        isCompleted: true,
        createdAt: 1234,
        completedAt: 1245
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].isCompleted).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
