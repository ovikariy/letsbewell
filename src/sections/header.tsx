import React from 'react';
import homeScreenshot from '../assets/images/screenshots/bewell-app-features-home.svg';
import '../assets/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
import LinkButton from '../components/linkButton';
import { SectionProps } from '../modules/types';

function HeaderSection(props: SectionProps) {
  return (
      <header className="header background-rust" id={props.id}>
        <Container className='section'>
          <Row className='align-items-center h-100' >
            <Col>
              <h2>
                Open source
                wellbeing tracker app
                with a focus on data privacy
              </h2>
              <br />
              <p>
                BeWell app helps you track your <i><b>moods</b></i>, <i><b>sleep</b></i> and save <i><b>notes</b></i> and <i><b>images</b></i> throughout the day without worrying about your data being sent to servers and sold to advertizers or other third parties.
              </p>
              <br />
              <h4>
                <small>Your data is yours.</small>
              </h4>
              <h4>
                <small>It is stored encrypted and stays on your device.</small>
              </h4>
              <br />
              <br />
              <LinkButton className='mr-3 mb-3'>Coming to the app stores soon!</LinkButton>
              {/* <LinkButton href='https://www.google.com/' className='mr-3 mb-3'>Download for iOS</LinkButton>
              <LinkButton href='https://www.google.com/' className='mr-3 mb-3'>Download for Android</LinkButton> */}
            </Col>
            <Col className='mt-5 text-center'>
              <img src={homeScreenshot} className='screenshot' alt="BeWell App Welcome Page Screenshot" />
            </Col>
          </Row>
        </Container>
      </header>
  );
}

export default HeaderSection;
