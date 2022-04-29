import React from 'react'
import { SortContainer } from './Style'

interface Props {
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const index = ({ handleSort }: Props) => {
  return (
    <SortContainer>
      <p>
        Sort by:
        <select onChange={handleSort} name="sort-type">
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="releasedate">Release date</option>
        </select>
      </p>
    </SortContainer>
  )
}

export default index