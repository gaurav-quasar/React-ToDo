var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos on handleAddTodo', () => {
    var todoText = 'test Text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle complete value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test Features',
      isCompleted: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].isCompleted).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].isCompleted).toBe(true);
  });
});
