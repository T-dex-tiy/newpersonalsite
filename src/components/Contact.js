import React, { Component } from 'react';

class Contact extends Component {
  render() {
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
                <a href="https://www.visualcv.com/dex-mills">Resume!</a>
              </h1>
            </div>
            <div className="webProjects">
              <h1>
                <a href="https://medium.com/@dexmills">Medium</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
