import React from "react";
import { Link } from "react-router-dom";
import '../css/Projects.css';

interface ProjectSummary {
  id: number;
  title: string;
  short: string;
}

const flagshipProjects: ProjectSummary[] = [
  {
    id: 5,
    title: "AI-Orchestrated Quant Trading System",
    short: "Built and evolved an IBKR-connected trading platform with broker synchronization, execution runtime, reconciliation, operator tooling, and multi-agent AI-assisted engineering workflows."
  }
];

const commercialSystems: ProjectSummary[] = [
  {
    id: 2,
    title: "Subscription Lifecycle Platform",
    short: "Built a recurring-order subscription system with lifecycle states, scheduled processing, self-service management, and reliable order generation logic."
  },
  {
    id: 3,
    title: "Virtual Gift Card System",
    short: "Built a full-stack gift card platform with purchase, activation, redemption, stored-value balance tracking, and consistency across orders and transactions."
  },
  {
    id: 1,
    title: "Warehouse Management System",
    short: "Designed and built a custom internal WMS covering inbound receiving, inventory, picking, packing, shipping, returns, and staff workflow operations."
  },
  {
    id: 0,
    title: "AI-Assisted Testing & Debugging Workflows",
    short: "Built AI-assisted workflows for issue detection, root-cause analysis, fix iteration, and structured validation across UI, API, and database layers."
  },
  {
    id: 4,
    title: "Task Management Platform",
    short: "Built an internal task platform with recurring tasks, comments, notifications, summaries, and analytics for better team coordination."
  },
  {
    id: 6,
    title: "Platform Modernisation & Legacy Migration",
    short: "Modernised legacy storefronts and internal systems into more maintainable architectures without disrupting live business operations."
  },
];

const additionalWork: ProjectSummary[] = [
  {
    id: 7,
    title: "Frontend Modernisation",
    short: "Rebuilt customer-facing frontend architecture using Vue 3, Vite, and Astro to replace an aging stack and improve maintainability."
  },
  {
    id: 8,
    title: "Key Frontend Modules",
    short: "Delivered customer-facing modules including navigation, enquiry, collections, and checkout-related improvements across existing platforms."
  },
  {
    id: 9,
    title: "Shopify Storefront Work",
    short: "Developed and maintained customised Shopify storefronts aligned to business-specific branding and eCommerce requirements."
  },
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
        <h1 className="projects-title">Selected Work</h1>

        <ProjectGroup
          title="Flagship Personal Project"
          intro="Independent systems work focused on architecture, runtime reliability, broker integration, and AI-assisted engineering workflows."
          projects={flagshipProjects}
        />

        <ProjectGroup
          title="Commercial Systems & Platforms"
          intro="Higher-value commercial work centred on operational systems, lifecycle design, internal platforms, and AI-assisted engineering." 
          projects={commercialSystems}
        />

        <ProjectGroup
          title="Additional Commercial Work"
          intro="Supporting frontend, storefront, and platform work that contributed to broader modernisation and customer experience improvements."
          projects={additionalWork}
        />
      </section>
    </>
  );
}
