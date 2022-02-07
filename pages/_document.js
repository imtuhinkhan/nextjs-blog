import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
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