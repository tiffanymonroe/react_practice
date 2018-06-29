import React, { Component } from 'react';
import App from './App'

const FruitList = props => (
    <ul>
      {props.fruits.map(fruit => <li>{fruit}</li>)}
    </ul>
)

export default FruitList
