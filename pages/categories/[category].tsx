import { useRouter } from "next/router";
import React, { useState } from "react";
import GameList from "../../components/GameList";
import NavBar from "../../components/NavBar";
import { SetFavorites } from "../../hooks/initFavorites";

const index = () => {
  const router = useRouter();
  const category: string = router.query.category as string;
  SetFavorites();
  const [filter, setFilter] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter(e.currentTarget.search.value);
  };

  return (
    <>
      <NavBar handleSearch={handleSearch} />
      {category && <GameList category={category} filter={filter} />}
    </>
  );
};

export default index;
