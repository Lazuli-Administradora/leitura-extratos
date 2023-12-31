import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme='mytheme' className='bg-base-200'>
      <Head>
        <title>Somador - Lazuli</title>
        <link rel="icon" href="/lazuli.ico" />
      </Head>
      <body style={{width:'100%', height:'100%'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
