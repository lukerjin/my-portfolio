import React from "react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutMe from "../components/AboutMe";
import TypingEffect from "../components/TypingEffect";
import Capabilities from "../components/Capabilities";
import '../css/Home.css';

const proofPoints = [
  {
    title: "10+ Years",
    text: "Building production systems across eCommerce, internal platforms, and operational workflows."
  },
  {
    title: "Operational Systems",
    text: "Warehouse, subscriptions, fulfilment, admin tooling, and lifecycle-heavy business flows."
  },
  {
    title: "AI-Assisted Engineering",
    text: "Debugging, validation, workflow automation, and agent-based engineering support."
  },
  {
    title: "Full-Stack Ownership",
    text: "Frontend, backend, integrations, platform modernisation, and production delivery."
  }
];

export default function Home(): React.JSX.Element {
  useReveal();

  return (
    <div className="home">
      <section className="hero reveal">
        <TypingEffect />
        <p className="hero-desc">
          I design and build production systems, internal platforms, and AI-assisted engineering workflows for real business operations.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn">View Selected Work</Link>
          <Link to="/experience" className="btn ghost">View Experience</Link>
          <a href="https://github.com/lukerjin" target="_blank" rel="noreferrer" className="btn ghost">GitHub</a>
          <a href="mailto:jc.jinwu@gmail.com" className="btn ghost">Email</a>
        </div>
      </section>

      <section className="proof-grid reveal">
        {proofPoints.map((item) => (
          <article className="proof-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <AboutMe />
      <Capabilities />
      <FeaturedProjects />
    </div>
  );
}
