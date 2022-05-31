import { useRouter } from "next/router";
import { useGetDetailedGame } from "../../hooks/useGetDetailedGame";
import styled from "styled-components";
import GameDetailedCard from "../../components/GameDetailedCard";
import Carousel from "../../components/Carousel";
import GameArticle from "../../components/GameArticle";
import GameSystemRequirements from "../../components/GameSystemRequirements";
import Spinner from "../../components/Spinner";
import NavBar from "../../components/NavBar";
import React from "react";
import { SetFavorites } from "../../hooks/initFavorites";

const index = () => {
  const router = useRouter();
  const gameId: string = router.query.id as string;
  const { gameInfo, loading } = useGetDetailedGame(gameId);
  const { screenshots, minimum_system_requirements } = gameInfo;
  SetFavorites();

  const handleBackPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sessionStorage.setItem("recover", "true");
    router.back();
  };

  return (
    <StyledMainContainer>
      <NavBar handleBackPage={handleBackPage} />
      {loading ? (
        <Spinner />
      ) : (
        <StyledMain>
          {gameInfo.status_message ? (
            <h1>{gameInfo.status_message}</h1>
          ) : (
            <>
              <GameDetailedCard gameInfo={gameInfo} />
              <StyledMainDiv>
                <h1>{gameInfo.title}</h1>
                <Carousel screenshots={screenshots} title={gameInfo.title} />
                <GameArticle gameInfo={gameInfo} />
                <GameSystemRequirements
                  minimum_system_requirements={minimum_system_requirements}
                />
              </StyledMainDiv>
            </>
          )}
        </StyledMain>
      )}
    </StyledMainContainer>
  );
};
const StyledMainContainer = styled.main`
  padding: 0px 30px 30px 30px;
  @media (min-width: 1076px) {
    padding: 0px 60px 60px 60px;
  }
`;
const StyledMain = styled.main`
  position: relative;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  @media (min-width: 768px) {
    gap: 35px;
    flex-direction: row-reverse;
  }
  font-size: 1.2rem;
`;
const StyledMainDiv = styled.div`
  max-width: 1024px;
  & > h1 {
    position: absolute;
    top: -75px;
    line-height: 1;
  }
  & h3 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
  }
`;

export default index;
