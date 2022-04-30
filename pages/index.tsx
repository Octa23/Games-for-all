import type { NextPage } from 'next'
import Head from 'next/head'
import GameList from '../components/GameList'
import Spinner from '../components/Spinner'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Games for all</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <GameList />
    </div>
  )
}

export default Home
