var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text, isCompleted} = this.props;

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={isCompleted}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
