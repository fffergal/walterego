import Head from 'next/head';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

import MainNav from './main-nav';

export default function MainTemplate({ children }) {
  return (
    <div>
      <MainNav />
      <Head>
        <link rel="icon" href="/walterego.png" />
      </Head>
      <Container className="md-container">
        {children}
        <footer className="text-center pt-3 mt-2 border-top">
          <p>
            <Link href="/about"><a>Who’s responsible for all this?</a></Link>
          </p>
        </footer>
      </Container>
    </div>
  );
}
