import React from "react";
import { useParams, Link } from "react-router-dom";
import projectDetails from '../data/projectsData';
import '../css/ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <p>Project not found. <Link to="/projects">Back to Projects</Link></p>;

  return (
    <div className="project-detail-page">
      <h1 className="project-title">{project.title}</h1>

      <section className="project-overview">
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      <section className="project-section">
        <h2>Key Features & Functionalities</h2>
        <ul>
          {project.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </section>

      <section className="project-section">
        <h2>Tech Stack</h2>
        <ul>{project.tech.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </section>

      <section className="project-section">
        <h2>My Contributions</h2>
        <ul>{project.contribution.map((c, i) => <li key={i}>{c}</li>)}</ul>
      </section>

      <section className="project-section">
        <h2>Outcomes & Achievements</h2>
        <ul>{project.outcome.map((o, i) => <li key={i}>{o}</li>)}</ul>
      </section>

      <Link to="/projects" className="btn ghost back-link">← Back to Projects</Link>
    </div>
  );
}