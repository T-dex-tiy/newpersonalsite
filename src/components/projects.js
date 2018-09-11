import React, { Component } from 'react';


class Projects extends Component {
  constructor() {
    super();
    this.state = {
      class: ''
    };
    document.addEventListener("hover",(e)=>{
      const{target}=e
      console.log(target);
      
    })
  }



  clickAction=(e) =>{  
    const classTest =e.target
    console.log( {classTest})
  
    this.setState({
      class: !this.state.class
    });
  }
  render() {
    return (
      <div>
        <div className="boxheader">
          <h1 className="projects">Projects</h1>
          <h1 className="projects">All projects are hosted on Github</h1>
        </div>
        <div className="projectprofiles boxes" onClick={(target)=>{this.clickAction(target)}}>
          <div 
            className={`webProjects proj1 proj ${this.state.class
              ? 'open open-active'
              : 'none'}`} value="shit"
          >
            <h1 value="JS" ref="js">Vanilla JS</h1>
            <a href="https://t-dex-tiy.github.io/calculator/" value="calc">
              <h3>Example</h3>
            </a>
          </div>
          <div
            className={`webProjects proj2 proj ${this.state.class
              ? 'open open-active'
              : 'none'}`}
          >
            <h1 ref="API">API</h1>
            <a href="https://t-dex-tiy.github.io/API-homework-wk-04/">
              <h3>Example</h3>
            </a>
          </div>
          <div
            className={`webProjects proj3 proj ${this.state.class
              ? 'open open-active'
              : 'none'}`}
          >
            <h1>ReactJS</h1>
            <a href="https://wba-trail-counting.herokuapp.com">
              <h3>Example</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
