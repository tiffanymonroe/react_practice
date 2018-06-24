import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';

//generates virtual DOM, takes 2 arguments: component, a function that finds the DOM element to append
ReactDOM.render(
  <Hello />, //argument 1
  document.getElementById('root') //argument 2
)
