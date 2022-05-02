import React from 'react'
import styled from 'styled-components'
import type { DetailedGame } from '../../types'

type Props = {
  gameInfo: DetailedGame
}

const index = ({ gameInfo }: Props) => {
  return (
    <StyledSticky>
      <div>
        <StyledImage alt={gameInfo.title + " image"} src={gameInfo.thumbnail} />
        <div>
          <StyledLink target={'_blank'} href={gameInfo.game_url}>Claim Now</StyledLink>
          <StyledButton>Add to favorites</StyledButton>
        </div>
        <StyledAditionallInfo>
          <StyledLi><p>Developer</p><span>{gameInfo.developer}</span></StyledLi>
          <StyledLi><p>Publisher</p><span>{gameInfo.publisher}</span></StyledLi>
          <StyledLi><p>Release Date</p><span>{gameInfo.release_date}</span></StyledLi>
          <StyledLi><p>Platform</p><span>{gameInfo.platform}</span></StyledLi>
        </StyledAditionallInfo>
      </div>
    </StyledSticky>
  )
}
const StyledImage = styled.img`
width: 100%;
border-radius: 5px;
`
const StyledSticky = styled.div`
min-width: 300px;
& > div {
  position: sticky;
  top: 80px;
}
`
const StyledLink = styled.a`
display: block;
position: relative;
text-align: center;
text-transform: uppercase;
font-weight: 700;
letter-spacing: 1px;
padding: 10px 0;
background-color: #ea1f2e;
border-radius: 5px;
transition: .5s;
&:after{
  content: "";
  top: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  opacity: 0;
}
&:hover{
  &:after{opacity: 0.1;}
}`

const StyledButton = styled(StyledLink)`
width: 100%;
cursor: pointer;
border: 1px solid #f4f4f4;
margin-top: 8px;
background: transparent;
`
const StyledAditionallInfo = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
margin: 0;
`
const StyledLi = styled.li`
display: flex;
padding: 10px 0;
border-bottom: 1px solid gray;
flex-direction: row;
justify-content: space-between;
& p {
  margin: 0;
  text-transform: capitalize;
}
`

export default index