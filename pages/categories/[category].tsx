import { useRouter } from 'next/router'
import React from 'react'
import GameList from "../../components/GameList"
import NavBar from "../../components/NavBar"



const index = () => {
  const router = useRouter()
  const category: string = (router.query.category) as string
  return (<>
    <NavBar />
    {category && <GameList category={category} />}
  </>
  )
}

export default index