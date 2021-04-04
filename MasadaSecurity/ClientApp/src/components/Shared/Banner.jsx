import React from "react";
import styled from "styled-components";
const Banner = (props) => {
  const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    height: ${props.height};
    align-items: center;
    color: #fff;
    background-color: #13263b;
    padding: 7rem 0;
    flex-direction: column;
  `;

  const BannerTitle = styled.h1`
    font-size: 4.8rem;
    text-align: center;
    /* letter-spacing: 1rem; */
    color: rgba(255, 255, 255, 1);
  `;

  const BannerText = styled.p`
    text-align: center;
    padding-top: 2rem;
    font-size: 2rem;
  `;
  return (
    <BannerContainer id={props.id}>
      <BannerTitle>{props.title}</BannerTitle>
      <BannerText>{props.text}</BannerText>
    </BannerContainer>
  );
};

export default Banner;

// We are a Security Consulting Firm
//  Masada provides our clients with unbiased, ethical, fact-finding,
//  investigative and consulting services.
