import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FruitContainer from './FruitContainer'

const fruitList = [
  'Acai',
  'Aceola',
  'Apple',
  'Apricots',
  'Avocado',
  'Banana',
  'Blackberry',
  'Blueberries',
  'Camu Camu berry',
  'Cherries',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Currents',
  'Dates',
  'Durian',
  'Fig',
  'Goji berries',
  'Gooseberry',
  'Grapefruit',
  'Grapes',
  'Jackfruit',
  'Kiwi',
  'Kumquat',
  'Lemon',
  'Lime',
  'Lucuma',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Melon',
  'Mulberry',
  'Nectarine',
  'Orange',
  'Papaya',
  'Passion Fruit',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Pomelo',
  'Prickly Pear',
  'Prunes',
  'Raspberries',
  'Strawberries',
  'Tangerine/Clementine',
  'Watermelon'
]

//Fruit Container

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      //initialize the fruit list to the full list passed in props

      fruitsToDisplay: props.fruits,

      //initialize the filter to an empty string
      filterValue: ''
    }
  }

  handleFilterChange(e){
    e.preventDefault()
    const filterValue = e.target.value
    this.setState((prevState, props)=>{
      //remove fruits that don't contain the filter value
      const filteredFruitList = props.fruits.filter(fruit => fruit.toLocaleLowerCase().includes(filterValue.ttoLocaleLowerCase()))
      //return new state with filtered fruit list and the new value of the filter
      return {
        fruitsToDisplay: filteredFruitList,
        filterValue
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
        <FruitContainer fruits={fruitList} />
        </main>
      </div>
    );
  }
}

export default App;
