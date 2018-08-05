import React, { Component } from 'react';

class Reel extends Component {
  render(){
    return(
      <div className="row justify-content-center reel" >
        <iframe src="https://player.vimeo.com/video/219935215" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Reel
