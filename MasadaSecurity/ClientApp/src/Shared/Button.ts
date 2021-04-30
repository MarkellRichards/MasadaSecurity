import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

const ButtonLink = styled(LinkS)`
  text-decoration: none;
  outline: none;
  font-size: 1.6rem;
  margin-top: 1.6rem;
  padding: 1.2rem 2.4rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  white-space: nowrap;
  background: #13263b;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  width: fit-content;
  /* box-shadow: 5px 5px 10px  rgba(255, 255, 255, 0.2); */
  transition: 0.2s ease-in-out;

  &:hover {
    background: #f3f3f3;
    color: #000;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default ButtonLink;
