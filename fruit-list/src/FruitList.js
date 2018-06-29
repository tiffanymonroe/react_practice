import React, { Component } from 'react';

const FruitList = props => (
  <div>
    <ul>
      {props.fruits.map(fruit => <li>{fruit}</li>)}
    </ul>
  </div>
)

export default FruitList
