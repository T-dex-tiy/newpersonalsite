import React, { Component } from 'react';
import Resume from '../components/resume'
import Button from 'react-bootstrap/Button'


class Contact extends Component {
  constructor(){
    super()
    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="workinprogress">
        <div />
        <div>
          <div className="boxheader">
            <h1>How to Contact Me!</h1>
          </div>
          <div className="boxes projectprofiles">
            <div className="webProjects">
              <h1>
                <a href="mailto:dex.mills@dexmills.com?Subject=Checking%20Out%20your%20site">
                  Email Me!
                </a>
              </h1>
            </div>
            <div className="webProjects">
              <h1>
                <a variant="primary"  onClick={() => this.setState({ modalShow: true })}>Resume!</a>
                <Resume className="resume" show={this.state.modalShow} onHide={modalClose}/>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
