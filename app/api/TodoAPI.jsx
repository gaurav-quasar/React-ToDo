var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  },
  getTodos: function () {
    var todos = [];
    try {
      todos = JSON.parse(localStorage.getItem('todos'));
    } catch (e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    if (showCompleted === false) {
      filteredTodos = filteredTodos.filter((todo) => {
        return !todo.isCompleted;
      });
    }

    // sort on completed status
    filteredTodos = filteredTodos.sort((a, b) => {
      if (!a.isCompleted && b.isCompleted) {
        return -1;
      }

      if (a.isCompleted && !b.isCompleted) {
        return 1;
      }

      return 0;
    });

    // should search on the basis of searchText
    if (searchText != '') {
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.text.toLowerCase().indexOf(searchText) >= 0;
      });
    }

    return filteredTodos;
  }
}
