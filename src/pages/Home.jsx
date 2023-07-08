import React from "react";
import SkillSection from "../components/SkillSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import PopularProject from "../components/PopularProject";
import { Helmet } from "react-helmet-async";
import Animated from "../components/AnimatedCursor/Animated";
import Container from "../Shared/Container";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="bg-[#282C33]">
      <Helmet>
        <title>Dev-Hassan</title>
      </Helmet>
      <Animated />
      <Container>
        <HeroSection></HeroSection>

        <PopularProject></PopularProject>
        <SkillSection></SkillSection>
        <AboutSection></AboutSection>
        <ContactSection></ContactSection>
      </Container>
    </div>
  );
};

export default Home;
