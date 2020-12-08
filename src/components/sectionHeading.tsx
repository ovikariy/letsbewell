
import '../assets/styles/App.css';
import { Row, Col } from 'reactstrap';

function SectionHeadingRow(props: { heading: string }) {
    return (
        <Row className='text-center mb-5'>
            <Col>
                <h2 className='color2'>
                    {props.heading}
                </h2>
            </Col>
        </Row>
    );
}

export default SectionHeadingRow;
