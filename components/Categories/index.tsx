import Link from 'next/link'
import React from 'react'
import { categories } from "./HardcodedCategories"
import styled from 'styled-components'


const index = () => {
  return (
    <StyledAside>
      <div>
        <h3>Categories</h3>
        <ul>
          {categories.map(category => <li key={category}>
            <Link href={`/categories/${category}`}>
              <a>{category}</a>
            </Link>
          </li>)}
        </ul>
      </div>
    </StyledAside>
  )
}

const StyledAside = styled.aside`
justify-self: flex-end;
flex-basis: 230px;
font-size: 1.5rem;
& > div{
  position: sticky;
  top:80px;
  & > h3{margin-top:0}
}
  & ul{display: flex;
    padding: 0;
    flex-wrap: wrap;
    background-color: #4b4b4b22;
    border-radius: 5px;
    padding: 10px;
    justify-content: space-between;
    gap: 5px 0px;
    font-size: 1.25rem;
    & li{padding:3px 5px;
      &:hover{
        background-color: #4b4b4b;}}

  }
  @media (max-width: 1076px) {
    display: none;
  }`

export default index