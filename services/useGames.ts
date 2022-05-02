interface Props {
  category?: string
  gameId?: string
}

const useGames = ({ category, gameId }: Props) => {
  let baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api/game"
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'b6a51e4d4cmsh6c2bcaf55b1647ep19eb97jsn0d8896c3b30d'
    }
  };

  category ? baseUrl += `s?category=${category}`
    : gameId ? baseUrl += `?id=${gameId}`
      : baseUrl += "s"

  
  return fetch(baseUrl, options)
    .then(response => response.json())
    .then(response => response)
}


export default useGames