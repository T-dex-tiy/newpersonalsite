import React, { Component } from 'react'
import CSS from '../styles/images/Toolbox/cssshield.png';
import HTML from '../styles/images/Toolbox/htmlshield.png';
import JS from '../styles/images/Toolbox/JSShield.png';
import REshield from '../styles/images/Toolbox/reactshield.jpeg';
import ComingSoon from '../styles/images/comingsoon_stamp.png'



class Projects extends Component{


  render(){
    return (
      <div>
          <div>
            <div className="boxheader"><h1>Dev Tool Box!!!</h1></div>
          </div>
          <div className="boxes projectprofiles">
            <div className="shield webProjects"><img src={ComingSoon}/></div>

          </div>
      </div>
    )
  }
}


export default Projects
