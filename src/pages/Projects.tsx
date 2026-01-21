import React from "react";
import { Link } from "react-router-dom";
import '../css/Projects.css';

interface ProjectSummary {
  id: number;
  title: string;
  short: string;
}

const projects: ProjectSummary[] = [
  { id: 1, title: "Warehouse Management System", short: "A fully-featured WMS used by staff to manage inventory, picking, packing, and workflow operations efficiently." },
  { id: 2, title: "Frontend Modernisation", short: "Frontend rebuild using Vue 3 + Vite + Astro." },
  { id: 3, title: "Key Frontend Modules", short: "Mega Menu, Subscription workflow, Customer enquiry module, Collections." },
  { id: 4, title: "Shopify Websites", short: "Custom Shopify templates." }
];

export default function Projects(): React.JSX.Element {
  return (
    <>
      <section className="projects-page">
        <h1 className="projects-title">Portfolio Highlights</h1>

        {projects.map(p => (
          <article className="project-story" key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.short}</p>
            <Link to={`/projects/${p.id}`} className="btn ghost">View Details</Link>
          </article>
        ))}
      </section>
    </>
  );
}