import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import projectDetails from '../data/projectsData';
import '../css/ProjectDetail.css';

export default function ProjectDetail(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : -1;
  const project = Number.isInteger(projectId) ? projectDetails[projectId] : undefined;

  if (!project) return <Navigate to="/projects" replace />;

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

      {project.workflowImage ? (
        <section className="project-section project-workflow-section">
          <h2>Operational Workflow</h2>
          <figure className="project-workflow-image-card">
            <img src={project.workflowImage.image} alt={project.workflowImage.title} className="project-workflow-image" />
            <figcaption className="project-workflow-caption">
              <strong>{project.workflowImage.title}</strong>
              <span>{project.workflowImage.caption}</span>
            </figcaption>
          </figure>
        </section>
      ) : project.workflow && project.workflow.length > 0 ? (
        <section className="project-section project-workflow-section">
          <h2>Operational Workflow</h2>
          <div className="project-workflow-card">
            {project.workflow.map((line, i) => {
              const isSeparator = /^-+$/.test(line.trim());
              const isArrowOnly = /^[│▼↓\s]+$/.test(line.trim());
              const isSection = line.includes('PHASE') || line.includes('STATE MACHINE') || line.includes('CORE SYSTEM CAPABILITIES') || line.includes('Dashboard');
              const className = [
                'project-workflow-line',
                isSeparator ? 'project-workflow-line--separator' : '',
                isArrowOnly ? 'project-workflow-line--arrow' : '',
                isSection ? 'project-workflow-line--section' : ''
              ].filter(Boolean).join(' ');

              return (
                <div key={`${line}-${i}`} className={className}>{line}</div>
              );
            })}
          </div>
        </section>
      ) : null}

      {project.links && project.links.length > 0 ? (
        <section className="project-section project-links-section">
          <h2>Research, Validation & Reports</h2>
          <div className="project-links-list">
            {project.links.map((link, i) => (
              <a
                key={`${link.title}-${i}`}
                href={link.url}
                className="project-link-card"
                target="_blank"
                rel="noreferrer"
              >
                <strong>{link.title}</strong>
                <span>{link.description}</span>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {project.assets && project.assets.length > 0 ? (
        <section className="project-section project-assets-section">
          <h2>Selected Screens & Workflow</h2>
          <div className="project-assets-grid">
            {project.assets.map((asset, i) => (
              <figure className="project-asset-card" key={`${asset.title}-${i}`}>
                <img src={asset.image} alt={asset.title} className="project-asset-image" />
                <figcaption className="project-asset-caption">
                  <strong>{asset.title}</strong>
                  <span>{asset.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

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