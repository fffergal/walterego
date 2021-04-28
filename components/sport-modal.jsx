import { Modal } from 'react-bootstrap';

import SportModeFeatures from './sport-mode-features';

export default function SportModal({ show, setShow }) {
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>That’s a sport mode feature 🏎</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Sport mode is the paid for ✨
          {' '}
          <em>premium</em>
          {' '}
          ✨ version of Walter Ego. I haven’t made it yet, but if 100 people
          talk about Walter Ego on Twitter, I’ll make the first sport mode
          feature:
          {' '}
          <strong>undo</strong>
          .
        </p>
        <SportModeFeatures />
      </Modal.Body>
    </Modal>
  );
}
