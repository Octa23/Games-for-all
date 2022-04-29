import React from 'react'
import Link from 'next/link'
import { BsHeart } from "react-icons/bs";
import { StyledExtraInfo, StyledFavorite, StyledGameInfo, StyledImageContainer, StyledListItem, StyledMoreInfo } from './Styles';
import { Games } from '../../types';
import Image from 'next/image';

interface Props {
  game: Games
}


const index = ({ game }: Props) => {
  console.log(game.thumbnail)
  return (
    <Link href={`/game/${game.id}`}>
      <StyledListItem>
        <StyledImageContainer>
          <StyledFavorite><BsHeart /></StyledFavorite>
          <Image quality={"70%"} width={2250} height={1390} layout="responsive" src={game.thumbnail} />
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

export default index