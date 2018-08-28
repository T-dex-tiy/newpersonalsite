import React, { Component } from 'react';
import WebProjects1 from '../styles/images/projects/FirstPage.png';
import WebProjects2 from '../styles/images/projects/chucknorris.png';
import WebProjects3 from '../styles/images/projects/wbasite.png';
import WebProjects4 from '../styles/images/projects/hangman.png';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      class: ''
    };
    this.clickAction = this.clickAction.bind(this);
  }

  clickAction(e) {
    console.log(e);
    
    this.setState({
      class: !this.state.class
    });
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
            className={`webProjects proj1 proj ${this.state.class
              ? 'open open-active'
              : 'none'}`}
          >
            <h1 value="proj1">HTML</h1>
            <a href="https://t-dex-tiy.github.io/wk-01-icecream/">
              <h3>Example</h3>
            </a>
          </div>
          <div
            className={`webProjects proj2 proj ${this.state.class
              ? 'open open-active'
              : 'none'}`}
          >
            <h1>API</h1>
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
          <div
            className={`webProjects proj4 proj ${this.state.class
              ? 'open open-active'
              : 'none'}`}
          >
            <h1>CSS</h1>
            <a href="https://t-dex-tiy.github.io/hangman-wk-02/">
              <h3>Example</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
