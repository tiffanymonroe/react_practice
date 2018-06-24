import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';


//objects that hold data for props

var person = {
  personName: "Nick",
  personAge: 24,
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs count!"
  ]
}


//generates virtual DOM, takes 2 arguments: component, a function that finds the DOM element to append
ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
    animals={person.favorites}
  />,
  //argument 1
  document.getElementById('root') //argument 2
)
