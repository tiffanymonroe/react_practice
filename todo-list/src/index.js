import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["buy coffee", "make coffee", "drink coffee"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)
