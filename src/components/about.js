import React, { Component } from 'react';
import Projects from '../components/projects';
import DevTools from '../components/devToolBox';
import Contact from '../components/Contact';
import * as FontAwesome from 'react-icons/lib/fa';

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="profile">
          <div className="Hero">
            <h1>Loud and Original</h1>
          </div>
          <div className="bio">
            <div className="bioflex">
              <div className="bioheader">
                <h1>
                  Adventure based web design and pursuing the next big idea.
                </h1>
              </div>
              <div className="biocontent">
                <p>
                  Champion freeskier with a passion for tech and teaching
                  it. While pursuing a career in skiing my travels took me all
                  over the US and allowed for basking in the greatness that
                  America has to offer. An injury allowed me to pursue my
                  passion for tech, which has been present since my family got
                  the first Apple computer. Self taught with a spinkling of an immersive program, I have taken all of what I have learned and use it to teach.
                To become an expert you need to teach and I use that motto every day</p>
              </div>
              <br />
              <div className="biocontent">
                <p>
                  Growth was the name of the game and used my skill set that I
                  gained while skiing and being outside to push my web dev
                  skills further. Used the down time to learn JavaScript more
                  fluently and newer frameworks like React. Too boot put down
                  enough coffee to hit a hyper realty numerous times.
                </p>
              </div>
            </div>
          </div>
          <div className="links">
            <Projects class={this.props.class} />
          </div>
          <div>
            <div className="bio2 bioheader">
              <h1>
                <i className="fab fa-react" /> Why me?
              </h1>
            </div>
            <div className="biocontent bio2">
              <p>
                From marketing and event production to customer serivce and
                hospitality industry, I have taken each position on and made it
                my own. I can add a different view to any page or project with
                an attitude towards creating exciting and dynamic websites. My
                skill set does include many years of content creation along with
                event planning. I can add that needed fresh eyes to any project.
                If you also need that special person who comes in and dominates
                trivia, I have a brain full of useless facts as well.
              </p>
            </div>
          </div>
          <div className="Hero4">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
