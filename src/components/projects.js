import React, { Component } from 'react'
import WebProjects1 from '../styles/images/projects/FirstPage.png';
import WebProjects2 from '../styles/images/projects/chucknorris.png';
import WebProjects3 from '../styles/images/projects/calculator.png';
import WebProjects4 from '../styles/images/projects/hangman.png';


class Projects extends Component{


  render(){
    return (
      <div>
      <div>
        <div className="boxheader">
          <h1 className="projects">Projects</h1>
          <div><p>XXXXXXXXXXXXXXXXX</p></div>
          <h4 className="projects">All projects are hosted on Github</h4>
        </div>
        <div className="projectprofiles boxes">
          <div className="webProjects proj1"><h3>Basic</h3><h1>HTML</h1><h3>Example</h3></div>
          <div className="webProjects proj2"><h3>Basic</h3><h1>API</h1><h3>Example</h3></div>
          <div className="webProjects proj3"><h3>Basic</h3><h1>VanillaJS</h1><h3>Example</h3></div>
          <div className="webProjects proj4"><h3>Basic</h3><h1>CSS</h1><h3>Example</h3></div>
        </div>
      </div>
    </div>
    )
  }
}


export default Projects
