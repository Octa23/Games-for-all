import { useRouter } from 'next/router'
import { useGetDetailedGame } from '../../hooks/useGetDetailedGame'
import styled from "styled-components"
import GameDetailedCard from '../../components/GameDetailedCard'
import Carousel from '../../components/Carousel'
import GameArticle from '../../components/GameArticle'
import GameSystemRequirements from '../../components/GameSystemRequirements'
import Spinner from "../../components/Spinner"

const index = () => {
  const router = useRouter()
  const gameId: string = (router.query.id) as string
  const { gameInfo, loading } = useGetDetailedGame(gameId)
  const { screenshots, minimum_system_requirements } = gameInfo
  console.log(gameInfo)
  return <div>
    {loading ? <Spinner/> :
      <StyledMain>
        <GameDetailedCard gameInfo={gameInfo} />
        <StyledMainDiv>
          <h1>{gameInfo.title}</h1>
          <Carousel screenshots={screenshots} />
          <GameArticle gameInfo={gameInfo} />
          <GameSystemRequirements minimum_system_requirements={minimum_system_requirements} />
        </StyledMainDiv>
      </StyledMain>}
  </div>
}

const StyledMain = styled.main`
position: relative;
margin-top: 80px;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 25px;
@media (min-width: 768px) {
gap: 35px;
flex-direction: row-reverse;}
@media (min-width: 1076px) {
padding:30px 60px 60px 60px ;}
font-size: 1.2rem;
`
const StyledMainDiv = styled.div`
max-width: 1024px;
& > h1{
  position: absolute;
  top:-75px;
}
& h3 {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
}
`

export default index
