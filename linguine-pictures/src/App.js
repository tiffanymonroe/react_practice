import React, { Component } from 'react';
import './App.css';

//components
import Home from './Home';
import Reel from './Reel'
import Branded from './Branded'
import More from './More'

//React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <div className="pos-f-t">
            <div className="collapse" id="menu">
              <div className="bg-light p-4">
                <div className="navbar-nav">
                  <Link to="/" className="nav-item btn"><i className="fas fa-home"></i></Link>
                  <Link to="reel" className="nav-item btn"><i className="fas fa-film"></i></Link>
                  <Link to="branded" className="nav-item btn"><i className="fas fa-images"></i></Link>
                  <Link to="more" className="nav-item dropdown btn"><i className="fas fa-chevron-down"></i></Link>
                </div>
              </div>
            </div>
            <nav className="navbar">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
              </button>
            </nav>
          </div>


          <nav className="navbar navbar-expand-lg justify-content-center">
            <div className="navbar-nav">
              <Link to="/" className="nav-item btn">Home</Link>
              <Link to="reel" className="nav-item btn">Reel</Link>
              <Link to="branded" className="nav-item btn">Branded</Link>
              <Link to="more" className="nav-item dropdown btn">More</Link>
            </div>
          </nav>



        <div className="container-fluid">
          <Route exact path="/" component={Home} />
          <Route path="/reel" component={Reel} />
          <Route path="/branded" component={Branded} />
          <Route path="/more" component={More} />

          <footer className="row justify-content-center"><p>Made with <i className="fas fa-coffee"></i> by <a href="http://tiffanymonroe.com">Tiffany Monroe</a></p></footer>

        </div>

      </div>
      </Router>
    );
  }
}

export default App;
