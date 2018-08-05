import React, { Component } from 'react';

class Home extends Component {
  render(){
    return(
      <div>
      <div className="row justify-content-center">
        <img src="https://static.wixstatic.com/media/0a14d6_4e5741a5c20ca7fa3d488f3754625393.jpg/v1/fill/w_640,h_320,al_c,q_80,usm_0.66_1.00_0.01/0a14d6_4e5741a5c20ca7fa3d488f3754625393.webp" className="img-fluid logo"/>
      </div>


      <div className="row justify-content-center">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://placekitten.com/910/504" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="http://lorempixel.com/910/504" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://placebear.com/910/504" alt="Third slide"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Home
