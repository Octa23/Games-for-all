import Link from 'next/link'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useSearch from '../../hooks/useSearch'
interface Props {
  handleBackPage?: (e: React.MouseEvent<HTMLButtonElement>) => void
  show: boolean
}


const index = ({ handleBackPage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { debouncedSearch, results, setResults } = useSearch()
  const [show, setShow] = useState(false)
  const handleClick = () => {
    if (inputRef.current) { inputRef.current.value = "" }
    setResults([])
  }

  const handlesearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e)
  }

  console.log(show)

  return (
    <NavBar onMouseLeave={() => { setShow(false) }}>
      <div>
        {handleBackPage && <button onClick={handleBackPage}>{`< Go back`}</button>}
        <SearchBar >
          <input ref={inputRef} onChange={(e) => { handlesearch(e) }} type="text" placeholder="Search" />
          <button>Search</button>
        </SearchBar>
        {results.length ? <StyledResults onClick={() => { setShow(true) }}>{results.length} resultados</StyledResults> : null}
      </div>
      {results.length > 0 && inputRef.current?.value && (
        <StyledResultList show={show}>
          {results.map((result) =>
            <Link key={result.id} href={`/game/${result.id}`}>
              <a>
                <li onClick={handleClick} >
                  <img src={result.thumbnail} alt={result.title} />
                  <p>{result.title}</p>
                </li>
              </a>
            </Link>)}
        </StyledResultList>
      )}
    </NavBar>
  )
}

const StyledResults = styled.p`
margin: 0;
cursor: pointer;
`

const StyledResultList = styled.ul <Props>`
margin: 0;
display: none;
padding: 10px;
background-color: #000000ba;
align-items: center;
justify-content: center;
transition: opacity 0.5s ease-in-out;
gap: 5px;
max-width: 660px;
border-radius: 5px;
& li {
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & p {
    margin: 0;
    line-height: 1;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  & img{
    width: 100%;
  }}
  ${props => props.show && `
  display: flex;
`}
`

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  font-size: 1.25rem;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  position: sticky;
  top: -1px;  //if top = 0 there is 1 px above the search bar (window bug on mobile)
  z-index: 2;
  background-color: #121212;
  & > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  & button, input {
  transition: transform .5s;
  color: #f4f4f4;
  font-size: 1.25rem;
  border-radius: 5px;
  border: 1px solid #f4f4f4;
  background-color: transparent;
  flex-shrink: 0;}
  & input{flex-shrink: 1;
    width: 100%;
  padding-left: 10px;
  }
  & button{cursor: pointer;
  &:hover{transform: scale(1.1);
  transition: transform .5s;}}
`

const SearchBar = styled.form`
display: flex;
gap: 10px;
`

export default index