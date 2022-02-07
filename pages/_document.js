import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="format-detection" content="telephone=no"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <meta name="it-rating" content="it-rat-cd303c3f80473535b3c667d0d67a7a11" />
            <meta name="cmsmagazine" content="3f86e43372e678604d35804a67860df7" />
            <title>Benchy</title>
            <meta name='description' content="" />
            <meta name="keywords" content="" />
            <link rel="icon" type="image/x-icon" href="favicon.ico" />
            <link rel="stylesheet" type="text/css" href="/css/style.css" class="styles"/>
        </Head>
      <body class="loaded">
        <Main />
        <NextScript />
        
        <script src="/js/jquery-3.5.1.min.js"></script>      
        <script src="/js/components/slick.js" ></script>
        <script src="/js/custom.js" ></script>
      </body>
    </Html>
  )
}