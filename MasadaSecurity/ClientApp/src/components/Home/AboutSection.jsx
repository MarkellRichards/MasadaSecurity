import React from "react";
import styled from "styled-components";

const AboutSectionWrapper = styled.section`
  height: auto;
  overflow: none;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

const AboutSummary = styled.div`
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const AboutSummaryBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 7rem 5rem;
  height: 100%;
`;
const AboutSummaryTitle = styled.h1`
  font-size: 4.8rem;
  letter-spacing: 1rem;
  color: #13263b;
  padding: 2.5rem 0;
`;

const AboutSummaryP = styled.p`
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 3rem;
  padding: 2rem 0;
  color: #13263b;
`;

const AboutImage = styled.img`
  height: 100%;
  width: 100%;
`;

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <AboutGrid>
        <AboutSummary>
          <AboutSummaryBody>
            <AboutSummaryTitle
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Our Founder
            </AboutSummaryTitle>
            <AboutSummaryP
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              As a young Airman First Class, (A1C) in the USAF, Isaiah
              envisioned someday having his own investigations firm. So, he
              purchased a name plate with the inscription of CEO of Precise
              Investigations. It would be nearly 7 years later after completing
              undergrad and moving to Texas before his could launch his business
              in a spare bedroom on Brooks AFB in San Antonio, TX. While
              building his firm he worked a variety of jobs, (e.g., CPS
              Investigator, Custodian, Security Monitor at a half-way house)
              prior to becoming a police officer. After serving in law
              enforcement for nearly 6 years, Isaiah made the decision to return
              to active military service. As such, he applied and was selected
              for a USAF Health Professions Scholarship and pursued a Master of
              Social Work at the University of Texas at San Antonio.
            </AboutSummaryP>
            <AboutSummaryP
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Fast Forward to 2019, Isaiah made the decision to change the name
              of the firm from Precise Investigations to Masada Security
              International, (MSI, LLC). The name change better reflects the
              firm’s position as a strategic risk management and consultancy as
              opposed to a singularly focused investigations firm. Due to this
              holistic approach to managing risk, Isaiah has assembled a team of
              investigators and consultants from diverse backgrounds such as law
              enforcement, intelligence, corporate security and behavioral
              health. MSI’s team of professionals and subject matter experts are
              well positioned to help individuals, corporations and non-profits
              manage risk by providing bespoke security solutions.
            </AboutSummaryP>
          </AboutSummaryBody>
        </AboutSummary>
        <AboutImage
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
          src="/assets/portrait.jpg"
          alt="Founder photo"
        />
      </AboutGrid>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
