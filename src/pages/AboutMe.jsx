import React from "react";
import Container from "../Shared/Container";
import AboutHead from "../components/About/AboutHead";
import AboutSection from "../components/AboutSection";
import Skill from "../components/About/Skill";
import FunFact from "../components/About/FunFact";
import { Helmet } from "react-helmet-async";
import Animated from "../components/AnimatedCursor/Animated";

const AboutMe = () => {
  return (
    <div className="bg-[#282C33]">
      <Helmet>
        <title>About | Dev-Hassan</title>
      </Helmet>
      <Container>
         <Animated/>
        <AboutHead></AboutHead>
        <AboutSection></AboutSection>
        <Skill></Skill>
        <FunFact></FunFact>
      </Container>
    </div>
  );
};

export default AboutMe;
