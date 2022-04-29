import { useEffect, useState } from 'react'
import { DetailedGame } from '../types';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': 'b6a51e4d4cmsh6c2bcaf55b1647ep19eb97jsn0d8896c3b30d'
  }
};

export const useGetDetailedGame = (gameId: string) => {
  const [gameInfo, setGameInfo] = useState<DetailedGame>({} as DetailedGame)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    gameId && fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
      .then(response => response.json())
      .then(response => {
        setGameInfo(response)
        setLoading(false)
      })
  }, [gameId])

  return { gameInfo, loading }

}

