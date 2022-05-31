import React, { useState } from "react";
import Link from "next/link";
import type { DetailedGame } from "../../types";
import styled from "styled-components";

type Props = {
  gameInfo: DetailedGame;
};

const index = ({ gameInfo }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const { description } = gameInfo;
  return (
    <StyledArticle>
      <h3>{gameInfo.short_description}</h3>
      <p>
        Genero:{" "}
        <Link href={`/categories/${gameInfo.genre}`}>
          <a>{gameInfo.genre}</a>
        </Link>
      </p>
      {description.length < 1000 ? (
        <p>{description}</p>
      ) : !showMore ? (
        <>
          <p>{description.substring(0, 997)}...</p>
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            Show more
          </button>
        </>
      ) : (
        <>
          <p>{description}</p>
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            Show less
          </button>
        </>
      )}
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  & h3,
  p {
    line-height: 1.3rem;
  }
  & h3 {
    margin: 10px 0 0 0;
  }
  & a {
    font-weight: 700;
    text-decoration: underline;
  }
  & > button {
    transition: transform 0.5s;
    color: #f4f4f4;
    font-size: 1.25rem;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    background-color: transparent;
    flex-shrink: 0;
    cursor: pointer;
    margin-bottom: 1.5rem;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
`;

export default index;
