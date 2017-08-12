import React, { Component } from 'react'
import WebProjects1 from '../styles/images/projects/FirstPage.png';
import WebProjects2 from '../styles/images/projects/chucknorris.png';
import WebProjects3 from '../styles/images/projects/calculator.png';
import WebProjects4 from '../styles/images/projects/hangman.png';


class Projects extends Component{


  render(){
    return (
      <div>
      <div className="profilelinks">
        <div><h1 className="projects">Projects</h1></div>
        <div><p>XXXXXXXXXXXXXXXXX</p></div>
        <div><h4 className="projects">All projects are hosted on Github</h4></div>
        <div className="projectprofiles">
          <div className="webProjects one"><a href ="https://t-dex-tiy.github.io/wk-01-icecream/"><img className="portfolio" src={WebProjects1}/></a></div>
          <div className="webProjects two"><a href= "https://t-dex-tiy.github.io/API-homework-wk-04/"><img className="portfolio" src={WebProjects2}/></a></div>
          <div className="webProjects three"><a href="https://t-dex-tiy.github.io/calculator/"><img className="portfolio" src={WebProjects3}/></a></div>
          <div className="webProjects three"><a href="https://t-dex-tiy.github.io/hangman-wk-02/"><img className="portfolio" src={WebProjects4}/></a></div>
        </div>
      </div>
    </div>
    )
  }
}


export default Projects
