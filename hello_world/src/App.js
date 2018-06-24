//bring in React methods and Component class from React Library

import React, {Component} from 'react';
//define Hello component

class Hello extends Component {
  // what the component will render
  render () {

  //JSX, not HTML
  return (
    <div>
      <h1>Hello world!</h1>
      <h3>It is time for tea</h3>
    </div>
    )
  }
}

export default Hello
