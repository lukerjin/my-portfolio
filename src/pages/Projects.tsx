import React from "react";
import { Link } from "react-router-dom";
import '../css/Projects.css';

interface ProjectSummary {
  id: number;
  title: string;
  short: string;
}

const professionalProjects: ProjectSummary[] = [
  { id: 0, title: "AI-Assisted Legacy Migration & 0→1 Delivery", short: "Used AI-assisted engineering to modernise legacy systems and accelerate new project delivery through orchestrated agent workflows and tighter implementation loops." },
  { id: 1, title: "Warehouse Management System", short: "A fully-featured WMS used by staff to manage inventory, picking, packing, and workflow operations efficiently." },
  { id: 2, title: "Frontend Modernisation", short: "Frontend rebuild using Vue 3 + Vite + Astro." },
  { id: 3, title: "Key Frontend Modules", short: "Mega Menu, Subscription workflow, Customer enquiry module, Collections." },
  { id: 4, title: "Shopify Websites", short: "Custom Shopify templates." },
];

const personalProjects: ProjectSummary[] = [
  { id: 5, title: "AI-Orchestrated Quant Trading System", short: "Built and evolved an IBKR-connected trading platform while coordinating multiple AI agents through OpenClaw for planning, implementation, testing, debugging, and architecture work." }
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
          title="Personal Projects"
          intro="Independent projects focused on deeper systems thinking, architecture, experimentation, and AI-assisted engineering workflows."
          projects={personalProjects}
        />

        <ProjectGroup
          title="Professional Projects"
          intro="Commercial work delivered for real businesses, internal operations, and customer-facing platforms."
          projects={professionalProjects}
        />
      </section>
    </>
  );
}
