import  { useEffect, useState } from 'react'
import { Games } from '../types';

type sort = "default" | "name" | "releasedate" 

const getAllGames = (category: string | undefined) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'b6a51e4d4cmsh6c2bcaf55b1647ep19eb97jsn0d8896c3b30d'
    }
  };
  
  const url = category ? `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`
  : `https://free-to-play-games-database.p.rapidapi.com/api/games`
  return fetch(url, options)
  .then(response => response.json())
  .then(response => response)
}

export const useGetGames = (category:string | undefined) => {
  const maxGamesPerPage = 36
  const [games, setGames] = useState<Array<Games>>([])
  const [sort, setSort] = useState<sort>("default")
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const handlePage = (prop: "back" | "next") => {
    setPage(prev => prev + ( prop === "back" ? - 1 : + 1))
    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }

  useEffect(() => {
    setLoading(true)
    getAllGames(category)
    .then(setGames)
    .then(() => setLoading(false))
    setPage(1)
  }, [category])

  let sortedGames: Games[] = []
  
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value   as sort)
  }

    if (sort === "name") {
      sortedGames =  [...games].sort((a, b) => a.title.localeCompare(b.title))
    }
    if (sort === "releasedate") {
      sortedGames =  [...games].sort((a, b) => a.release_date < b.release_date ? 1 : -1)
    }
    if (sort === "default") {
      sortedGames = [...games]
    }
  
  const gamesOnScreen = sortedGames?.slice((page - 1) * maxGamesPerPage, page * maxGamesPerPage)
  const lastpage = Math.ceil(sortedGames?.length / maxGamesPerPage)
  
  return { gamesOnScreen, page, loading, handlePage, lastpage,handleSort }

}
