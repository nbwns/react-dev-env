import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

var Hello = React.createClass({
    componentDidMount: function(){
       axios.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.run.webtask.io/movies");  
    },
    render: function(){
        return (
        <h2>Bonjour la classe de cours !</h2>);
    }
});


ReactDOM.render(
  <Hello />,
  document.getElementById('container')
);