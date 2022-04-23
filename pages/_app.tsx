import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import GameList from '../components/GameList'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <Component {...pageProps} />
      </Header>
      <GameList />
      </>
  )
}

export default MyApp
