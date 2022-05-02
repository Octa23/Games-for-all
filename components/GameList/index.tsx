import { useGetGames } from '../../hooks/useGetGames';
import Pagination from "../Pagination"
import Categories from "../Categories"
import GameInfo from "../GameInfo"
import SortBy from "../SortBy"
import styled from 'styled-components';
import Skeleton from "../Skeleton"
interface Props {
  category?: string;
}

const index = ({ category }: Props) => {
  const { gamesOnScreen, page, loading, handlePage, lastpage, handleSort, sort } = useGetGames(category)
  return (
    <>
      <SortBy handleSort={handleSort} sort={sort} />
      <StyledMain>
        <StyledList>
          {loading ? Array.from(new Array(12)).map((_, i) => <Skeleton key={i} />)
            : gamesOnScreen.map(game => <GameInfo key={game.id} game={game} page={page} sort={sort} />)}
        </StyledList>
        <Categories />
      </StyledMain>
      {page !== 0 && <Pagination page={page} handlePage={handlePage} lastpage={lastpage} />}
    </>
  )
}

const StyledMain = styled.main`
  display: flex;
  color: #f4f4f4;
  padding: 0;
  @media (min-width: 1076px) {
  padding:0 30px ;}
`
const StyledList = styled.ul`
flex: 1;
display: grid;
justify-content: center;
@media (max-width: 1076px) {
gap: 10px;
grid-template-columns: repeat(2, minmax(100px, 365px));}
grid-template-columns: repeat(auto-fit, 365px);
gap: 20px;
padding:0 10px;
& > li{
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  & h2 {
    margin: 0;
    margin-top: -5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }}
`

export default index