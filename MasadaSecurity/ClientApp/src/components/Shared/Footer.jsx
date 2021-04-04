import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 70px;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: #13263b;
`;

const FooterP = styled.p`
  font-size: 2.4rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterP>Masada Security International &copy; 2021</FooterP>
    </FooterContainer>
  );
};

export default Footer;
