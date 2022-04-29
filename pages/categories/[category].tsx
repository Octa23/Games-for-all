import { useRouter } from 'next/router'
import React from 'react'
import GameList from "../../components/GameList"

const index = () => {
  const router = useRouter()
  const category: string = (router.query.category) as string
  return (
    <GameList category={category} />
  )
}

export default index