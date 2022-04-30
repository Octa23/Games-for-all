import React from 'react'
import Link from 'next/link'
import type { DetailedGame } from '../../types'
import styled from 'styled-components'

type Props = {
  gameInfo: DetailedGame
}

const index = ({ gameInfo }: Props) => {
  return (
    <StyledArticle>
      <h3>{gameInfo.short_description}</h3>
      <p>Genero: <Link href={`/categories/${gameInfo.genre}`}><a>{gameInfo.genre}</a></Link></p>
      <p>{gameInfo.description}</p>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
& h3 , p {line-height: 1.3rem;
}
& h3 {margin:10px 0 0 0}
& a {
  font-weight:700;
  text-decoration: underline;
  }
`

export default index