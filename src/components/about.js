import React, { Component } from 'react';
import Projects from '../components/projects';
import DevTools from '../components/devToolBox';
import Contact from '../components/Contact'



class About extends Component{
  constructor(){
    super()
  }


  render(){
    return (
      <div>
        <div className="profile">
            <div className="Hero">
              <h1>Loud and Original</h1>
            </div>
            <div className="bio">
              <div className="bioflex">
                <div className="bioheader">
                  <h1>Adventure based web design and pursuing the next big idea.</h1>
                </div>
                <div className="biocontent">
                  <p>A season ending ski injury caused me to lose the ability to ski the way that I have the past thirty years. While I had extensive down time from traveling all over North America, I took the oppurtunity to pursue another passion in creating dynamic, stable websites. I pursued this dream thru hard work and spending all of my free time researching and devolping my skill set. I would like to take these skills futher and continue to teach what I have learned.
                  </p>
                </div>
              </div>
            </div>
            <div className="Hero2">
              <DevTools />
            </div>
            <div className="links">
              <Projects class={this.props.class}/>
            </div>
            <div  >
              <Contact/>
            </div>
        </div>
      </div>
    )
  }
}


export default About;
