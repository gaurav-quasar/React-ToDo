var React = require('react');

var AddTodoForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var newTodoText = this.refs.newTodoText.value;
    if (newTodoText !== '') {
      this.refs.newTodoText.value = '';
      this.props.onAddTodo(newTodoText);
    } else {
      this.refs.newTodoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="newTodoText" placeholder="Add a new Todo Item"/>
          <button className="button expanded" type="submit">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodoForm;
