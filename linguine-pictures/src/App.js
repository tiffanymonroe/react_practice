import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';



class App extends Component {
  render() {
    return (
      <div>
        
        <Nav />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <img src="https://static.wixstatic.com/media/0a14d6_4e5741a5c20ca7fa3d488f3754625393.jpg/v1/fill/w_640,h_320,al_c,q_80,usm_0.66_1.00_0.01/0a14d6_4e5741a5c20ca7fa3d488f3754625393.webp" className="img-fluid"/>
          </div>


          <div className="row">

          </div>

        </div>
      </div>
    );
  }
}

export default App;
