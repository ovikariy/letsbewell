import '../assets/styles/App.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default function ThankYouMessage(props: any) {
  return (
    <Modal show={true} toggle={function noRefCheck() { }}>
      <ModalHeader toggle={function noRefCheck() { }}>
        You rock! Thank you :-)
      </ModalHeader>
      <ModalBody>
        Thank you for your contribution to the BeWell app! Your funds are going directly to support the development of new features.
      </ModalBody>
    </Modal>
  );
}