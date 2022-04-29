import React from 'react'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import { StyledButton, StyledDiv } from './Styles';

interface Props {
  page: number
  lastpage: number
  handlePage: (prop: "back" | "next") => void
}

const index = ({ page, handlePage, lastpage }: Props) => {
  return (
    <StyledDiv>
      <StyledButton onClick={() => handlePage("back")} disabled={page === 1}><BsFillArrowLeftSquareFill /></StyledButton>
      <span>Page {page} of {lastpage}</span>
      <StyledButton onClick={() => handlePage("next")} disabled={page === lastpage}><BsFillArrowRightSquareFill /></StyledButton>
    </StyledDiv>
  )
}

export default index