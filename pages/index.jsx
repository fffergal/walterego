import Head from 'next/head'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'

import MainTemplate from '../components/main-template'

export default function Home() {
  return (
    <MainTemplate>
      <Head>
        <title>Walter Ego</title>
      </Head>
      <Container>
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
              <Button variant="primary" href="/api/v1/twitterlink">
                Link Twitter
              </Button>
            </p>
          </Col>
          <Col lg={4}>
            <Image src="/walterego.png" fluid />
          </Col>
        </Row>
      </Container>
      <h2><em>Sports mode! 🏎</em></h2>
      <p>
        The free service will assign you a new name and profile image
        randomly from the 20 stock carefully curated fake old white men,
        whenever you ask. The upcoming paid for <em>sports mode</em> comes
        with these added extras:
      </p>
      <Container>
        <Row className="justify-content-md-between">
          <Card className="sml-card">
            <Card.Body>
              <Card.Title>Preview 🔍</Card.Title>
              <Card.Text>
                Preview your old white man before updating your profile.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="sml-card">
            <Card.Body>
              <Card.Title>Easy undo ↩️</Card.Title>
              <Card.Text>
                Save your existing profile info so it's easy to switch back.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-md-between">
          <Card className="sml-card">
            <Card.Body>
              <Card.Title>Fine detail 🎩</Card.Title>
              <Card.Text>
                Update your bio and background image too.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="sml-card">
            <Card.Body>
              <Card.Title>Procedurally generated men 🎲</Card.Title>
              <Card.Text>
                Go beyond the stock men for a more unique profile.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-md-between">
          <Card className="sml-card">
            <Card.Body>
              <Card.Title>Favorite ❤️</Card.Title>
              <Card.Text>
                If you find a profile you really like, save it as your
                favorite to use them again. They can be like your signature
                old white man.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="sml-card">
            <Card.Body>
              <Card.Title>Automatic timer ⏳</Card.Title>
              <Card.Text>
                Do you know what you're about to say is going to attract the
                wrong sort of attention? Set an automatic timer right before
                you tweet, so you get all the benefit of using Walter Ego
                without having to change your profile back yourself later.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-md-between">
          <Card className="sml-card">
            <Card.Body>
              <Card.Title>White Knight 🐴</Card.Title>
              <Card.Text>
                Automatically switch profile when you receive a high number
                of replies from accounts with low followers and egg profile
                images.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </MainTemplate>
  )
}
