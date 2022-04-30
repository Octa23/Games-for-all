import '../styles/globals.css'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <SearchBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
