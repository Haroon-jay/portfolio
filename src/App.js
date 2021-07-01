import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Post from "./components/Post"
import Project from "./components/Project"
import SinglePost from "./components/SinglePost"
import Navbar from "./components/Navbar";
function App() {
  return (
   <div>
     <BrowserRouter>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}></Route>
       <Route path="/about" component={About}></Route>
       <Route path="/post/:slug" component={SinglePost}></Route>
       <Route path="/post" component={Post}></Route>
       <Route path="/project" component={Project}></Route>
     </Switch>
     
     </BrowserRouter>
   </div>
  );
}

export default App;
