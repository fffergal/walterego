import path from 'path';
import { promises as fs } from 'fs';

import Head from 'next/head';
import {
  Row, Col, Image, Button, Carousel,
} from 'react-bootstrap';

import MainTemplate from '../components/main-template';
import Profile from '../components/profile';
import SportModeFeatures from '../components/sport-mode-features';
import TwitterCheck from '../components/twitter-check';

export async function getStaticProps() {
  const profileFileName = path.join(process.cwd(), 'walterego', 'stock-profiles.json');
  return {
    props: {
      ...JSON.parse(await fs.readFile(profileFileName, 'utf8')),
    },
  };
}

export default function Home({ stockProfiles }) {
  const carouselProfiles = stockProfiles.map((profile) => (
    <Carousel.Item key={profile.profileName}>
      <Profile {...profile} profileScreenName="fffergal" showFavorite={false} />
    </Carousel.Item>
  ));
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
          <p>
            <TwitterCheck>
              <Button variant="primary" href="/dashboard">Go to Dashboard</Button>
            </TwitterCheck>
          </p>
          <Carousel controls={false} interval={2000} indicators={false} fade>
            {carouselProfiles}
          </Carousel>
        </Col>
        <Col lg={4} className="justify-content-center">
          <Image src="/walterego.png" className="logo d-block m-auto" />
        </Col>
      </Row>
      <h2 className="mt-2"><em>Sport mode! 🏎</em></h2>
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
