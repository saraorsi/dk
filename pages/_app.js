import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle/'


export default function MyApp({ Component, pageProps, stars}) {
  console.log(stars)
 return (
    <>
      <Head>
          <title>Doc's Kingdom</title>
          <meta key="robots" name="robots" content="noindex,follow" />
      </Head>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps}/>
      </ThemeProvider>
    </>
  )
}



