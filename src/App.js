import React, { Component } from 'react';
import Footer from './components/footerLinks2/socialLinks.js';
import './styles/App.css';
import About from './components/about';
import ProfilePic from './styles/images/ProfilePic.jpg'



class App extends Component {
    constructor(){
      super()
      this.state={
        class:'',
      }
    }

render() {
    return (
      <div className="App">
        <div className="app-header">
          <div className="Logo"><h1> Dex Mills Designs</h1></div>
          <div><img className="profile" src={ProfilePic} alt=""/></div>
       </div>
        <div className="App-intro">
          <div>
            <About class={this.state.class}
               />
          </div>
        </div>
        <div className="app-footer">
          <Footer/>
          <div className="leftsidefooter">
          <p> The Dinosaur Engineering Expierence 2017</p>
          <p className="buildtype">Built in React</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
