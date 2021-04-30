import React from 'react';
import styled from 'styled-components';

interface BannerProps {
  id: string;
  title: string;
  text: string | null;
  height: string;
}

const Banner: React.FC<BannerProps> = ({
  id,
  title,
  text,
  height,
}: BannerProps) => {
  const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${height};
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
    @media screen and (max-width: 768px) {
      font-size: 3.6rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 3.2rem;
      padding: 0 1rem;
    }
  `;

  const BannerText = styled.p`
    text-align: center;
    padding-top: 2rem;
    font-size: 2rem;
    @media screen and (max-width: 768px) {
      margin-top: 3rem;
      padding: 0;
    }
    @media screen and (max-width: 400px) {
      font-size: 1.6rem;
      padding: 0 1rem;
    }
  `;
  return (
    <BannerContainer id={id}>
      <BannerTitle>{title}</BannerTitle>
      {text ? <BannerText>{text}</BannerText> : null}
    </BannerContainer>
  );
};

export default Banner;

// We are a Security Consulting Firm
//  Masada provides our clients with unbiased, ethical, fact-finding,
//  investigative and consulting services.
