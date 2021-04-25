import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

import MainNav from './main-nav'

export default function MainTemplate(props) {
  return (
    <div>
      <MainNav />
      <Head>
        <link rel="icon" href="/walterego.png" />
      </Head>
      <Container className="md-container">
        <Container>
          {props.children}
        </Container>
        <footer className="cntr-footer">
          <Link href="/about">
            <a>Who's responsible for all this?</a>
          </Link>
        </footer>
      </Container>
    </div>
  )
}
