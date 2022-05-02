import React from 'react'
import styled from 'styled-components'

interface Props {
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void
  sort: string
}

const index = ({ handleSort, sort }: Props) => {
  return (
    <SortContainer>
      <p>
        Sort by:
        <select value={sort} onChange={handleSort} name="sort-type">
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="releasedate">Release date</option>
        </select>
      </p>
    </SortContainer>
  )
}

const SortContainer = styled.div`
color: #f4f4f4;
font-size: 1.5rem;
padding-left: 20px;
& > p{
  margin: 10px ;
}
&  select{
margin-left: 10px;
background: #121212e0;
color: #f4f4f4;
font-size: 1.5rem;
border-radius: 5px;
border: 1px solid #ea1f2e;
outline: none;
}
`

export default index