import React from "react";
import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import PopularProject from "../components/PopularProject";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="bg-[#282C33]">
      <Helmet>
        <title>Dev-Hassan</title>
      </Helmet>
      <HeroSection></HeroSection>
      <PopularProject></PopularProject>
      <SkillSection></SkillSection>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
