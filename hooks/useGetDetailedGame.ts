import { useEffect, useState } from "react";
import { DetailedGame } from "../types";
import { fetchGames } from "../services/fetchGames";

export const useGetDetailedGame = (gameId: string) => {
  const [gameInfo, setGameInfo] = useState<DetailedGame>({} as DetailedGame);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    gameId &&
      fetchGames({ gameId })
        .then(setGameInfo)
        .then(() => setLoading(false))
        .catch((e) => {
          setLoading(false);
        });
  }, [gameId]);

  return { gameInfo, loading };
};
