import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
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
      <SearchBar>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </SearchBar>
      <Link href={"/favorites"}><StyledLink>Favorites</StyledLink></Link>
      </StyledHeader>
      {children}
      </>
  )
}

const StyledHeader = styled.header`
  background-color: #121212;
  padding:0 20px;
  color: #f4f4f4;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
  `

const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center;
    & > img{width: 100px;}
    & > h1{
    width:min-content;
    font-size:20px;
    line-height:20px}
    `

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  & input{
    color: #f4f4f4;
    background: transparent;
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    padding-left: 10px;
    font-size: 1.25rem;
      }
      & button{
        color: #f4f4f4;
        width: 100px;
        height: 30px;
        font-size: 1.25rem;
        border-radius: 5px;
        border: 1px solid #f4f4f4;
        background-color: transparent;
        &:hover{
          background-color: #121212;
          }
          }
          `
  const StyledLink = styled.a`
  font-size: 1.25rem;
  `


export default index