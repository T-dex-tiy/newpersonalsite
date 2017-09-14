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
            <div className="biocontent bio2">
              <div className="bio2">
                <h1>Who I am</h1>
              </div>
              <p>Prior to pursuing a career in the tech field, my career path took me all over to many various positions. From marketing and event production to customer serivce and hospitality industry, I have taken each position on and made it my own. I can add a different view to any page or project with an attitude towards creating exciting and dynamic websites. My skill set does include many years of content creation along with event planning. I can add that needed fresh eyes to any project.
              </p>
            </div>
            <div className="links">
              <Projects class={this.props.class}/>
            </div>
            <div className="links Hero4">
              <Contact/>
            </div>
        </div>
      </div>
    )
  }
}


export default About;
