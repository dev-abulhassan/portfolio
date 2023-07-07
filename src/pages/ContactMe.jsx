import React from "react";
import ContactHead from "../components/Contact/ContactHead";
import EmailSupport from "../components/Contact/EmailSupport";
import SocialMedia from "../components/Contact/SocialMedia";
import Container from "../Shared/Container";
import { Helmet } from "react-helmet-async";

const ContactMe = () => {
  return (
    <div className="bg-[#282C33]">
      <Helmet>
        <title>Contact | Dev-Hassan</title>
      </Helmet>
      <Container>
        <ContactHead></ContactHead>
        <EmailSupport></EmailSupport>
        <SocialMedia></SocialMedia>
      </Container>
    </div>
  );
};

export default ContactMe;
