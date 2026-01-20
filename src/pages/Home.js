import React, { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutMe from "../components/AboutMe";
import Tetris from "../components/Tetris";
import { Link } from 'react-router-dom';

const myName = "Jin Wu";
const roles = [
  "Full Stack Developer",
  "eCommerce System Builder",
  "Warehouse System Architect",
  "Senior Frontend Engineer"
];

export default function Home() {
  useReveal();

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 90;
  const cursorShapes = ["■", "□", "▣", "▤", "▥", "▦"];

  useEffect(() => {
    const role = roles[index];
    let t;

    if (!isDeleting && text.length < role.length) {
      t = setTimeout(() => setText(role.slice(0, text.length + 1)), speed);
    } else if (isDeleting && text.length > 0) {
      t = setTimeout(() => setText(role.slice(0, text.length - 1)), speed / 2);
    } else if (!isDeleting && text.length === role.length) {
      t = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex((index + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [text, isDeleting, index]);

  const cursor = cursorShapes[Math.floor(Math.random() * cursorShapes.length)];

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero reveal">
        <h1>
          I'm <strong>{myName}</strong><br />
          <span className="animated-role">{text}</span>
          <span className="cursor">{cursor}</span>
        </h1>
        <p className="hero-desc">
          I design and build scalable eCommerce platforms and internal systems used by real businesses.
        </p>
      </section>
      {/* About Me */}
      <AboutMe />

      {/* Capabilities */}
      <section className="capabilities reveal">
        <div className="cap-card">
          <h3>Large-Scale System Architecture & Workflow</h3>
          <p>
            Architected a fully customised Warehouse Management System supporting
            inventory, stocktaking, picking, packing, and role-based workflows,
            while streamlining operations with task assignment, barcode-driven picking,
            packing validation, labelling, and full audit trails.
          </p>
        </div>

        <div className="cap-card">
          <h3>eCommerce Development & Shopify Expertise</h3>
          <p>
            Extensive experience in full-stack eCommerce development, including fully customised, responsive online stores and Shopify websites.
          </p>
        </div>

        <div className="cap-card">
          <h3>System Migration & Backward Compatibility</h3>
          <p>
            Migrated production systems from Angular + Laravel 5.8 to Vue + Laravel 8.12
            while maintaining continuous operations and shared databases.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <FeaturedProjects />
      <Tetris />
    </div>
  );
}