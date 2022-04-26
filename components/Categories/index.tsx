import Link from 'next/link'
import React from 'react'
import { StyledAside } from './Styles'
import {categories} from "./HardcodedCategories"


const index = () => {
  return (
    <StyledAside>
    <h3>Categories</h3>
    <ul>
      {categories.map(category => <li key={category}>
          <Link href={`/categories/${category}`}>
            <a>{category}</a>
          </Link>
        </li>)}
    </ul>
  </StyledAside>
  )
}

export default index