var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Load foundation
$(document).foundation();

//Load External Stylesheets
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <p>Final BoilerPlate</p>,
  document.getElementById('app')
);
