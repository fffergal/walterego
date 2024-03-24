import Image from 'next/image';
import useSWR from 'swr';

import fetcher from './_fetcher';

export default function TwitterCheck({ children }) {
  const { data, error } = useSWR('/api/v1/twittercheck', fetcher);
  if (error) return <span>Error checking if you are signed in with Twitter.</span>;
  if (!data) return <span>Checking if you are signed in with Twitter…</span>;
  if (!data.signedIn) {
    return (
      <a href="/api/v1/twitterlink">
        <Image src="/sign-in-with-twitter.png" width="158" height="28" alt="Sign in with Twitter" />
      </a>
    );
  }
  return children;
}
