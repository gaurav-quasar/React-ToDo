var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {id, text, isCompleted, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var timeStampText = isCompleted ? 'Completed At: ' : 'Created At: ';
      var timeStampData = isCompleted ? completedAt : createdAt;
      return timeStampText + moment.unix(timeStampData).format('MMM Do YYYY @ h:mm A');
    }

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={isCompleted}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
