import Link from 'next/link'
import React from 'react'
import {StyledHeader, StyledLink, StyledLogoContainer } from './Styles';

type Props = { children: React.ReactNode };

const index: React.FC<Props> = ({ children }) => {
  return (
    <>
    <StyledHeader>
      <Link href={"/"}>
      <StyledLogoContainer>
        <img src="/logo.png" alt="logo" />
        <h1>Games for all</h1>
        </StyledLogoContainer>
        </Link>
        <Link href={"/favorites"}>
          <StyledLink>Favorites</StyledLink>
        </Link>
      </StyledHeader>
      {children}
      </>
  )
}

export default index