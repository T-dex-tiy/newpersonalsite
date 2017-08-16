import React, { Component } from 'react'
import CSS from '../styles/images/Toolbox/cssshield.png';
import HTML from '../styles/images/Toolbox/htmlshield.png';
import JS from '../styles/images/Toolbox/JSShield.png';
import REshield from '../styles/images/Toolbox/reactshield.jpeg';



class Projects extends Component{


  render(){
    return (
      <div>
          <div>
            <div className="boxheader"><h1>Dev Tool Box!!!</h1></div>
          </div>
          <div className="boxes projectprofiles">
            <div className="shield webProjects proj1"><img src={CSS}/></div>
            <div className="shield webProjects proj1"><img src={HTML}/></div>
            <div className="shield webProjects proj1"><img src={JS}/></div>
            <div className="shield webProjects proj1"><img src={REshield}/></div>
          </div>
      </div>
    )
  }
}


export default Projects
