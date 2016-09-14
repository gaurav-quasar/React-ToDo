var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

var actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    var {id, text, isCompleted, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = isCompleted ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var timeStampText = isCompleted ? 'Completed At: ' : 'Created At: ';
      var timeStampData = isCompleted ? completedAt : createdAt;
      return timeStampText + moment.unix(timeStampData).format('MMM Do YYYY @ h:mm A');
    }

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(actions.toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={isCompleted}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
