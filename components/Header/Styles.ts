import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: #121212;
  padding:0 10px;
  color: #f4f4f4;
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f4;
  `

export const StyledLogoContainer = styled.div`
  cursor: pointer;
    display: flex;
    align-items: center;
    & > img{width: 100px;}
    & > h1{
    width:min-content;
    font-size:20px;
    line-height:20px}
    `
export const StyledLink = styled.a`
  font-size: 1.25rem;
  `