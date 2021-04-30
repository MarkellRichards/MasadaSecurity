import React from 'react';
import { Formik, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import {
  ContactSectionWrapper,
  ContactGrid,
  ContactBody,
  ContactForm,
  ContactInput,
  ContactInputContainer,
  ContactTextArea,
  ContactTitle,
  Contact,
  ContactP,
  SubmitButton,
  ContactFormContainer,
  IconContainer,
} from './ContactElements';

interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  as?: string;
}

const MyTextInput: React.FC<Props> = ({
  label,
  name,
  type,
  placeholder,
}: Props) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField({ name, type });
  return (
    <>
      <ContactInputContainer>
        <label htmlFor={name}>{label}</label>
        <ContactInput
          // eslint-disable-next-line
          {...field}
          placeholder={placeholder}
          border={
            meta.touched && meta.error ? '2px solid red' : '2px solid #13263b'
          }
        />
        <ErrorMessage
          component="span"
          name={name}
          render={(msg) => <span className="errors">{msg}</span>}
        />
      </ContactInputContainer>
    </>
  );
};
const MyTextArea: React.FC<Props> = ({
  label,
  name,
  type,
  placeholder,
}: Props) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField({
    name,
    type,
  });
  return (
    <>
      <ContactInputContainer>
        <label htmlFor={name}>{label}</label>
        <ContactTextArea
          // eslint-disable-next-line
          {...field}
          placeholder={placeholder}
          as="textarea"
          border={
            meta.touched && meta.error ? '2px solid red' : '2px solid #13263b'
          }
        />
        <ErrorMessage
          component="span"
          name={name}
          render={(msg) => <span className="errors">{msg}</span>}
        />
      </ContactInputContainer>
    </>
  );
};

const ContactSection: React.FC = () => {
  return (
    <ContactSectionWrapper>
      <ContactGrid>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(40, 'Must be 40 characters or less')
              .required('Name is required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Email is required'),
            message: Yup.string().max(400, 'Must be 400 characters or less'),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {() => (
            <ContactFormContainer>
              <ContactForm
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <MyTextInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                />
                <MyTextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <MyTextArea
                  label="Message:"
                  name="message"
                  type="message"
                  placeholder="Enter message here..."
                />
                <SubmitButton type="submit">Submit</SubmitButton>
              </ContactForm>
            </ContactFormContainer>
          )}
        </Formik>
        <Contact>
          <ContactBody
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <ContactTitle>Get in touch with us</ContactTitle>
            <ContactP>
              At MSI, we are always available, responsive, and committed to
              urgently addressing our clients’ needs. For more information about
              services, please contact us, and a member of our team will be in
              touch with you shortly.
            </ContactP>
            <ContactTitle>Connect with us on Social Media</ContactTitle>
            <IconContainer
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
            </IconContainer>
          </ContactBody>
        </Contact>
      </ContactGrid>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
