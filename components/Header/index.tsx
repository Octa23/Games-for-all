import Link from "next/link";
import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <StyledHeader>
      <Link href={"/"}>
        <StyledLogoContainer>
          <img src="/logo.png" alt="logo" />
          <h1>Games for all</h1>
        </StyledLogoContainer>
      </Link>
      <Link href={"/favorites"}>
        <StyledLink>Favorites</StyledLink>
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #121212;
  padding: 0 10px;
  color: #f4f4f4;
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
`;

const StyledLogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  & > img {
    width: 100px;
  }
  & > h1 {
    width: min-content;
    font-size: 20px;
    line-height: 20px;
  }
`;
const StyledLink = styled.a`
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default index;
