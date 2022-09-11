import Header from "../components/Header";
import Head from 'next/head'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Calvary Temple Kenya</title>
      </Head>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
