import { useGetGames } from '../../hooks/useGetGames';
import { SearchBar, StyledList, StyledMain } from './Styles';
import Pagination from "../Pagination"
import Categories from "../Categories"
import GameInfo from "../GameInfo"
import SortBy from "../SortBy"
interface Props {
  category?: string;
}

const index = ({ category }: Props) => {
  const { gamesOnScreen, page, loading, handlePage, lastpage, handleSort } = useGetGames(category)
  return (
    <>
      <SearchBar>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </SearchBar>
      <SortBy handleSort={handleSort} />
      <StyledMain>
        {loading ? <span >Loading...</span> :
          gamesOnScreen && <StyledList>
            {gamesOnScreen.map(game => <GameInfo key={game.id} game={game} />)}
          </StyledList>}
        <Categories />
      </StyledMain>
      <Pagination page={page} handlePage={handlePage} lastpage={lastpage} />
    </>
  )
}

export default index