import '../assets/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
import { SectionProps } from '../modules/types';
import SectionHeadingRow from '../components/sectionHeading';
import { urls } from '../modules/constants';

function AboutSection(props: SectionProps) {
  return (
    <Container className='section about-section' id={props.id}>
      <SectionHeadingRow heading='About' />
      <Row>
        <Col className='text-center mb-5'>
          <h5>
            App developed and maintained by &nbsp;
            <strong className='color2'>
              <a href='https://www.linkedin.com/in/olena-vikariy/' title='Olena Vikariy LinkedIn Link' rel='noreferrer noopener' target='_blank'>
                Olena Vikariy
              </a>
            </strong>
          </h5>
          <h5>
            Code review by &nbsp;
            <strong className='color2'>
              <a href='https://www.linkedin.com/in/nchabra/' title='Nicolas Chabra LinkedIn Link' rel='noreferrer noopener' target='_blank'>
                Nicolas Chabra
              </a>
            </strong>
          </h5>
          <h5>
            Logo work by &nbsp;
            <strong className='color2'>
              <a href='https://www.linkedin.com/in/sharyn-seidel-kometz' title='Sharyn Seidel-kometz LinkedIn Link' rel='noreferrer noopener' target='_blank'>
                Sharyn Seidel-kometz
              </a>
            </strong>
          </h5>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-5'>
          <h6>
            Translations: &nbsp;
            <br />
            <br />
          </h6>

          <Row>
            <Col className='col-4 col-md-6' style={{ textAlign: 'end' }}>
              German &nbsp; |
            </Col>
            <Col className='col-8 col-md-6' style={{ textAlign: 'start' }}>
              <strong className='color2'>
                <a href='https://www.instagram.com/whatsnext.reisen/' title="What''s Next Reisen" rel='noreferrer noopener' target='_blank'>What's Next Reisen</a>
              </strong>
              <br />
              and &nbsp;
              <strong className='color2'>
                <a href='https://www.sabinevirtualservices.com/' title="Sabine Virtual Services" rel='noreferrer noopener' target='_blank'>Sabine Virtual Services</a>
              </strong>
            </Col>
          </Row>
          <Row>
            <Col className='col-4 col-md-6' style={{ textAlign: 'end' }}>
              French &nbsp; |
            </Col>
            <Col className='col-8 col-md-6' style={{ textAlign: 'start' }}>
              <strong className='color2'>
                <a href='https://www.linkedin.com/in/nchabra/' title='Nicolas Chabra LinkedIn Link' rel='noreferrer noopener' target='_blank'>
                  Nicolas Chabra
                </a>
              </strong>
            </Col>
          </Row>
          <Row>
            <Col className='col-4 col-md-6' style={{ textAlign: 'end' }}>
              Russian &nbsp; |
            </Col>
            <Col className='col-8 col-md-6' style={{ textAlign: 'start' }}>
              <strong className='color2'>
                <a href='https://www.linkedin.com/in/olena-vikariy/' title='Olena Vikariy LinkedIn Link' rel='noreferrer noopener' target='_blank'>
                  Olena Vikariy
                </a>
              </strong>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-5'>
          <h6>
            Design adapted from &nbsp;
            <strong className='color2'>
              <a href='https://pinspiry.com/traktiv-app-free-ui-kit-xd/' title='Traktiv UI Kit Link' rel='noreferrer noopener' target='_blank'>Traktiv UI Kit</a>
            </strong> &nbsp; in AdobeXD
          </h6>
          <h6>
            Background photos by talented creators on &nbsp;
            <strong className='color2'>
              <a href='https://www.pexels.com/' title='Pexels Link' rel='noreferrer noopener' target='_blank'>Pexels</a>
            </strong>
          </h6>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='text-center col-sm-6'>
          <p className='lead color2'>
            Wanna join us? If you like BeWell and want to help make it better then <strong><a className='color1' href='https://www.linkedin.com/in/olena-vikariy/' title='get in touch Link' rel='noreferrer noopener' target='_blank'>get in touch</a></strong> or check out the <strong><a className='color1' href={urls.GitHubAppRepo} title='BeWell repo link' rel='noreferrer noopener' target='_blank'>BeWell repo</a></strong> to work on the code.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
