import React, { Component } from 'react'
import WebProjects from '../styles/images/projects/FirstPage.png'


class Projects extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
      <div className="profilelinks">
        <h1>Projects!</h1>
        <div className="projectprofiles">
          <div className="webProjects one"><img className="portfolio" src={WebProjects}/></div>
          <div className="webProjects two"><img className="portfolio" src={WebProjects}/></div>
          <div className="webProjects three"><img className="portfolio" src={WebProjects}/></div>
          <div className="webProjects three"><img className="portfolio" src={WebProjects}/></div>
        </div>
      </div>
    </div>
    )
  }
}


export default Projects
