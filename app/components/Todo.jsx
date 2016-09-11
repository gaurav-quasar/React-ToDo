var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {id, text, isCompleted, createdAt, completedAt} = this.props;
    var todoClassName = isCompleted ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var timeStampText = isCompleted ? 'Completed At: ' : 'Created At: ';
      var timeStampData = isCompleted ? completedAt : createdAt;
      return timeStampText + moment.unix(timeStampData).format('MMM Do YYYY @ h:mm A');
    }

    return (
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
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

module.exports = Todo;
