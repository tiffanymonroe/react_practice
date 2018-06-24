//bring in React methods and Component class from React Library

import React, {Component} from 'react';
//define Hello component




class Hello extends Component {
  // what the component will render
  render () {

  //JSX, not HTML
  return (
    <div>
      <h1>Hello {this.props.name}!</h1>
      <p>You are {this.props.age} years old.</p>
      <p>You love: {this.props.animals[0]}</p>
    </div>
    )
  }
}

export default Hello
