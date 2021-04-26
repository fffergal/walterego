import { useState } from 'react';
import { Button } from 'react-bootstrap';

import MainTemplate from '../components/main-template';
import Profile from '../components/profile';
import TwitterCheck from '../components/twitter-check';

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  async function newProfile() {
    setProfile({ data: null, error: null });
    try {
      const response = await fetch('/api/v1/stockprofile', { method: 'POST' });
      setProfile({ data: await response.json(), error: null });
    } catch (e) {
      setProfile({ data: null, error: e });
    }
  }

  let content;
  if (!profile) {
    content = (
      <div>
        <p>This will change your profile straight away.</p>
        <Button onClick={newProfile}>
          Set my Walter Ego
        </Button>
      </div>
    );
  } else if (profile.error) content = <p>Error updating your profile.</p>;
  else if (!profile.data) content = <p>Updating your profile…</p>;
  else {
    content = (
      <div>
        <p>
          Here’s your new profile. Your Twitter account has already been
          updated.
        </p>
        <Profile {...profile.data} />
      </div>
    );
  }
  return (
    <MainTemplate>
      <h1>Dashboard</h1>
      <TwitterCheck>
        {content}
      </TwitterCheck>
    </MainTemplate>
  );
}
