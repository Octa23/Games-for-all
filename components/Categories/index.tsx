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
}
  & ul{display: flex;
    flex-wrap: wrap;
    gap: 11px;
    font-size: 1.25rem;
  }
  @media (max-width: 1076px) {
    display: none;
  }`

export default index