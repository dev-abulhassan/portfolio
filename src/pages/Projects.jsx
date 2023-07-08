import React from "react";
import ProjectsHead from "../components/Projects/ProjectsHead";
import Container from "../Shared/Container";
import ReactProjects from "../components/Projects/ReactProjects";
import WordPressProject from "../components/Projects/WordPressProject";
import { Helmet } from "react-helmet-async";
import Animated from "../components/AnimatedCursor/Animated";

const Projects = () => {
  return (
    <div className="bg-[#282C33]">
      <Helmet>
        <title>Project | Dev-Hassan</title>
      </Helmet>
      <Container>
        <Animated/>
        <ProjectsHead></ProjectsHead>
        <ReactProjects></ReactProjects>
        <WordPressProject></WordPressProject>
      </Container>
    </div>
  );
};

export default Projects;
