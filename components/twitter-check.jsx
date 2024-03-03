import Image from 'next/image';
import useSWR from 'swr';

export default function TwitterCheck({ children }) {
  const { data, error } = useSWR('/api/v1/twittercheck');
  if (error) return <span>Error checking if you are signed in with Twitter.</span>;
  if (!data) return <span>Checking if you are signed in with Twitter…</span>;
  if (!data.signedIn) {
    return (
      <a href="/api/v1/twitterlink">
        <Image src="/sign-in-with-twitter.png" alt="Sign in with Twitter" />
      </a>
    );
  }
  return children;
}
