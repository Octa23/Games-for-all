import { useEffect, useState } from 'react'
import { DetailedGame } from '../types';
import useGames from '../services/useGames';

export const useGetDetailedGame = (gameId: string) => {
  const [gameInfo, setGameInfo] = useState<DetailedGame>({} as DetailedGame)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    gameId && useGames({ gameId })
      .then(setGameInfo)
      .then(() => setLoading(false))
  }, [gameId])

  return { gameInfo, loading }

}

