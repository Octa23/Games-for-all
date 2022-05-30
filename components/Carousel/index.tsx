import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import styled from "styled-components";
import { StyledButton } from "../Pagination/index";
import type { screenshotsdetail } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  screenshots: screenshotsdetail[];
  title: string;
};

const index = ({ screenshots, title }: Props) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      handleImage(activeImage + 1);
    }, 5000);

    return () => {
      clearInterval(imgInterval);
    };
  }, [activeImage]);

  const handleImage = (index: number) => {
    setActiveImage(() =>
      index < 0
        ? screenshots.length - 1
        : index > screenshots.length - 1
        ? 0
        : index
    ); //Si se retocede desde la primera posicion te lleva al ultimo indice de las screenshots y viceversa
  };

  return (
    <>
      {screenshots.length !== 0 && (
        <StyledCarousel>
          <AnimatePresence>
            <div>
              <StyledPButton onClick={() => handleImage(activeImage - 1)}>
                <BsFillArrowLeftSquareFill />
              </StyledPButton>
              <StyledNButton onClick={() => handleImage(activeImage + 1)}>
                <BsFillArrowRightSquareFill />
              </StyledNButton>
              <motion.img
                alt={title + " image"}
                src={screenshots[activeImage].image}
                key={screenshots[activeImage].image}
                transition={{ duration: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </div>
          </AnimatePresence>

          <ul>
            {screenshots.map((screenshot, index) => (
              <SliderItem active={activeImage === index} key={screenshot.id}>
                <StyledImage
                  onClick={() => handleImage(index)}
                  src={screenshot.image}
                  alt={title + " image"}
                />
              </SliderItem>
            ))}
          </ul>
        </StyledCarousel>
      )}
    </>
  );
};

const StyledPButton = styled(StyledButton)`
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 50%;
  left: 10px;
  background: transparent;
  transform: translateY(-50%);
  transition: opacity 0.5s;
`;
const StyledNButton = styled(StyledButton)`
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 50%;
  right: 10px;
  background: transparent;
  transform: translateY(-50%);
  transition: opacity 0.5s;
`;
const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 5px;
`;
const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    position: relative;
    & > img {
      width: 100%;
      aspect-ratio: 16/9;
      border-radius: 5px;
    }
    &:hover {
      & > button {
        opacity: 1;
        transition: opacity 0.5s;
      }
    }
  }
  & ul {
    margin-top: 15px;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`;
const SliderItem = styled.li<{ active: boolean }>`
  border: ${(props) =>
    props.active ? "2px solid #f4f4f4" : "2px solid transparent"};
  border-radius: 5px;
  flex: 1;
  max-width: 150px;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export default index;
