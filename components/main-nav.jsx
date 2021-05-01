import Link from 'next/link';
import { Nav, Navbar } from 'react-bootstrap';

export default function MainNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link href="/">
          <a className="text-reset text-decoration-none">
            <img
              alt=""
              src="/walterego.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            Walter Ego
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
