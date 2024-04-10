import React, { useState } from 'react';
import styled from 'styled-components';
import { Snackbar } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  border: 1.9px solid ${({ theme }) => theme.primary};
  text-align: center;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  color: ${({ theme }) => theme.primary};
  background: transparent;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  transition: all 0.5s ease-in-out;
  font-size: 18px;
  font-weight: 600;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const ContactSuccessMessage = styled.div`
  width: 100%;
  text-align: center;
  color:  ${({ theme }) => theme.text_primary};
  // font-weight: bold;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let formValid = true;
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementsByName("from_email")[0].value;
    if (!emailRegex.test(emailInput)) {
      newErrors.from_email = 'Invalid email address';
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = validateForm();

    if (formValid) {

      setIsSuccess(true);

      e.target.reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <Container id='contact'>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          {errors.from_email && <ErrorMessage>{errors.from_email}</ErrorMessage>}
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
          {isSuccess && <ContactSuccessMessage>Your message has been sent successfully!</ContactSuccessMessage>}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
