var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var AddTodoForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var newTodoText = this.refs.newTodoText.value;
    if (newTodoText !== '') {
      this.refs.newTodoText.value = '';
      dispatch(actions.addTodo(newTodoText));
    } else {
      this.refs.newTodoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="newTodoText" placeholder="Add a new Todo Item"/>
          <button className="button expanded" type="submit">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodoForm);
