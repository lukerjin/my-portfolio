import React from "react";
import { useParams, Link } from "react-router-dom";
import '../css/ProjectDetail.css';

const projectDetails = {
  1: {
    title: "Warehouse Management System",
    overview: `Designed and fully developed a comprehensive Warehouse Management System (WMS) for internal staff operations. This system is fully customised, covering inventory management, order processing, stocktaking, packing, and user workflow management.`,
    features: [
      "User & Access Management (QR login, permissions, multi-language)",
      "Dashboard & Workflow (task assignment, stats board)",
      "Inventory & Stock Management (CRUD, stocktaking, transfers)",
      "Labelling & Printing (bulk, tracking)",
      "Order Processing & Packing (barcode scanning, multi-courier)"
    ],
    tech: ["Vue 2", "Laravel 8.12", "MySQL", "RESTful APIs"],
    contribution: [
      "Sole developer of full system lifecycle",
      "Frontend + backend development",
      "Workflow optimisation for multiple warehouses"
    ],
    outcome: [
      "Comprehensive WMS for full warehouse operations",
      "End-to-end WMS for warehouse staff",
      "Seamless migration to modern admin platform",
      "Improved efficiency in warehouse operations"
    ]
  },
  2: {
    title: "Frontend Modernisation",
    overview: "Rebuilt the customer pages of TonerCity using Vue 3, Vite, and Astro, replacing the legacy Angular 2 frontend. Integrated with Laravel backend for unified customer/order management.",
    features: [
      "Customer pages modernisation",
      "Integration with Laravel backend",
      "Improved responsiveness and interactivity"
    ],
    tech: ["Vue 3", "Vite", "Astro", "SCSS"],
    contribution: [
      "Rebuilt frontend architecture",
      "Integrated frontend with backend APIs",
      "Implemented responsive interactive components"
    ],
    outcome: [
      "Modern frontend replacing legacy Angular 2",
      "Unified customer/order management",
      "Fully responsive UI"
    ]
  },
  3: {
    title: "Key Frontend Modules",
    overview: "Developed, maintained, and upgraded existing e-commerce websites, improving functionality, UI, and overall user experience.",
    features: [
      "Responsive Mega Menu with desktop & mobile support",
      "Subscription product workflow",
      "Customer enquiry module integration",
      "Product collection management",
      "Refined Vue-based checkout UI"
    ],

    tech: [
      "Vue 3", 
      "Blade templates", 
      "Laravel backend", 
      "MySQL"
    ],

    contribution: [
      "Developed responsive Mega Menu component",
      "Integrated subscription workflow",
      "Implemented customer enquiry module",
      "Refined checkout UI with Vue",
      "Managed product collections",
      "Polished UI & enhanced UX"
    ],

    outcome: [
      "Improved site navigation and usability",
      "Seamless integration between Vue and Blade interfaces",
      "Enhanced overall user experience"
    ]
  },
  4: {
    title: "Shopify Websites",
    overview: "Independently developed and maintained two Shopify websites by fully customizing templates to align with company-specific branding and functionality.",    features: [
      "Template customisation",
      "Responsive design",
      "Product/catalog management"
    ],
    tech: ["Shopify", "Liquid", "HTML/CSS/JS"],
    contribution: [
      "Customised templates",
      "Configured catalogs and storefront",
      "Polished UI and enhanced UX "
    ],
    outcome: [
      "Two fully functional responsive sites",
      "Enhanced customer engagement",
      "Efficient backend management"
    ]
  }
};

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