import React from 'react';
import '../assets/styles/App.css';
import logo from '../assets/images/logo.svg';
import githubLogo from '../assets/images/github.svg';
import iOSLogo from '../assets/images/iOS.svg';
import androidLogo from '../assets/images/android.png';
import { Container, Row, Col } from 'reactstrap';
import { sections, urls } from '../modules/constants';

function FooterSection(props: {}) {
  return (
    <Container fluid={true} className='footer'>
      <Row>
        <Col className='text-center text-nowrap p-4 pr-xs-0 pl-xs-0'>
          <a href='#home'><img src={logo} className='logo' alt="BeWell App Logo" /></a>
        </Col>
        <Col className='col-12 col-xs-12 col-md-8 p-0 p-md-4'>
          <Container className='lead text-nowrap'>
            <Row>
              {sections.map((item) =>
                <Col className='col-6 col-xs-6 col-sm-4 pr-20'><a href={"#" + item.id} title={item.menuText}>{item.menuText}</a></Col>
              )}
              <Col className='col-6 col-xs-6 col-sm-4 pr-20'>
                <a href={urls.GitHubAppRepo + '#using-the-app'} title='BeWell App Using the App Link' rel='noreferrer noopener' target='_blank'>User Guide</a>
              </Col>
              <Col className='col-6 col-xs-6 col-sm-4 pr-20'>
                <a href={urls.GitHubAppRepo + '/blob/master/LICENSE'} title='BeWell App License Link' rel='noreferrer noopener' target='_blank'>License</a>
              </Col>
              <Col className='col-12 col-xs-12 col-sm-6 col-md-4 pr-20'>
                <a href={urls.GitHubAppRepo} title='BeWell App GitHub Code Repo Link' rel='noreferrer noopener' target='_blank'>BeWell Code Repo</a>
              </Col>
              <Col className='col-12 col-xs-12 col-sm-6 col-md-4 pr-20'>
                <a href={urls.GitHunSiteRepo} title='BeWell Site GitHub Code Repo Link' rel='noreferrer noopener' target='_blank'>Site Code Repo</a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className='text-center text-nowrap p-4'>
          <a href={urls.ApplePlayStore} title='BeWell App Store iOS Link' rel='noreferrer noopener' target='_blank'><img src={iOSLogo} className='small-logo' alt='Apple App Store Logo' /></a>
          <a href={urls.GooglePlayStore} title='BeWell App Store Android Link' rel='noreferrer noopener' target='_blank'><img src={androidLogo} className='small-logo' alt='Android Play Store Logo' /></a>
          <a href={urls.GitHubAppRepo} title='BeWell App GitHub Code Repo Link' rel='noreferrer noopener' target='_blank'><img src={githubLogo} className='small-logo' alt='BeWell App GitHub Code Repo Logo' /></a>
        </Col>
      </Row>
      <Row>
        <Col className='lead text-center'>
          Copyright © 2020 BeWell. All rights reserved | 
          <a href={urls.PrivacyPolicy} title='BeWell App Privacy Policy Link' rel='noreferrer noopener' target='_blank'> Privacy Policy</a>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterSection;
