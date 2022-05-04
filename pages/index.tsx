import type { NextPage } from 'next'
import GameList from '../components/GameList'
import NavBar from "../components/NavBar"

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <GameList />
    </div>
  )
}

export default Home
