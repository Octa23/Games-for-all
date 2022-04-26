import styled from "styled-components";

export const StyledAside = styled.aside`
justify-self: flex-end;
flex-basis: 230px;
font-size: 1.5rem;
& h3{
    position: sticky;
    top: 60px;
}
  & ul{display: flex;
    flex-wrap: wrap;
    gap: 11px;
    position: sticky;
    top: 120px;
    font-size: 1.25rem;
  }
  @media (max-width: 1076px) {
    display: none;
    
  }`