import React from "react";
import useReveal from "../hooks/useReveal";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutMe from "../components/AboutMe";
import TypingEffect from "../components/TypingEffect";
import Capabilities from "../components/Capabilities";
import '../css/Home.css';

export default function Home(): React.JSX.Element {
  useReveal();

  return (
    <div className="home">
      <section className="hero reveal">
        <TypingEffect />
        <p className="hero-desc">
          I design and build production systems, internal platforms, and AI-assisted engineering workflows for real business operations.
        </p>
      </section>

      <AboutMe />
      <Capabilities />
      <FeaturedProjects />
    </div>
  );
}
