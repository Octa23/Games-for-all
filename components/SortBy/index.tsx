import React from "react";
import styled from "styled-components";

interface Props {
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sort: string;
  category: string | undefined;
}

const index = ({ handleSort, sort, category }: Props) => {
  return (
    <SortContainer>
      <h3>
        {(category?.charAt(0).toUpperCase() as string) + category?.slice(1) ||
          "All"}
      </h3>
      <p>
        Sort by:
        <select value={sort} onChange={handleSort} name="sort-type">
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="releasedate">Release date</option>
        </select>
      </p>
    </SortContainer>
  );
};

const SortContainer = styled.div`
  display: flex;
  align-items: baseline;
  color: #f4f4f4;
  font-size: 1.5rem;
  padding-left: 20px;
  & > h3 {
    margin: 0;
    padding: 0 10px;
    border-right: 2px solid #f4f4f487;
    font-weight: 900;
    text-decoration: underline;
  }
  & > p {
    margin: 10px;
  }
  & select {
    margin-left: 10px;
    background: #121212e0;
    color: #f4f4f4;
    font-size: 1.5rem;
    border-radius: 5px;
    border: 1px solid #ea1f2e;
    outline: none;
  }
`;

export default index;
