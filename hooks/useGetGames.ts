import { useEffect, useState } from 'react'
import useGames from '../services/useGames';
import { Games } from '../types';

type sort = "default" | "name" | "releasedate"

export const useGetGames = (category: string | undefined) => {
  const maxGamesPerPage = 24
  const [games, setGames] = useState<Array<Games>>([])
  const [sort, setSort] = useState<sort>("default")
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)
  let rpage: number
  let rsort: sort

  const handlePage = (prop: "back" | "next") => {
    setPage(prop === "back" ? page - 1 : page + 1)
    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }

  useEffect(() => {
    console.log("llama")
    rpage = (sessionStorage.getItem("recover") && Number(sessionStorage.getItem("page"))) as number
    rsort = (sessionStorage.getItem("recover") && sessionStorage.getItem("sort") as sort) as sort
    setLoading(true)
    useGames({ category })
      .then(setGames).
      then(() => {
        setPage(rpage || 1)
        setSort(rsort || sort)
        setLoading(false)
        sessionStorage.removeItem("recover")
      })
  }, [category])

  let sortedGames: Games[] = []

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as sort)
  }

  sort === "name" ? sortedGames = [...games].sort((a, b) => a.title.localeCompare(b.title))
    : sort === "releasedate" ? sortedGames = [...games].sort((a, b) => a.release_date < b.release_date ? 1 : -1)
      : sortedGames = [...games]

  const gamesOnScreen = sortedGames?.slice((page - 1) * maxGamesPerPage, page * maxGamesPerPage)
  const lastpage = Math.ceil(sortedGames?.length / maxGamesPerPage)

  return { gamesOnScreen, page, loading, handlePage, lastpage, handleSort, sort }

}
