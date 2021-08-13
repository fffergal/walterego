import Head from 'next/head';

import MainTemplate from '../components/main-template';

export default function About() {
  return (
    <MainTemplate>
      <Head>
        <title>Walter Ego—About</title>
      </Head>
      <h1>Who’s reponsible for all this?</h1>
      <p>
        Fergal Armstrong. @fffergal on Twitter and GitHub. That’s right, I’m a
        white man. If the whole idea of Walter Ego makes you feel defensive,
        please don’t take it out on women or anyone else.
      </p>
      <h2>What’s with the name?</h2>
      <p>
        It sounds a bit like alter ego. You know, like a Ron de plume, a
        male-ius, a Joe-sona.
      </p>
      <h2>Why would someone want this?</h2>
      <p>
        Some people say dismissive, mean, forward, and unnecessary things that
        they wouldn’t say to an old white man. If these people think you’re an
        old white man at first glance, you won’t have to deal with them in your
        timeline.
      </p>
      <h2>Is this supposed to be funny?</h2>
      <p>
        Yes, it is supposed to be a way of coping with a serious problem with
        humour. Maybe it actually works as well.
      </p>
      <p>
        Online harassment is a serious problem, and I have the luxury of being
        in a privileged enough position to make light of it. I don’t want to
        suggest this isn’t a real problem by making a joke.
      </p>
      <p>
        Walter Ego is a bad idea. It is
        {' '}
        <em>not</em>
        {' '}
        your responsibility to change so you can avoid harassment.
      </p>
      <h2>Where do the profile images come from?</h2>
      <p>
        They are made with machine learning from
        {' '}
        <a
          href="https://thispersondoesnotexist.com"
        >
          This Person Does Not
          Exist
        </a>
        . I refresh the page and save any old white men I see.
      </p>
      <h2>Do you think this is ageist?</h2>
      <p>
        It’s possible. We should avoid stereotypes about older people. If you
        look around at business and political leaders, a lot of them aren’t
        just white men, they are old men. I consider this “punching up” to
        people like that.
      </p>
    </MainTemplate>
  );
}
