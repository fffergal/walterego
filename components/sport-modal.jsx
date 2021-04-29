import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import SportModeFeatures from './sport-mode-features';

export default function SportModal({ children, ...props }) {
  const [showSport, setShowSport] = useState(false);

  function sportModeInterest(ev) {
    window.plausible(
      'Sport Mode Interest',
      { props: { feature: ev.target.innerText } },
    );
    setShowSport(true);
  }

  return (
    <>
      <Button onClick={sportModeInterest} {...props}>
        {children}
      </Button>
      <Modal size="lg" show={showSport} onHide={() => setShowSport(false)}>
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
    </>
  );
}
