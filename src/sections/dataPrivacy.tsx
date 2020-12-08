
import React from 'react';
import '../assets/styles/App.css';
import { Container, Row, Col, Media } from 'reactstrap';
import { SectionProps } from '../modules/types';

import iconOpenSource from '../assets/images/dataprivacy/bewell-app-data-privacy-open-source.svg';
import iconPasswordPin from '../assets/images/dataprivacy/bewell-app-data-privacy-password-and-pin.svg';
import iconSecure from '../assets/images/dataprivacy/bewell-app-data-privacy-secure.svg';
import iconServerless from '../assets/images/dataprivacy/bewell-app-data-privacy-serverless.svg';
import MediaComponent from '../components/media';
import SectionHeadingRow from '../components/sectionHeading';


function DataPrivacySection(props: SectionProps) {
  return (
    <Container className='section' id={props.id}>
      <SectionHeadingRow heading='What do we mean when we refer to data privacy?' />
      <Row className='background-transparent'>
        <Col className='mb-5 mt-5 mt-sm-0 m-md-4'>
          <MediaComponent
            heading='Serverless'
            body='Serverless app, doesnt send your data anywhere. Whatever you enter in the app stays on your device.'
            leftIcon={iconServerless}
            leftIconAlt='Be Well App Data Privary Serverless Feature Icon'
          />
        </Col>
        <Col className='mb-5 m-md-4'>
          <MediaComponent
            heading='Secure'
            body='Password protected and encrypted with 256-bit Advanced Encryption Standard (AES)'
            leftIcon={iconSecure}
            leftIconAlt='Be Well App Data Privary Secure Feature Icon'
          />
        </Col>
      </Row>
      <Row className='justify-content-center background-transparent'>
        <Col className='mb-5 m-md-4'>
        <MediaComponent
            heading='Open Source'
            body='Open and transparent to everyone who wishes to review the code. Nothing hidden'
            leftIcon={iconOpenSource}
            leftIconAlt='Be Well App Data Privary Open Source Feature Icon'
          />
        </Col>
        <Col className='mb-5 m-md-4'>
        <MediaComponent
            heading='Password and PIN Lock'
            body='App disables the ability to use PIN after 6 invalid attempts and requires to use the password instead'
            leftIcon={iconPasswordPin}
            leftIconAlt='Be Well App Data Privary Password And PIN Lock Feature Icon'
          />
        </Col>
      </Row>
    </Container >
  );
}

export default DataPrivacySection;
