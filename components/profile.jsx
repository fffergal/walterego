import { Card, Image } from 'react-bootstrap';

import SportModal from './sport-modal';

export default function Profile({ profileImageUrl, profileName, profileScreenName }) {
  const headerStyle = {
    borderBottom: 'none',
  };
  const imageStyle = {
    border: '6px solid white',
    position: 'relative',
    bottom: '-55px',
  };
  return (
    <Card>
      <Card.Header style={headerStyle}>
        <Image
          width={76}
          height={76}
          className="align-self-center"
          src={profileImageUrl}
          roundedCircle
          style={imageStyle}
        />
      </Card.Header>
      <Card.Body style={{ paddingTop: '55px' }}>
        <Card.Title style={{ fontWeight: 'bold' }}>{profileName}</Card.Title>
        <Card.Subtitle className="text-muted">
          @
          {profileScreenName}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer className="text-center">
        <SportModal aria-label="Favorite" variant="light">&#9825;</SportModal>
      </Card.Footer>
    </Card>
  );
}
