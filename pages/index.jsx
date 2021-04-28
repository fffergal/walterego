import Head from 'next/head';
import {
  Row, Col, Image, Button,
} from 'react-bootstrap';

import MainTemplate from '../components/main-template';
import SportModeFeatures from '../components/sport-mode-features';
import TwitterCheck from '../components/twitter-check';

export default function Home() {
  return (
    <MainTemplate>
      <Head>
        <title>Walter Ego</title>
      </Head>
      <Row>
        <Col lg={8}>
          <h1>Get your Walter Ego!</h1>
          <p>
            Say bye-bye to reply guys, by pretending to be a kindly old white man.
          </p>
          <p>
            Connect walterego.golf with your Twitter account to replace your name
            and profile image with an old white man, whenever you need a break!
          </p>
          <TwitterCheck>
            <Button variant="primary" href="/dashboard">
              Go to Dashboard
            </Button>
          </TwitterCheck>
        </Col>
        <Col lg={4} className="justify-content-center">
          <Image src="/walterego.png" className="logo d-block m-auto" />
        </Col>
      </Row>
      <h2><em>Sport mode! 🏎</em></h2>
      <p>
        The free service will assign you a new name and profile image
        randomly from the 20 stock carefully curated fake old white men,
        whenever you ask. The upcoming paid for
        {' '}
        <em>sport mode</em>
        {' '}
        comes
        with these added extras:
      </p>
      <SportModeFeatures />
    </MainTemplate>
  );
}
