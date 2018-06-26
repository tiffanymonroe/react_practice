//bring in React methods and Component class from React Library

import React, {Component} from 'react';
//define Hello component




class Hello extends Component {
  //adding constructor
  constructor (props) {
    //default initialization for this class
    super()

    //define initial state {stateName: stateValue}

    this.state = {moodPoints: 1}
  }

  //adding method to increase moodPoints
  increaseMood(e) {
    if (this.state.moodPoints === 10){
      this.setState({
        moodPoints: this.state.moodPoints = 1
      })

    }
    else {
      this.setState({
        moodPoints: this.state.moodPoints + 1
      })
    }
  }

  // what the component will render
  render () {

  //JSX, not HTML
  return (
    <div>
      <h1>Hello {this.props.name}!</h1>
      <p>You are {this.props.age} years old.</p>
      <p>You love: {this.props.animals[0]}</p>
      <p>You are this happy: {this.state.moodPoints}</p>
      <button onClick={(e)=> this.increaseMood(e)}>Cheer up!</button>
    </div>
    )
  }
}

export default Hello
