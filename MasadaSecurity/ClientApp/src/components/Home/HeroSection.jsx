import React from "react";
import { ButtonLink } from "../Shared/Button";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const HeroContainer = styled.div`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/assets/HeroImage.jpg") no-repeat center center;
`;

const ContentContainer = styled(motion.div)`
  max-width: 1100px;
  width: 100%;
  padding: 0 1.5rem;
  z-index: 3;
`;

const HeroContent = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: left;
  z-index: 3;
`;

const HeroTitle = styled.h1`
  font-size: 7.2rem;
  color: #fff;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 5.6rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 4rem;
  }
`;

const HeroParagraph = styled.p`
  width: fit-content;
  font-size: 2.4rem;
  color: #fff;
  /* border-bottom: 3px #fff solid; */
`;

const HeroSection = () => {
  return (
    <>
      <HeroContainer id="#hero">
        <AnimatePresence>
          <ContentContainer>
            <HeroContent>
              <HeroTitle>Masada Security</HeroTitle>
              <HeroParagraph>"For such a time as this"</HeroParagraph>
              <ButtonLink
                to="#about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Learn More
              </ButtonLink>
            </HeroContent>
          </ContentContainer>
        </AnimatePresence>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
