import styled from "styled-components";

export const StyledDiv = styled.div`
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
  ${props => props.disabled &&`
  color: #ffffff45;
  cursor: unset;
`}
  `