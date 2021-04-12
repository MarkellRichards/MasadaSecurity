import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../Shared/SectionTitle";

const SectionWrapper = styled.div`
  padding: 7rem 0;
  background: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1300px;
  justify-items: center;
  padding: 3rem 0;
  column-gap: 4rem;
  row-gap: 6rem;
`;

const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;
  max-width: 500px;
  align-items: center;
  max-height: 300px;
`;

const HR = styled.hr`
  border-bottom: 1px solid #13263b;
  margin-bottom: 1rem;
`;

const ServicesCardTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 3rem 0 0.5rem 0;
  text-align: left;
  color: #13263b;
  width: 100%;
`;

const ServicesCardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #13263b;
`;

let style = { color: "#13263b" };

const ServicesSection = () => {
  return (
    <SectionWrapper id="#services">
      <SectionTitle style={style}>Our Services</SectionTitle>
      <Wrapper>
        <ServicesGrid>
          <ServicesCard
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <ServicesCardTitle>
              Criminal and Civil Investigation
            </ServicesCardTitle>
            <HR />
            <ServicesCardDescription>
              Masada will help you gather, discover, prepare, identify and
              present evidence for criminal and civil cases.
            </ServicesCardDescription>
          </ServicesCard>
          <ServicesCard
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <ServicesCardTitle>Threat assessments</ServicesCardTitle>
            <HR />
            <ServicesCardDescription>
              Threat assessments are a factual-based approach to finding
              security risks; this can help find possible dangers on your
              property or within employees. Keep your company safe by being
              proactive.
            </ServicesCardDescription>
          </ServicesCard>
          <ServicesCard
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <ServicesCardTitle>Intelligence Collections</ServicesCardTitle>
            <HR />
            <ServicesCardDescription>
              Intelligence Collections is a process used to find information
              that brings value to your company and safety. The data is often
              restricted or secret and allows us to add an extra layer of
              protection to the company, as we see dangers that we may not have
              seen otherwise.
            </ServicesCardDescription>
          </ServicesCard>
          <ServicesCard
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <ServicesCardTitle>Security Consulting</ServicesCardTitle>
            <HR />
            <ServicesCardDescription>
              With our years of experience, we have seen several types of crime
              scenes and faulty camera angles. Let us help you prevent
              burglaries by finding the right spots for your security system.
            </ServicesCardDescription>
          </ServicesCard>
        </ServicesGrid>
      </Wrapper>
    </SectionWrapper>
  );
};

export default ServicesSection;
