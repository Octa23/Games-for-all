import '../styles/globals.css'
import { AppProps } from 'next/app'
import Header from '../components/Header'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <Component {...pageProps} />
      </Header>
    </>
  )
}

export default MyApp
