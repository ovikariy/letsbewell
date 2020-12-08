import '../assets/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
import { SectionProps } from '../modules/types';
import SectionHeadingRow from '../components/sectionHeading';

function AboutSection(props: SectionProps) {
  return (
    <Container className='section about-section' id={props.id}>
      <SectionHeadingRow heading='About' />
      <Row>
        <Col className='text-center mb-5'>
          <h4>
            App developed and maintained by <strong className='color2'>Olena Vikariy</strong>
          </h4>
          <h5>
            Code review by <strong className='color2'>Nicolas Chabra</strong>
          </h5>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-5'>
          <h5>
            Design adapted from <strong className='color2'>Traktiv UI Kit</strong> in AdobeXD
          </h5>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='text-center col-sm-6'>
          <p className='lead color2'>
            Wanna join us? If you like Be Well and want to help make it better then <strong className='color1'>get in touch</strong> or check out the <strong className='color1'>Be Well repo</strong> to work on the code.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
