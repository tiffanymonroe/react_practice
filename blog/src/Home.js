import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      shakespeare: ""
    }
  }

  componentDidMount(){
    var base = this
    var url = 'http://shakeitspeare.com/api/poem'
    fetch(url)
      .then((res)=>{
        return res.json()
      }).then((json)=>{
        base.setState({ shakespeare: json.poem})
      }).catch((err)=>{
        console.log('an error occured', err);
      })
  }

  render(){
    let poem = this.state.shakespeare
    if (this.state.shakespeare){
      return(
        <div>
          <main>
          <h1>Welcome to Dinosaurs are Awesome</h1>
          <h3>A Blog from Ross Gellar</h3>
          <p>{poem}</p>
          <p>-William Shakespeare</p>
          </main>
        </div>
      )
    }
    return(
      <div>
        <main>
        <h1>Welcome to Dinosaurs are Awesome</h1>
        <h3>A Blog from Ross Gellar</h3>
        <p>Poem loading...</p>
        <p>-William Shakespeare</p>
        </main>
      </div>
    )
  }
}

export default Home
