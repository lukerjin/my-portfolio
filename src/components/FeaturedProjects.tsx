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
        id: 0,
        title: "AI-Assisted Testing & Debugging Workflows",
        description: "Built AI-assisted engineering workflows for issue detection, root-cause analysis, fix iteration, and structured validation across UI, backend, and database layers.",
        tags: ["AI Engineering", "Testing", "Debugging", "Validation"],
    },
    {
        id: 1,
        title: "Warehouse Management System",
        description: "Designed and built a custom internal WMS covering labelling, picking, shipping, inventory, and staff workflows for day-to-day operations.",
        tags: ["Operational Systems", "Vue", "Laravel", "Workflow Design"],
    },
    {
        id: 2,
        title: "Subscription Lifecycle Platform",
        description: "Built a recurring-order subscription system with lifecycle states, skip/reschedule/cancel flows, customer self-service, and order generation logic.",
        tags: ["Lifecycle Design", "Subscriptions", "eCommerce", "State Management"],
    },
    {
        id: 3,
        title: "Virtual Gift Card System",
        description: "Built a full-stack gift card platform covering purchase, redemption, validation rules, and backend consistency across orders and transactions.",
        tags: ["Transactions", "Lifecycle Rules", "Backend", "eCommerce"],
    },
    {
        id: 4,
        title: "Task Management Platform",
        description: "Built an internal task platform with recurring tasks, comments, activity logs, notifications, summaries, and analytics for team coordination.",
        tags: ["Internal Tools", "Notifications", "Analytics", "Workflow"],
    },
    {
        id: 6,
        title: "Platform Modernisation & Legacy Migration",
        description: "Modernised legacy storefronts and internal systems into more maintainable architectures while preserving business continuity and production stability.",
        tags: ["Modernisation", "Migration", "Architecture", "Business Continuity"],
    },
];

const personalProjects: FeaturedProject[] = [
    {
        id: 5,
        title: "AI-Orchestrated Quant Trading System",
        kicker: "Personal flagship project",
        badge: "OpenClaw x Multi-Agent",
        description: "Built a real IBKR-connected trading platform while coordinating AI agents for planning, implementation, testing, debugging, architecture design, and operator-oriented system hardening.",
        tags: ["OpenClaw", "Multi-Agent", "IBKR API", "Runtime Reliability"],
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
                <h2>Selected Work</h2>
                <Link to={`/projects`} className="btn ghost">
                    View All
                </Link>
            </div>

            <FeaturedRow
                title="Flagship Personal Project"
                intro="Independent systems work focused on runtime design, broker integration, AI-assisted engineering workflows, and operator-friendly reliability." 
                projects={personalProjects}
                variant="flagship"
            />

            <FeaturedRow
                title="Commercial Systems & Platforms"
                intro="Production systems built for real business operations, internal workflows, customer lifecycle management, and architecture modernisation."
                projects={professionalProjects}
            />
        </section>
    );
}
