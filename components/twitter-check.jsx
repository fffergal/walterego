import Image from 'next/image';
import useSWR from 'swr';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

import fetcher from './_fetcher';

export default function TwitterCheck({ children }) {
  const { data, error } = useSWR('/api/v1/twittercheck', fetcher);
  if (error) return <span>Error checking if you are signed in with X.</span>;
  if (!data) return <span>Checking if you are signed in with X <Spinner size="sm" as="span" /></span>;
  if (!data.signedIn) {
    return (
      <a href="/api/v1/twitterlink">
        <Button>Sign in with <FontAwesomeIcon icon={faXTwitter} /></Button>
      </a>
    );
  }
  return children;
}
