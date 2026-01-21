import React from "react";
import useReveal from "../hooks/useReveal";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutMe from "../components/AboutMe";
import Tetris from "../components/Tetris";
import TypingEffect from "../components/TypingEffect";
import Capabilities from "../components/Capabilities";
import '../css/Home.css';

export default function Home() {
  useReveal();

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero reveal">
        <TypingEffect />
        <p className="hero-desc">
          I design and build scalable eCommerce platforms and internal systems used by real businesses.
        </p>
      </section>
      {/* About Me */}
      <AboutMe />

      {/* Capabilities */}
      <Capabilities />

      {/* Featured Project */}
      <FeaturedProjects />
      <Tetris />
    </div>
  );
}