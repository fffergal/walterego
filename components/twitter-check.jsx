import useSWR from 'swr';

export default function TwitterCheck({ children }) {
  const { data, error } = useSWR('/api/v1/twittercheck');
  if (error) return <p>Error checking if you are signed in with Twitter.</p>;
  if (!data) return <p>Checking if you are signed in with Twitter…</p>;
  if (!data.signedIn) {
    return (
      <a href="/api/v1/twitterlink">
        <img src="/sign-in-with-twitter.png" alt="Sign in with Twitter" />
      </a>
    );
  }
  return <div>{children}</div>;
}
