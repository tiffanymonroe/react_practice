import React, { Component } from 'react';

class Nav extends Component {
  render(){
    return(
      <div>
        <div class="pos-f-t">
          <div class="collapse" id="menu">
            <div class="bg-dark p-4">
              <h5 class="text-white h4">Collapsed content</h5>
              <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
          <div className="navbar-nav">
            <a href="#" className="nav-item btn">Work</a>
            <a href="#" className="nav-item btn">Reel</a>
            <a href="#" className="nav-item btn">Branded</a>
            <a href="#" className="nav-item dropdown btn">More</a>
          </div>
        </nav>

      </div>
    )
  }
}

export default Nav;
