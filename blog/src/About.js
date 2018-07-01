import React, { Component } from 'react';

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      zipcode: '',
      highTemp: 0,
      lowTemp: 0,
      city: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({zipcode: e.target.value})
    console.log("Your zipcode is: " + this.state.zipcode);
  }
  handleSubmit(e){
    let base = this;

    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + base.state.zipcode + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
      .then((res)=>{
        return res.json()
      }).then((json)=>{
        console.log(json);
        base.setState({
          city: json.name,
          description: json.weather[0].description,
          highTemp: json.main.temp_max,
          lowTemp: json.main.temp_min
        })
      }).catch((err)=>{
        console.log('oops! the error is: ', err);
      })
      e.preventDefault()
  }
  render(){
    return(
      <div>
        <p>Intelligentsia church-key man bun poke. Pitchfork irony affogato portland. Lumbersexual meditation knausgaard microdosing offal. Lumbersexual ennui raclette, tousled direct trade food truck master cleanse waistcoat church-key austin pour-over twee iPhone meggings yuccie.
        </p>
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.city}: currently {this.state.description} with a high of {this.state.highTemp} degress and a low of {this.state.lowTemp} degrees.</p>
          <label>
            Please enter your zipcode for the weather:
            <br/>
            <input type="text" onChange={this.handleChange} />
          </label>
          <br/>
          <input type="submit" value="Get my forecast!" />
        </form>
      </div>
    )
  }
}

export default About
