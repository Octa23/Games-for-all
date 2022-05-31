import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Custom404 = () => {
  return (
    <StyledMain>
      <StyledDiv>
        <Image
          src={"/404.png"}
          sizes="100%"
          layout="fill"
          quality={100}
          objectFit="cover"
        ></Image>
      </StyledDiv>
    </StyledMain>
  );
};
const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 100px);
`;
const StyledDiv = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  aspect-ratio: 1;
`;

export default Custom404;
