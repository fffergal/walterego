import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async defer data-domain="walterego.golf" src="https://plausible.io/js/plausible.js" />
          <script>
            window.plausible = window.plausible || function()
            {'{'}
            (window.plausible.q = window.plausible.q || []).push(arguments)
            {'}'}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
