import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle/'


export default function MyApp({ Component, pageProps}) {

 return (
    <>
      <Head>
          <title>Doc's Kingdom</title>
          <meta key="robots" name="robots" content="noindex,follow" />
          <link rel="preload" as="font" href="/fonts/GT-Alpina-Fine-Condensed-Medium.woff" type="font/woff" crossorigin="anonymous" />
          <link rel="preload" as="font" href="/fonts/GT-Alpina-Fine-Condensed-Medium.woff2" type="font/woff2" crossorigin="anonymous" />
      </Head>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps}/>
      </ThemeProvider>
    </>
  )
}



