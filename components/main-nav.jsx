import Image from 'next/image';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function MainNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link href="/" className="text-reset text-decoration-none">
            <Image
              alt=""
              src="/walterego.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            Walter Ego
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
      </Container>
    </Navbar>
  );
}
