
import featureWidgetsScreenshot from '../assets/images/screenshots/bewell-app-features-widgets.png';
import featureMoodScreenshot from '../assets/images/screenshots/bewell-app-features-mood.svg';
import featureLangThemeScreenshot from '../assets/images/screenshots/bewell-app-features-languages-themes.svg';
import featureHistoryScreenshot from '../assets/images/screenshots/bewell-app-features-history.svg';
import featureChartsScreenshot from '../assets/images/screenshots/bewell-app-features-charts.svg';
import '../assets/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
import { SectionProps } from '../modules/types';
import SectionHeadingRow from '../components/sectionHeading';

function FeaturesSection(props: SectionProps) {
  return (
    <Container className='section' id={props.id}>
      <SectionHeadingRow heading='Features' />
      <Row className='align-items-center mb-5'>
        <Col>
          <ul>
            <li>
              <h3>
                <small>12 widgets available and new ones added regularly!</small>
                <br />
                <img src={featureWidgetsScreenshot} style={{ width: '100%'  , marginTop: 20 }} alt="BeWell App Widgets Screenshot" />
              </h3>
            </li>
            <li>
              <h3>
                <small>Quick and easy to use</small>
              </h3>
            </li>
            <li>
              <h3>
                <small>Auto save</small>
              </h3>
            </li>
            <li>
              <h2>
                <small>Customizable widget order</small>
              </h2>
            </li>
            <li>
              <h3>
                <small>Customizable lists for Movement, Creativity and Medications</small>
              </h3>
            </li>
          </ul>
        </Col>
        <Col className='text-center mt-5'>
          <img src={featureMoodScreenshot} className='usage-screenshot' alt="BeWell App Feature Mood Screenshot" />
        </Col>
      </Row>
      <Row className='align-items-center mb-5'>
        <Col className='order-12 order-md-0 text-center mt-5'>
          <img src={featureLangThemeScreenshot} className='usage-screenshot' alt="BeWell App Feature Languages and Themes Screenshot" />
        </Col>
        <Col>
          <ul>
            <li>
              <h2>
                <small>Multiple Languages</small>
              </h2>
              <p className='color2'>English, Russian, French, and German so far...</p>
            </li>
            <li>
              <h2>
                <small>Multiple Themes</small>
              </h2>
            </li>
          </ul>
          <Container className='mt-5 p-4 background-transparent border-rounded'>
            <Row className='justify-content-center'>
              <Col>
                <p className="lead color2">
                  Would you like to create your own theme or see your language added? <strong>Get in touch</strong> and we'll work with you to make it happen. We'll give you a shout out here too! :-)</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className='align-items-center'>
        <Col>
          <ul>
            <li>
              <h2>
                <small>View history</small>
              </h2>
            </li>
          </ul>
          <Container className='mt-5 p-4 background-transparent border-rounded'>
            <Row>
              <Col className='text-center'>
                <p className="lead color2">
                  Coming soon: trends and charts
                </p>
                <img src={featureChartsScreenshot} className='usage-screenshot' alt='BeWell App Feature Charts Screenshot' />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className='text-center mt-5'>
          <img src={featureHistoryScreenshot} className='screenshot' alt='BeWell App Feature History Screenshot' />
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturesSection;
