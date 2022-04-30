import React from 'react'
import styled from 'styled-components'
import { GameRequirements } from '../../types'

type Props = {
  minimum_system_requirements: GameRequirements
}

const index = ({ minimum_system_requirements }: Props) => {
  return (
    <StyledSystemRequirements>
      <h3>Minimum System Requirements</h3>
      <StyledAditionallInfo>
        {minimum_system_requirements && Object.entries(minimum_system_requirements).map(([key, value]) =>
          <StyledLi key={key}><p>{key}</p><span>{value ?? "No data"}</span></StyledLi>)}
      </StyledAditionallInfo>
    </StyledSystemRequirements>
  )
}

const StyledAditionallInfo = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
margin: 0;
`
const StyledLi = styled.li`
display: flex;
padding: 10px 0;
border-bottom: 1px solid gray;
flex-direction: row;
justify-content: space-between;
& p {
  margin: 0;
  text-transform: capitalize;
}
`
const StyledSystemRequirements = styled.div`
background-color: #333333;
border-radius: 5px;
padding: 10px;
& h3 {
  margin-top: 0%;}
& p{
  margin-right: 50px;
  line-height: 1.1rem;
}
& span{
  line-height: 1.1rem;
  text-align: right;
}
`

export default index