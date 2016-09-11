var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

//Load foundation
$(document).foundation();

//Load External Stylesheets
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
