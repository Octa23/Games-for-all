import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GameInfo from "../../components/GameInfo";
import { StyledList } from "../../components/GameList";
import { SetFavorites } from "../../hooks/initFavorites";
import { Games } from "../../types";
const Favorites = () => {
  const { Favorites } = useSelector((state: any) => state.favorites);
  SetFavorites();

  return (
    <>
      <StyledMain>
        <h1>Favorite list</h1>
        <StyledList>
          {Favorites.length ? (
            Favorites.map((game: Games) => (
              <GameInfo key={game.id} game={game} />
            ))
          ) : (
            <h1>No favorites</h1>
          )}
        </StyledList>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  color: #f4f4f4;
  padding: 0;
  @media (min-width: 1076px) {
    flex-direction: row;
    padding: 0 30px;
  }
`;

export default Favorites;
