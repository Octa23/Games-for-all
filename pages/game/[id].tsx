import { useRouter } from 'next/router'
import { useGetDetailedGame } from '../../hooks/useGetDetailedGame'




const index = () => {
  const router = useRouter()
  const gameId: string = (router.query.id) as string
  const { gameInfo, loading } = useGetDetailedGame(gameId)

  return <div>
    {loading ? <span>Loading...</span> :
      gameInfo.description}
  </div>
}

export default index