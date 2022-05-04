import React from 'react'
import Link from 'next/link'
import { BsHeart } from "react-icons/bs";
import { Games } from '../../types';
import styled, { keyframes } from 'styled-components';
interface Props {
  game: Games
  page: number
  sort: "default" | "name" | "releasedate"
}

const index = ({ game, page, sort }: Props) => {

  const handleClick = () => {
    sessionStorage.setItem("page", String(page))
    sessionStorage.setItem("sort", String(sort))
  }
  const handleclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    console.log(game.title)
  }

  return (
    <Link href={`/game/${game.id}`}>
      <StyledListItem onClick={handleClick}>
        <StyledImageContainer>
          <StyledFavorite onClick={handleclick}><BsHeart /></StyledFavorite>
          <img alt={game.title + " image"} src={game.thumbnail} />
        </StyledImageContainer>
        <StyledMoreInfo>
          <h2>{game.title}</h2>
          <StyledExtraInfo>
            <p>{game.short_description}</p>
            <StyledGameInfo>
              <span>{game.publisher}</span>
              <a target={'_blank'} onClick={(e) => { e.stopPropagation() }} href={game.game_url}>Claim Now!</a>
            </StyledGameInfo>
          </StyledExtraInfo>
        </StyledMoreInfo>
      </StyledListItem>
    </Link>
  )
}
export default React.memo(index, (prev, next) => prev.game.id === next.game.id) //Si el id de las props actuales es igual al de las nuevas no se re-renderiza

const StyledFavorite = styled.button`
@media (min-width: 1076px) {
background-color: transparent;
visibility: hidden;}
z-index: 1;
position: absolute;
display: flex;
align-items: center;
padding: 5px;
border-radius: 999px;
top: 10px;
right: 10px;
border: none;
font-size: 24px;
background-color: #000000ba;
cursor: pointer;
& svg{
  color: red;
}
`
const StyledExtraInfo = styled.div`
display: none;
& > p{
overflow: hidden;
display: -webkit-box;
text-overflow: ellipsis;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}`
export const FadeIn = keyframes` 
from {
opacity: 0;
}
to {
opacity: 1;
}
`
const StyledMoreInfo = styled.div`
width: 100%;
height: 100%;
& > h2{
  width: 90%;
  text-overflow: ellipsis;}
`
const StyledListItem = styled.li`
&:hover{& img{opacity: 0.6;}}
@media (min-width: 1076px) {
&:hover{
${StyledMoreInfo}{
position: absolute;
padding: 10px;
animation: ${FadeIn} 0.5s ease-in-out;
overflow: hidden;}
${StyledExtraInfo}{
display: flex;
animation: ${FadeIn} 0.5s ease-in-out;
flex-direction: column;
font-size: 1.25rem;}
${StyledFavorite}{
animation: ${FadeIn} 0.5s ease-in-out;
visibility: visible;}
& img{ 
opacity: 0.05;
transition: opacity .5s ease-in-out; 
}
}}
`

const StyledGameInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
position: relative;
bottom: 0;
& a{
flex-shrink: 0;
font-weight: 700;
padding: 5px 10px;
background-color: #ea1f2e;
border-radius: 5px;
transition: .5s;
&:hover{
transform: scale(1.1);
}
}
`
const StyledImageContainer = styled.div`

position: relative;
& img{
background-color: #353535;
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 5px;
}
`

