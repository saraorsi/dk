import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle/'
import { EdicoesProvider } from '../src/context/EdicoesContext'

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
        <EdicoesProvider stars={stars}>
        <Component {...pageProps}/>
        </EdicoesProvider>
      </ThemeProvider>
    </>
  )
}



MyApp.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return {  props: {
      stars: json 
    }, }
}