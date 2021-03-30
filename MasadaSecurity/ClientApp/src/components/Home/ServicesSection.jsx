import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { SectionTitle } from "../Shared/SectionTitle";
import { ButtonLink } from "../Shared/Button";

const SectionWrapper = styled.div`
  padding: 4rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1300px;
  justify-items: center;
  column-gap: 2.5rem;
  height: 400px;
`;

const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  max-width: 350px;
`;

const ServicesCardImage = styled.img`
  border-radius: 75%;
  height: 150px;
  padding: 1rem 2rem;
  justify-self: center;
`;

const HR = styled.hr`
  border-bottom: 1px solid #264c76;
  margin-bottom: 1rem;
`;

const ServicesCardTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1rem 0 0.5rem 0;
  text-align: left;
`;

const ServicesCardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ServicesSection = () => {
  return (
    <SectionWrapper id="#services">
      <SectionTitle>Our Services</SectionTitle>
      <Wrapper>
        <ServicesGrid>
          <ServicesCard>
            <ServicesCardImage src="https://source.unsplash.com/random" />
            <ServicesCardTitle>Service name</ServicesCardTitle>
            <HR />
            <ServicesCardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae esse aliquam quod maiores dolore officiis iusto, in
              earum praesentium nisi quia ipsam distinctio commodi illo.
            </ServicesCardDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesCardImage src="https://source.unsplash.com/random" />
            <ServicesCardTitle>Service name</ServicesCardTitle>
            <HR />
            <ServicesCardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae esse aliquam quod maiores dolore officiis iusto, in
              earum praesentium nisi quia ipsam distinctio commodi illo.
            </ServicesCardDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesCardImage src="https://source.unsplash.com/random" />
            <ServicesCardTitle>Service name</ServicesCardTitle>
            <HR />
            <ServicesCardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae esse aliquam quod maiores dolore officiis iusto, in
              earum praesentium nisi quia ipsam distinctio commodi illo.
            </ServicesCardDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesCardImage src="https://source.unsplash.com/random" />
            <ServicesCardTitle>Service name</ServicesCardTitle>
            <HR />
            <ServicesCardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae esse aliquam quod maiores dolore officiis iusto, in
              earum praesentium nisi quia ipsam distinctio commodi illo.
            </ServicesCardDescription>
          </ServicesCard>
        </ServicesGrid>
      </Wrapper>
      <ButtonWrapper>
        <ButtonLink to="services">View All Services</ButtonLink>
      </ButtonWrapper>
    </SectionWrapper>
  );
};

export default ServicesSection;
