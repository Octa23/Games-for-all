import { useEffect, useState } from 'react'
import useGames from '../services/useGames';
import { Games } from '../types';

type sort = "default" | "name" | "releasedate"

export const useGetGames = (category: string | undefined) => {
  const maxGamesPerPage = 36
  const [games, setGames] = useState<Array<Games>>([])
  const [sort, setSort] = useState<sort>("default")
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)

  const handlePage = (prop: "back" | "next") => {
    setPage(prev => prev + (prop === "back" ? - 1 : + 1))
    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }

  useEffect(() => {
    setLoading(true)
    useGames({ category })
      .then(setGames).
      then(() => {
        setPage(1)
        setLoading(false)
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

  return { gamesOnScreen, page, loading, handlePage, lastpage, handleSort }

}
