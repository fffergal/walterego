import { CardColumns, Card } from 'react-bootstrap';

export default function SportModeFeatures() {
  return (
    <CardColumns className="sport-columns">
      <Card className="sml-card">
        <Card.Body>
          <Card.Title>Easy undo ↩️</Card.Title>
          <Card.Text>
            Save your existing profile info so it’s easy to switch back.
          </Card.Text>
        </Card.Body>
      </Card>
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
            Do you know what you’re about to say is going to attract the
            wrong sort of attention? Set an automatic timer right before
            you tweet, so you get all the benefit of using Walter Ego
            without having to change your profile back yourself later.
          </Card.Text>
        </Card.Body>
      </Card>
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
      <Card className="sml-card">
        <Card.Body>
          <Card.Title>Father figure ⚾️</Card.Title>
          <Card.Text>
            A paternal bot gently but firmly sets your chosen reply-guy
            straight.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  );
}
