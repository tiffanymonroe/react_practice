import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super()

    //bind to make 'this' work in callback
    this.add = this.add.bind(this)

    this.state = {
      sum: 0
    }
  }

  add(){
    let sum = (parseInt(this.refs.num1.value) || 0) + (parseInt(this.refs.num2.value) || 0)

    this.setState({
      sum: sum
    })
  }

  render(){
    return(
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" ref="num1" onKeyUp={this.add} />
          <span>+</span>
          <input type="text" ref="num2" onKeyUp={this.add} />

          <span>=</span>
          <h3>{this.state.sum}</h3>
        </div>
      </div>

    )
  }
}

export default Calculator
