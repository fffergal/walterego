import { Button } from 'react-bootstrap';

import MainTemplate from '../components/main-template';
import TwitterCheck from '../components/twitter-check';

export default function Dashboard() {
  return (
    <MainTemplate>
      <h1>Dashboard</h1>
      <TwitterCheck>
        <Button disabled>Set my Walter Ego (coming soon)</Button>
      </TwitterCheck>
    </MainTemplate>
  );
}
