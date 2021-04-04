import styled from "styled-components";
import { Form } from "formik";

export const ContactSectionWrapper = styled.section`
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: none;
  `;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    max-width: 1100px;
    height: 100%;
  `;

export const Contact = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
  `;

export const ContactBody = styled.div`
    display: flex;

    flex-direction: column;
    padding: 7rem 5rem;
    height: 100%;
  `;
export const ContactTitle = styled.h1`
    font-size: 3.2rem;
    /* letter-spacing: 1rem; */
    color: #13263b;
    padding: 2rem 0;
    text-align: left;
    width: 100%;
    text-transform: uppercase;
  `;

export const ContactP = styled.p`
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 3rem;
    padding: 1rem 0;
    color: "#13263b";
  `;

//   Form elements

export const ContactFormContainer = styled.div`
    display: flex;
flex-direction: column;
padding: 7rem 5rem;
height: 100%;
`
export const ContactForm = styled(Form)`
  padding: 0 2.2rem;
  /* z-index: 10; */
  overflow: hidden;
  position: relative;

`;

export const ContactInputContainer = styled.div`
    position: relative;
    margin: 2rem 0;
    & label {
      display: none;
    }
  `;

export const ContactInput = styled.input`
    width: 100%;
    outline: none;
    border: ${(props) => props.border};
    background: none;
    padding: 0.6rem 1.2rem;
    color: #13263b;
    font-weight: 500;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    transition: 0.3s;
    &::placeholder {
      color: #13263b;
      opacity: 0.8;
    }
  `;

export const ContactTextArea = styled.textarea`
    padding: 0.8rem 1.2rem;
    min-height: 150px;
    resize: none;
    overflow-y: auto;
    width: 100%;
    outline: none;
    border: ${(props) => props.border};
    background: none;
    color: #13263b;
    font-weight: 500;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    transition: 0.3s;
    &::placeholder {
      color: #13263b;
      opacity: 0.8;
    }
  `;

export const SubmitButton = styled.button`
    padding: 0.6rem 1.3rem;
    background-color: #13263b;
    border: 2px solid #13263b;
    width: fit-content;
    font-size: 2rem;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    margin: 0;
    &:hover {
      background: transparent;
      color: #13263b;
    }
  `;