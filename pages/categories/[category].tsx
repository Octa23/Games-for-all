import { useRouter } from 'next/router'
import React from 'react'
import GameList from "../../components/GameList"
import SearchBar from "../../components/SearchBar"



const index = () => {
  const router = useRouter()
  const category: string = (router.query.category) as string
  return (<>
    <SearchBar />
    {category && <GameList category={category} />}
  </>
  )
}

export default index