import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const ButtonLink = styled(LinkS)`
    text-decoration:none;
    outline:none;
    font-size: 1.6rem;
    margin-top: 1.6rem;
    padding: 1.2rem 2.4rem;
    border-radius: 50px;
    cursor: pointer;
    border: none;
    white-space: nowrap;
    background: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    box-shadow: 5px 10px 20px  rgba(0, 0, 0, 0.2);
    transition: .2s ease-in-out;

    &:hover {
        background: #13263b;
        color: #fff;
        box-shadow:  5px 10px 15px rgba(255, 255, 255, 0.2);
    }
`