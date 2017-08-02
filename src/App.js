import React, { Component } from 'react';
import Footer from './components/footerLinks2/socialLinks.js';
import './styles/App.css';
import About from './components/about';
import Projects from './components/projects';
import ProfilePic from './styles/images/ProfilePic.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <div className="Logo"><h1> Dex Mills Designs</h1></div>
          <div><img className="profile" src={ProfilePic}/></div>
       </div>
        <div className="App-intro">
          <div>
            <About />
          </div>
        </div>
        <div className="app-footer">
          <Footer/><p> The Dinosaur Engineering Expierence 2017</p>
        </div>
      </div>
    );
  }
}

export default App;
