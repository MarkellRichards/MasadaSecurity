import styled from 'styled-components';


export const HeroContainer = styled.div`
    height: 150vh;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/assets/HeroImage.jpg") no-repeat center center;

`

export const ContentContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    padding: 0 1.5rem;
    z-index: 3;
`

export const HeroContent = styled.div`
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: left;
    z-index: 3;
`

export const HeroTitle = styled.h1`
    font-size: 7.2rem;
    color: #fff;
    text-align: left;

    @media screen and (max-width: 768px) {
    font-size: 5.6rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 4rem;
  }
`

export const HeroParagraph = styled.p`
    width: fit-content;
    font-size: 2.4rem;
    color: #fff;
    border-bottom: 3px #fff solid;
`

