import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class Resume extends Component {
    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter" className='resume'>
               Dex Mills
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h1 className="resume">Where I've been</h1>
              <h3 className="resume header">CxAlloy</h3>
              <h4 className="resume">Front End Windows Application Web Developer</h4>
              <h5 className="resume date">Salt Lake City || November 2018-April 2019</h5>
              <ul className="resume">
                    <li className="resume">Work with team developing Building commissioning app for windows platform </li>
                    <li className="resume">Use Windows Desktop Bridge to allow for electron.js application to be featured in windows store</li>
                    <li className="resume">Update application code to modern stable builds of backbone.js, and jQuery</li>
                    <li className="resume">Migrated code to modern mobile responsive UI layout using Bootstrap4</li>
                    <li className="resume">Added camera capabilities for windows app for users to document issues in real time</li>
                    <li className="resume">Participate in code reviews of windows application  </li>
              </ul>
              <br></br>
              <h3 className="resume header">University of Utah Coding Bootcamp</h3>
              <h4 className="resume">Teaching Assistant</h4>
              <h5 className="resume date">Salt Lake City || August 2018-Current</h5>
              <ul className="resume">
                    <li className="resume">Helped students in boot camp learn web development basics for Career Growth</li>
                    <li className="resume">Provided guides and assistance to learning full stack web development curriculum, Focusing on HTML/CSS, Javascript, React, MongoDB, SQL and MySql Structures  </li>
                    <li className="resume">Calmly helped students work through issues with code and fostered an environment of problem-solving</li>
              </ul>
              <br></br>
              <h3 className="resume header">Cloudviel Mountain Heli</h3>
              <h4 className="resume">Front End Web Developer/ Marketing Assoicate</h4>
              <h5 className="resume date">Salt Lake City || November 2017-Feburary 2019</h5>
              <ul className="resume">
                     <li className="resume">Develop a ReactJS application concurrently with mobile app linked to FireBase Database for creating reservations and displaying members photos in visually engaging manner to improve customers interaction and create reservations on customers schedule in quick time frame</li>
                    <li className="resume">Designed and Developed Electron Application for updating, and adding customers information, along with adding media for continuous engagement of customer</li>
                    <li className="resume">Design email marketing campaigns to engage current members and attract new clientele</li>
                    <li className="resume">Created and edited video, blogs and photo content to engage new and existing customers</li>
                    <li className="resume">Researched and documented best technologies for use of applications for creating stable code</li>
              </ul>


            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}

export default Resume;