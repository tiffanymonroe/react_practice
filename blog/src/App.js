import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//import components
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Food from './Food'
import Movie from './Movie'

const post = {
  title: "Dinosaurs are awesome",
  authors: ["Stealthy Stegosaurus", "Tiny T-Rex", "Iguanadon Ivory"],
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

class App extends Component {
 render(){
   return(
     <Router>
     <div>
       <nav>
         <Link to="/">Home</Link>
         <Link to="/about">About moi</Link>
         <Link to="/blog">My blog</Link>
         <Link to="/food">Favorite noms</Link>
         <Link to="/movie">Favorite Movie</Link>
       </nav>
       <hr/>

       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/blog" component={
             () => (<Blog title={post.title}
             allAuthors={post.authors}
             body={post.body}
             comments={post.comments} />
       )}/>
       <Route path="/food" component={Food}/>
             <Route path="/movie" component={Movie}/>
     </div>
     </Router>

   )
 }
}



export default App
