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
  }
}
