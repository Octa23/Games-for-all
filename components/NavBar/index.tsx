import Link from "next/link";
import React from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import useSearch from "../../hooks/useSearch";
import Spinner from "../Spinner";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  handleBackPage?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  show?: boolean;
  handleSearch?: any;
  handleClear?: any;
}

const Nav = ({ handleSearch, handleBackPage }: Props) => {
  const { debouncedSearch, results, loading, setLoading } = useSearch();
  const { refContainer, show, setShow } = useModal();
  return (
    <NavBar ref={refContainer}>
      <div>
        {handleBackPage && (
          <button onClick={handleBackPage}>{`< Go back`}</button>
        )}
        <SearchBar
          onSubmit={
            handleSearch
              ? handleSearch
              : (e) => {
                  e.preventDefault();
                }
          }
        >
          <input
            autoComplete="off"
            name="search"
            onFocus={() => setShow(true)}
            onChange={(e) => {
              setLoading(true);
              debouncedSearch(e);
            }}
            type="text"
            placeholder="Search"
          />
          {handleSearch && <button>Search</button>}
        </SearchBar>
        {loading ? (
          <Spinner size="30px" />
        ) : results.length ? (
          <StyledResults
            onClick={() => {
              !show && setShow(true);
            }}
          >
            {results.length} resultados
          </StyledResults>
        ) : null}
      </div>
      <AnimatePresence>
        {!loading && results.length > 0 && show && (
          <StyledResultList>
            {results.map((result) => (
              <Link key={result.id} href={`/game/${result.id}`}>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img src={result.thumbnail} alt={result.title} />
                  <p>{result.title}</p>
                </motion.li>
              </Link>
            ))}
          </StyledResultList>
        )}
      </AnimatePresence>
    </NavBar>
  );
};

const StyledResults = styled.p`
  margin: 0;
  cursor: pointer;
`;

const StyledResultList = styled.ul`
  margin: 0;
  display: flex;
  padding: 10px;
  background-color: #000000ba;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
  gap: 5px;
  max-width: 660px;
  border-radius: 5px;
  & li {
    cursor: pointer;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    &:hover {
      & img {
        opacity: 0.6;
      }
    }
    & p {
      margin: 0;
      line-height: 1;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    & img {
      width: 100%;
      border-radius: 5px;
      aspect-ratio: 16/9;
    }
  }
`;

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
  top: -1px; //if top = 0 there is 1 px above the search bar (window bug on mobile)
  z-index: 2;
  background-color: #121212;
  & > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  & button,
  input {
    transition: transform 0.5s;
    color: #f4f4f4;
    font-size: 1.25rem;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    background-color: transparent;
    flex-shrink: 0;
  }
  & input {
    flex-shrink: 1;
    width: 100%;
    padding-left: 10px;
  }
  & button {
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
`;

const SearchBar = styled.form`
  display: flex;
  gap: 10px;
`;

export default Nav;
