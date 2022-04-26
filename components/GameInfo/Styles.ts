import styled, { keyframes } from "styled-components"

export const StyledFavorite = styled.button`
visibility: hidden;
position: absolute;
display: flex;
align-items: center;
padding: 5px;
border-radius: 999px;
top: 10px;
right: 10px;
background-color: transparent;
border: none;
font-size: 24px;
color: red;
z-index: 2;
`
export const StyledExtraInfo = styled.div`
display: none;
& > p{
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}`
const FadeIn = keyframes` 
from {
opacity: 0;
}
to {
opacity: 1;
}
`
export const StyledMoreInfo = styled.div`
width: 100%;
height: 100%;
`
export const StyledListItem = styled.li`
@media (min-width: 1076px) {
&:hover{
${StyledMoreInfo}{
position: absolute;
padding: 10px;
animation: ${FadeIn} 0.5s ease-in-out;
overflow: hidden;}
${StyledExtraInfo}{
display: flex;
animation: ${FadeIn} 0.5s ease-in-out;
flex-direction: column;
font-size: 1.25rem;}
${StyledFavorite}{
animation: ${FadeIn} 0.5s ease-in-out;
visibility: visible;}
& img{ 
opacity: 0.05;
transition: opacity .5s ease-in-out; 
}
}}
`

export const StyledGameInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
position: relative;
bottom: 0;
& a{
flex-shrink: 0;
font-weight: 700;
padding: 5px 10px;
background-color: #ea1f2e;
border-radius: 5px;
transition: .5s;
&:hover{
transform: scale(1.1);
}
}
`
export const StyledImageContainer = styled.div`
position: relative;
& img{
width: 100%;
object-fit: cover;
border-radius: 5px;
}
`
