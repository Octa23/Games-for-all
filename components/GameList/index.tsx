import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Games {
id: number
title: string
thumbnail: string
short_description: string
game_url: string
genre: string
platform: string
publisher: string
developer: string
release_date: string
}
const getGames = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'b6a51e4d4cmsh6c2bcaf55b1647ep19eb97jsn0d8896c3b30d'
    }
  };
  return fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => console.error(err));
  
}



const index = () => {
  const [games, setGames] = useState<Array<Games>>([])
  const categories : Array<string> = []
  useEffect(() => {
    getGames().then(setGames)
  }, [])
  
  games?.map(game => {
    if (!categories.includes(game.genre)) {
      categories.push(game.genre)
    }
  })
  console.log(categories)

  
  return (
    <StyledMain>
      {games && <StyledList>
        {games.map(game => <li key={game.id}>
          <img src={game.thumbnail} />
          <h2>{game.title}</h2>
      </li>)}
      </StyledList>}
      <StyledAside>
        <h3>Filtros</h3>
        <ul>
          {categories.map(category => <li key={category}>
            <Link href={`/categories/${category}`}>
              <a>{category}</a>
            </Link>
            </li>)}
        </ul>
      </StyledAside>
    </StyledMain>
  )
}
const StyledMain = styled.main`

  display: flex;
  color: #f4f4f4;
  padding:0 100px ;
`
const StyledList = styled.ul`
flex: 1;
display: grid;
align-items: center;
justify-content: center;
grid-template-columns: repeat(auto-fit, minmax(200px, 230px));
gap: 20px;
& > li{
  display: flex;
  flex-direction: column;
  height: 400px;
  cursor: pointer;

  & > img{
    position: relative;
    flex: 1;
    border-radius: 5px;
    object-position: center;
  object-fit: cover;
&:hover{
  opacity: 0.5;
}
}
  & > h2 {text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }}
`
const StyledAside = styled.aside`
justify-self: flex-end;

flex-basis: 200px;
font-size: 1.5rem;
& h3{
    position: sticky;
    top: 10px;
}
  & ul{display: flex;
    position: sticky;
    top: 100px;
    font-size: 1.25rem;
    flex-direction: column;}`

export default index