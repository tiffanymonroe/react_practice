import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Comment component
import Comment from './Comment.js'
//import Author component
import Author from './Author.js'

class Post extends Component {
  render() {
    let authors = [
      <Author author={this.props.allAuthors[0]} />,
      <Author author={this.props.allAuthors[1]} />,
      <Author author={this.props.allAuthors[2]} />
    ]



    return (
      <div >
        <h1>{this.props.title}</h1>
        <p>by {authors}</p>
        <p>{this.props.body}</p>
        <h3>Comments:</h3>
        <p><Comment body={this.props.comments[0]} /></p>
      </div>
    );
  }
}

export default Post;
