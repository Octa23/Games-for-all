import React from 'react'
import styled from 'styled-components'

const index = () => {
  return (
    <Spinner />
  )
}

const Spinner = styled.div`
  position: relative;
  margin: auto;
  border: 10px solid rgba(0, 0, 0, 0.1);
  width: 100px;
  height: 100px;
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