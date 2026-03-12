import React from "react";
import { Link } from "react-router-dom";
import '../css/FeaturedProjects.css';

interface FeaturedProject {
    id: number;
    title: string;
    description: string;
    tags: string[];
    badge?: string;
    kicker?: string;
}

const professionalProjects: FeaturedProject[] = [
    {
        id: 1,
        title: "Warehouse Management System",
        description: "A fully-featured WMS.",
        tags: ["Angular", "Vue 2", "Laravel", "MySQL"],
    },
    {
        id: 2,
        title: "Frontend Modernisation",
        description: "Frontend rebuild using Vue 3 + Vite + Astro.",
        tags: ["Vue 3", "Vite", "Astro", "Laravel"],
    },
    {
        id: 3,
        title: "Key Frontend Modules",
        description: "Mega Menu, Subscription workflow, Customer enquiry module, Collections.",
        tags: ["Vue 3", "Laravel", "Blade"],
    },
    {
        id: 4,
        title: "Shopify Websites",
        description: "Custom Shopify templates.",
        tags: ["Shopify", "HTML/CSS", "Liquid"],
    },
    {
        id: 6,
        title: "AI-Assisted Legacy Migration & 0→1 Delivery",
        description: "Applied AI-assisted development to both modernise legacy systems and accelerate new product delivery through orchestrated agent workflows.",
        tags: ["AI Engineering", "Migration", "OpenClaw", "0→1 Delivery"],
    },
];

const personalProjects: FeaturedProject[] = [
    {
        id: 5,
        title: "AI-Orchestrated Quant Trading System",
        kicker: "Personal flagship project",
        badge: "OpenClaw x Multi-Agent",
        description: "Built a real IBKR-connected trading platform while orchestrating AI agents through OpenClaw for planning, implementation, debugging, architecture design, and system review.",
        tags: ["OpenClaw", "Multi-Agent", "IBKR API", "Trading Systems"],
    },
];

function FeaturedRow({ title, intro, projects, variant = "default" }: { title: string; intro: string; projects: FeaturedProject[]; variant?: "default" | "flagship" }): React.JSX.Element {
    return (
        <div className="featured-group">
            <div className="featured-group-header">
                <h3>{title}</h3>
                <p>{intro}</p>
            </div>

            <div className={variant === "flagship" ? "featured-flagship-grid" : "featured-scroll"}>
                {projects.map((proj) => (
                    <div className={`featured-card ${variant === "flagship" ? "featured-card--flagship" : ""}`.trim()} key={proj.id}>
                        {proj.kicker ? <div className="featured-kicker">{proj.kicker}</div> : null}
                        <div className="featured-card-header">
                            <h3>{proj.title}</h3>
                            {proj.badge ? <span className="featured-badge">{proj.badge}</span> : null}
                        </div>
                        <p>{proj.description}</p>

                        <div className="tags">
                            {proj.tags.map(tag => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>

                        <Link to={`/projects/${proj.id}`} className="btn">
                            View Project
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function FeaturedProjects(): React.JSX.Element {
    return (
        <section className="featured reveal">
            <div className="featured-projects-title">
                <h2>Portfolio Highlights</h2>
                <Link to={`/projects`} className="btn ghost">
                    View All
                </Link>
            </div>

            <FeaturedRow
                title="Professional Projects"
                intro="Selected company-facing systems, storefront work, and internal platforms built for real business operations."
                projects={professionalProjects}
            />

            <FeaturedRow
                title="Personal Projects"
                intro="Independent system design and engineering work driven by architecture, experimentation, technical depth, and AI-assisted collaboration."
                projects={personalProjects}
                variant="flagship"
            />
        </section>
    );
}
