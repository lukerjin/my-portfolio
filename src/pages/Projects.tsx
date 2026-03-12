import React from "react";
import { Link } from "react-router-dom";
import '../css/Projects.css';

interface ProjectSummary {
  id: number;
  title: string;
  short: string;
}

const professionalProjects: ProjectSummary[] = [
  { id: 1, title: "Warehouse Management System", short: "A fully-featured WMS used by staff to manage inventory, picking, packing, and workflow operations efficiently." },
  { id: 2, title: "Frontend Modernisation", short: "Frontend rebuild using Vue 3 + Vite + Astro." },
  { id: 3, title: "Key Frontend Modules", short: "Mega Menu, Subscription workflow, Customer enquiry module, Collections." },
  { id: 4, title: "Shopify Websites", short: "Custom Shopify templates." }
];

const personalProjects: ProjectSummary[] = [
  { id: 5, title: "Quantitative Trading System", short: "Built and iterated on an IBKR-connected quantitative trading system covering research, execution runtime, reconciliation, and operator recovery workflows." }
];

function ProjectGroup({ title, intro, projects }: { title: string; intro: string; projects: ProjectSummary[] }): React.JSX.Element {
  return (
    <section className="projects-group">
      <div className="projects-group-header">
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>

      {projects.map(p => (
        <article className="project-story" key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.short}</p>
          <Link to={`/projects/${p.id}`} className="btn ghost">View Details</Link>
        </article>
      ))}
    </section>
  );
}

export default function Projects(): React.JSX.Element {
  return (
    <>
      <section className="projects-page">
        <h1 className="projects-title">Portfolio Highlights</h1>

        <ProjectGroup
          title="Professional Projects"
          intro="Commercial work delivered for real businesses, internal operations, and customer-facing platforms."
          projects={professionalProjects}
        />

        <ProjectGroup
          title="Personal Projects"
          intro="Independent projects focused on deeper systems thinking, architecture, experimentation, and technical ownership."
          projects={personalProjects}
        />
      </section>
    </>
  );
}
