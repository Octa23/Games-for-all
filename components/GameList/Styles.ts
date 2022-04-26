import styled from "styled-components"


export const StyledMain = styled.main`
  display: flex;
  color: #f4f4f4;
  padding:0 30px ;
@media (max-width: 1076px) {
padding: 0};
  & > span{
    color:#f4f4f4;
    font-weight: 700;
    font-size:5rem;
    flex:1;
    text-align:center
  }
`
export const StyledList = styled.ul`
flex: 1;
display: grid;
justify-content: center;
@media (max-width: 1076px) {
grid-template-columns: repeat(2, minmax(200px, 365px));}
grid-template-columns: repeat(auto-fit, 365px);
gap: 20px;
padding:0 10px;
& > li{
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  & h2 {
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }}
`

export const SearchBar = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #121212;
  & input{
    color: #f4f4f4;
    background: transparent;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    padding-left: 10px;
    font-size: 1.25rem;
      }
      & button{
        color: #f4f4f4;
        width: 100px;
        height: 30px;
        font-size: 1.25rem;
        border-radius: 5px;
        border: 1px solid #f4f4f4;
        background-color: transparent;
        &:hover{
          background-color: #121212;
          }
          }
          `
  export const StyledLink = styled.a`
  font-size: 1.25rem;
  `
