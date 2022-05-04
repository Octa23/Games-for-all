import React from 'react'
import styled from 'styled-components'

interface Props {
  size?: string
}

const index = ({ size }: Props) => {
  return (
    <Spinner size={size} />
  )
}

const Spinner = styled.div <Props>`
  position: relative;
  margin: auto;
  border: ${props => props.size ? "5px" : "10px"} solid rgba(0, 0, 0, 0.1);
  width: ${props => props.size || "130px"};
  height:${props => props.size || "130px"};
  border-radius: 50%;
  border-left-color: #ea1f2e;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

`

export default index