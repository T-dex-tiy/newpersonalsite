import React, { Component } from 'react';
import Projects from '../components/projects';
import Contact from '../components/Contact';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


class About extends Component {

  render() {
    return (
      <div>
        <div className="profile">
          <Jumbotron fluid className='Hero'>
            <h1>Loud and Original</h1>
          </Jumbotron>
          <Container className="bio">
            <div className="bioflex">
              <div className="bioheader">
                  Adventure based web design and pursuing the next big idea.
              </div>
              <div className="biocontent">
                
                  Champion freeskier with a passion for tech and teaching
                  it. Use all of my free time to hone my skill set and continue to level up as quick as I can.
                  Having a deep seeded passion for all that is tech from messing around with web sites on the giant 
                  Apple Computer with the sweet sounds of a Dial-up Modem to focusing and teaching myself all the nooks and crannies that web and software development has to offer.
                  I stand and full belive that to be an expert you need to teach and I spend my time helping educate what I have learned.
                <br></br>
                <br></br>
                 Growth was the name of the game and using the skills I acquired while traveling the west pursuing a dream of making skiing a reality, give me an edge on many developers.
                 Pursuing a passion that has many more hardships than victories has allowed me to focus on goals and do all that is needed to achieve them.
                 Using that skill set along with my rich career history in hospitality, customer service and event management give me a unique eye for devloping dynamic software that makes users feel like they are part of the web rather than interacting with a website.
              </div>
            </div>
          </Container>
          <Container fluid className="links">
            <Projects class={this.props.class} />
          </Container>
          <div>
            <div className="bio2 bioheader">
              <h1>
                <i className="fab fa-react" /> Why me?
              </h1>
            </div>
            <div className="biocontent bio2">
                From marketing and event production to customer serivce and
                hospitality industry, I have taken each position on and made it
                my own. I can add a different view to any page or project with
                an attitude towards creating exciting and dynamic websites. My
                skill set does include many years of content creation along with
                event planning. I can add that needed fresh eyes to any project.
                If you also need that special person who comes in and dominates
                trivia, I have a brain full of useless facts as well.
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
