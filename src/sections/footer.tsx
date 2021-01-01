import React from 'react';
import '../assets/styles/App.css';
import logo from '../assets/images/logo.svg';
import githubLogo from '../assets/images/github.svg';
import iOSLogo from '../assets/images/iOS.svg';
import androidLogo from '../assets/images/android.png';
import { Container, Row, Col } from 'reactstrap';
import { sections } from '../modules/constants';

function FooterSection(props: {}) {
  return (
    <Container fluid={true} className='footer'>
      <Row>
        <Col className='text-center text-nowrap p-4 pr-xs-0 pl-xs-0'>
          <a href='#home'><img src={logo} className='logo' alt="BeWell App Logo" /></a>
        </Col>
        <Col className='col-sm-12 col-lg-8 p-4 pr-xs-0 pl-xs-0'>
          <Container className='lead text-nowrap'>
            <Row>
              {sections.map((item) =>
                <Col className='col-6 col-xs-6 col-sm-4'><a href={"#" + item.id} title={item.menuText}>{item.menuText}</a></Col>
              )}
              <Col className='col-6 col-xs-6 col-sm-4'>
                <a href='https://github.com/ovikariy/bewell#using-the-app' title='BeWell App Using the App Link' rel='noreferrer noopener' target='_blank'>User Guide</a>
              </Col>
              <Col className='col-6 col-xs-6 col-sm-4'>
                <a href='https://github.com/ovikariy/bewell/blob/master/LICENSE' title='BeWell App License Link' rel='noreferrer noopener' target='_blank'>License</a>
              </Col>              
              <Col className='col-12 col-xs-12 col-sm-6 col-md-4'>
                <a href='https://github.com/ovikariy/bewell' title='BeWell App GitHub Code Repo Link' rel='noreferrer noopener' target='_blank'>BeWell Code Repo</a>
              </Col>
              <Col className='col-12 col-xs-12 col-sm-6 col-md-4'>
                <a href='https://github.com/ovikariy/letsbewell' title='BeWell Site GitHub Code Repo Link' rel='noreferrer noopener' target='_blank'>Site Code Repo</a>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className='text-center text-nowrap p-4'>
          {/* <a href='https://google.com' title='BeWell App Store iOS Link' rel='noreferrer noopener' target='_blank'><img src={iOSLogo} className='small-logo' alt='Apple App Store Logo' /></a>
          <a href='https://google.com' title='BeWell App Store Android Link' rel='noreferrer noopener' target='_blank'><img src={androidLogo} className='small-logo' alt='Android Play Store Logo' /></a> */}
          <a href='https://github.com/ovikariy/bewell' title='BeWell App GitHub Code Repo Link' rel='noreferrer noopener' target='_blank'><img src={githubLogo} className='small-logo' alt='BeWell App GitHub Code Repo Logo' /></a>
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
