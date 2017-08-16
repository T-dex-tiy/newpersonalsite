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
          <div className="boxes">
            <div className="shield"><img src={CSS}/></div>
            <div className="shield"><img src={HTML}/></div>
            <div className="shield"><img src={JS}/></div>
            <div className="shield"><img src={REshield}/></div>
          </div>
      </div>
    )
  }
}


export default Projects
