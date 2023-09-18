import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="X3QON8SiCCReNP7-Pg-p2wXCLlM3Xvnq3bdYldCkVS8" />
        <meta name="description" content="iOS Conf SG 2024, 18-19 January 2024" />
        <meta property="og:title" content="iOS Conf SG 2024, 18-19 January 2024" />
        <meta property="og:description" content="The largest iOS developer conference in Southeast Asia. Tickets are available for a limited time!" />
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="iOS Conf SG"/>
        <meta property="og:url" content="https://iosconf.sg/"/>
        <meta property="og:image" content="https://iosconf.com/swiftup.png"/>
        <title>iOS Conf SG 2024</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
