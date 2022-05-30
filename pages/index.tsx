import type { NextPage } from "next";
import { useState } from "react";
import GameList from "../components/GameList";
import NavBar from "../components/NavBar";
import { SetFavorites } from "../hooks/initFavorites";

const Home: NextPage = () => {
  const [filter, setFilter] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter(e.currentTarget.search.value);
  };

  SetFavorites();

  return (
    <div>
      <NavBar handleSearch={handleSearch} />
      <GameList filter={filter} />
    </div>
  );
};

export default Home;
