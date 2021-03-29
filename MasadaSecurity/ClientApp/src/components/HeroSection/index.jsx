import React from "react";
import { ButtonLink } from "../Shared/Button";
import {
  HeroContainer,
  HeroContent,
  HeroParagraph,
  HeroTitle,
  ContentContainer,
} from "./HeroSectionElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <ContentContainer>
          <HeroContent>
            <HeroTitle>Masada Security</HeroTitle>
            <HeroParagraph>
              Fast, Affordable, and Efficient security for you and your company.
            </HeroParagraph>
            <ButtonLink to="#">Learn More</ButtonLink>
          </HeroContent>
        </ContentContainer>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
