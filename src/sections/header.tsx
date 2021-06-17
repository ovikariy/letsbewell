import homeScreenshot1 from '../assets/images/screenshots/bewell-app-features-home1.svg';
import homeScreenshot2 from '../assets/images/screenshots/bewell-app-features-home2.svg';
import '../assets/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
import LinkButton from '../components/linkButton';
import { SectionProps } from '../modules/types';
import { urls } from '../modules/constants';

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
            <LinkButton href={urls.ApplePlayStore} className='mr-3 mb-3'>Download for iOS</LinkButton>
            <LinkButton href={urls.GooglePlayStore} className='mb-3'>Download for Android</LinkButton>
            <br />
            <br />
            <p>
              BeWell app helps you track your <b><i>moods</i></b>, <b><i>sleep</i></b>, <b><i>movement</i></b>, <b><i>creative tasks</i></b>, <b><i>stress levels</i></b>, <b><i>meditation time</i></b> and so much more! It also allows saving notes and images throughout the day without worrying about your data being sent to servers and sold to advertisers or other third parties.
              </p>
            <br />
            <h4>
              <small>Your data is yours.</small>
            </h4>
            <h4>
              <small>It is stored encrypted and stays on your device.</small>
            </h4>
            <br />
          </Col>
          <Col className='mt-5 text-center'>
            <img src={homeScreenshot1} className='screenshot' alt="BeWell App Welcome Page Screenshot" />
          </Col>
          <Col className='mt-5 text-center'>
            <img src={homeScreenshot2} className='screenshot' alt="BeWell App Welcome Page Screenshot" />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default HeaderSection;
