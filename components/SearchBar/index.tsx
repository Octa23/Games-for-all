import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    <SearchBar>
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </SearchBar>
  )
}

const SearchBar = styled.form`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: sticky;
  top: -1px;  //if top = 0 there is 1 px above the search bar (window bug on mobile)
  z-index: 1;
  background-color: #121212;
  & input{
    background: transparent;
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

export default index