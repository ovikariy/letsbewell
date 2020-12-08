import React from 'react';
import '../assets/styles/App.css';
import logo from '../assets/images/logo.svg';
import githubLogo from '../assets/images/github.svg';
import iOSLogo from '../assets/images/iOS.svg';
import androidLogo from '../assets/images/android.png';
import { Container, Row, Col } from 'reactstrap';

function FooterSection(props: {}) {
  return (
    <Container fluid={true} className='footer'>
      <Row>
        <Col className='text-center text-nowrap p-4 pr-xs-0 pl-xs-0'>
          <img src={logo} className='small-logo' alt="BeWell App Logo" />
          <span className='h1 text-nowrap'>BE WELL</span>
        </Col>
        <Col className='col-sm-12 col-lg-8 p-4 pr-xs-0 pl-xs-0'>
          <Container className='lead text-nowrap'>
            <Row>
              <Col className='col-6 col-xs-6 col-sm-4'>Home</Col>
              <Col className='col-6 col-xs-6 col-sm-4'>User Guide</Col>
              <Col className='col-6 col-xs-6 col-sm-4'>Features</Col>
              <Col className='col-6 col-xs-6 col-sm-4'>Security</Col>
              <Col className='col-6 col-xs-6 col-sm-4'>Privacy Policy</Col>
              <Col className='col-6 col-xs-6 col-sm-4'>License</Col>
              <Col className='col-12 col-xs-12 col-sm-6 col-md-4'>BeWell Code Repo</Col>
              <Col className='col-12 col-xs-12 col-sm-6 col-md-4'>Site Code Repo</Col>
            </Row>
          </Container>
        </Col>
        <Col className='text-center text-nowrap p-4'>
          <a href='https://google.com'><img src={iOSLogo} className='small-logo' alt="Apple App Store Link" /></a>
          <a href='https://google.com'><img src={androidLogo} className='small-logo' alt="Android Play Store Link" /></a>
          <a href='https://google.com'><img src={githubLogo} className='small-logo' alt="GitHub Link" /></a>
        </Col>
      </Row>
      <Row>
        <Col className='lead text-center'>
          Copyright © 2020 BeWell. All rights reserved
        </Col>
      </Row>
    </Container>
  );
}

export default FooterSection;
