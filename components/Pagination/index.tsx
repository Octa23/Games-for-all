import React from 'react'
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import styled from 'styled-components';
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

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
font-size: 30px;
color: #f4f4f4;
gap: 20px;
`

export const StyledButton = styled.button` 
  background-color: #121212;
  display: flex;
  align-items: flex-start;
  border: none;
  font-size: 30px;
  color: #f4f4f4;
  cursor: pointer;
  ${props => props.disabled && `
    cursor: unset;
  & path{
  color: #ffffff45;}
`}
  `

export default index