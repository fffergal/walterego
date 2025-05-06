import MainTemplate from '../components/main-template';

export default function Privacy() {
  return (
    <MainTemplate>
      <h1>Privacy</h1>
      <p>
        In Short, Walter Ego only does what it says it will do, and I only
        collect the data needed to do that, and only for as long as it’s
        needed.
      </p>
      <p>
        You sign in with X. Walter Ego stores a “token” as a cookie. The “token”
        gives access to your X account. Walter Ego uses the token to change your
        X profile and doesn’t use it to collect any data.
      </p>
      <p>
        Walter Ego uses industry best practice to keep data safe. Any further
        details would be jargon, but I’m happy to talk about it if you like and
        you can see how the app is made on
        {' '}
        <a href="https://github.com/fffergal/walterego">GitHub</a>
        .
      </p>
      <p>
        You can delete any data Walter Ego has by clearing your cookies, not
        visiting the website for 31 days, or going to your X account settings
        and revoking access.
      </p>
      <p>
        There are analytics so I can see how popular this is, but they are from
        {' '}
        <a href="https://plausible.io/privacy-focused-web-analytics">
          Plausible
        </a>
        {' '}
        and don’t use cookies, don’t track you across sites, and don’t identify
        you.
      </p>
      <p>You can contact me on X with any questions about your data.</p>
    </MainTemplate>
  );
}
