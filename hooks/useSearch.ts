import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { fetchGames } from "../services/fetchGames";
import { Games } from "../types";

const useSearch = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Games[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGames({ category: undefined }).then(setGames);
  }, []);

  const debouncedSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, 1500);

  useEffect(() => {
    if (search.length > 0) {
      const results: Games[] = games.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase())
      );
      setResults(results.slice(0, 3));
    } else {
      setResults([]);
    }
    setLoading(false);
  }, [search]);

  return {
    debouncedSearch,
    results,
    setResults,
    loading,
    setLoading,
  };
};

export default useSearch;
