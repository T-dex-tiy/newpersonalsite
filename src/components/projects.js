import React, { Component } from 'react';
import WebProjects1 from '../styles/images/projects/FirstPage.png';
import WebProjects2 from '../styles/images/projects/chucknorris.png';
import WebProjects3 from '../styles/images/projects/calculator.png';
import WebProjects4 from '../styles/images/projects/hangman.png';

class Projects extends Component {
  constructor() {
    super();
    this.state ={
      class:'',
    };
    this.clickAction = this.clickAction.bind(this);

  }

  clickAction(e) {
      // const addClass= this.state.class == 'open open-active' ? 'closed':'open open-active' ;
      this.setState({
        class: !this.state.class
      })
      console.log(this.state.class,"Click action");
  }
  render() {
    return (
      <div>
        <div className="boxheader">
          <h1 className="projects">Projects</h1>
          <div>
            <p>XXXXXXXXXXXXXXXXX</p>
          </div>
          <h1 className="projects">All projects are hosted on Github</h1>
        </div>
        <div className="projectprofiles boxes" onClick={this.clickAction}>
          <div
            className={`webProjects proj1 proj ${this.state.class ? 'open open-active':'none'}`}
          >
            <h3>Basic</h3>
            <h1>HTML</h1>
            <h3>Example</h3>
          </div>
          <div className={`webProjects proj2 proj ${this.state.class ? 'open open-active':'none'}`}>
            <h3>Basic</h3>
            <h1>API</h1>
            <h3>Example</h3>
          </div>
          <div className={`webProjects proj3 proj ${this.state.class ? 'open open-active':'none'}`}>
            <h3>Basic</h3>
            <h1>VanillaJS</h1>
            <h3>Example</h3>
          </div>
          <div className={`webProjects proj4 proj ${this.state.class ? 'open open-active':'none'}`}>
            <h3>Basic</h3>
            <h1>CSS</h1>
            <h3>Example</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
