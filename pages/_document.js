import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
				<NextScript />
				<noscript dangerouslySetInnerHTML={{
					__html: <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXCN43VT"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
				}} />
      </body>
    </Html>
  )
}
