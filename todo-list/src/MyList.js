import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'



class MyList extends Component {
  constructor(props){
    super()

    this.state = {
      toDoItemArray: props.theList,
      newItem: ""
    }
  }

  clearList(e){
    console.log("Clearing list!");
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e){
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e){
    e.preventDefault()
    //copy the toDoItemArray in new variable
    let newToDo = this.state.toDoItemArray

    //add newItem to new variable
    newToDo.push(this.state.newItem)

    //set toDoItemArray to new variable and clear newItem
    this.setState({
      toDoItemArray: newToDo,
      newItem: ''
    })
  }

  //clear newItem

  render() {

    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating: </h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finish the list!</button>
        <br/>
        <form>
          <input type="text" placeholder="Type an item here" onChange={(e)=> this.newItemChange(e)} value={this.state.newItem} />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    )
  }
}

export default MyList
