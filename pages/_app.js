import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="format-detection" content="telephone=no"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <meta name="it-rating" content="it-rat-cd303c3f80473535b3c667d0d67a7a11" />
            <meta name="cmsmagazine" content="3f86e43372e678604d35804a67860df7" />
            <meta name='description' content="" />
            <meta name="keywords" content="" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
