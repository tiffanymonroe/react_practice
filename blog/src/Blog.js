import React, {Component} from 'react';

import Comment from './Comment'
import Author from './Author'

class Blog extends Component {
 //set initial state inside constructor
  constructor(props){
    super()
    //state attribute should be called body, value should be props
    this.state = {body: props.body}
  }
  changeBody(e){
    let newBody = e.target.value
    this.setState({
      body: newBody
    })
  }

  render() {
    let authors = [
      <Author author={this.props.allAuthors[0]} />,
      <Author author={this.props.allAuthors[1]} />,
      <Author author={this.props.allAuthors[2]} />
    ]
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{authors}</p>
        <p>{this.state.body}</p>
        <h3>Comments:</h3>
        <p><Comment body={this.props.comments[0]} /></p>
        <p>Enter new text: </p>
        <input onChange={(e)=>this.changeBody(e)}></input>
      </div>
    )
  }
}

export default Blog
