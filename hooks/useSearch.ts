import { useEffect, useState } from 'react'
import debounce from "just-debounce-it";
import useGames from '../services/useGames';
import { Games } from '../types';
const useSearch = () => {
  const [games, setGames] = useState<Games[]>([])
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<Games[]>([])

  useEffect(() => { useGames({ category: undefined }).then(setGames) }, [])
  const debouncedSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, 1000);

  useEffect(() => {
    const results: Games[] = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
    setResults(results.slice(0, 3))
  }, [search])

  return ({ debouncedSearch, results, setResults }
  )
}

export default useSearch