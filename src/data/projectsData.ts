export interface Project {
    title: string;
    overview: string;
    features: string[];
    tech: string[];
    contribution: string[];
    outcome: string[];
}

export type ProjectDetails = Record<number, Project>;

const projectDetails: ProjectDetails = {
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
        overview: "Independently developed and maintained two Shopify websites by fully customizing templates to align with company-specific branding and functionality.", features: [
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
    },
    5: {
        title: "AI-Orchestrated Quantitative Trading System (ai-trader)",
        overview: "Designed, iterated, and debugged a real IBKR-connected quantitative trading platform spanning strategy research, candidate generation, execution runtime, broker synchronization, reconciliation, and operator recovery. What made the project distinctive was not just the trading stack itself, but the way it was developed: using OpenClaw to coordinate multiple specialized AI agents for planning, implementation, testing, auditing, and architecture synthesis. The project became a practical case study in AI-assisted systems engineering under real operational constraints.",
        features: [
            "IBKR-integrated execution runtime with live account/order/position handling",
            "Research and candidate-generation pipeline separated from execution runtime",
            "Lane-isolated environments for local, ibkr_paper, and ibkr_live",
            "Order lifecycle management including shadow import, reconcile, terminal convergence, and idempotent cancel handling",
            "OpenClaw-based multi-agent workflow for planner, developer, auditor, and operator-style collaboration",
            "Forward architecture planning for QuantBeacon, a cleaner event-driven successor"
        ],
        tech: ["Python", "IBKR API", "OpenClaw", "Multi-Agent Workflows", "JSONL/Event Logs", "State Machines"],
        contribution: [
            "Drove end-to-end system design across research, execution, reconciliation, and operator tooling",
            "Designed and refined an AI collaboration workflow using specialized agents for planning, coding, testing, auditing, and documentation",
            "Investigated and fixed deep broker/runtime bugs such as ghost orders, cannot-short failures, conId drift, and cross-client visibility splits",
            "Defined stricter execution contracts around broker truth, desired state vs working state, and symbol-level lifecycle control",
            "Wrote runbooks, handoff contracts, and agent skills to make a complex engineering workflow more structured and repeatable",
            "Started the clean-slate successor architecture (QuantBeacon) to reduce legacy complexity and state ambiguity"
        ],
        outcome: [
            "Built a production-style quantitative trading platform around real broker integration rather than toy backtests alone",
            "Turned opaque lifecycle bugs into explicit, diagnosable operational patterns",
            "Demonstrated a practical AI-assisted engineering workflow with OpenClaw and multiple specialized agents, not just one-off code generation",
            "Established a cleaner architecture direction: broker-truth-first, event-driven, lane-isolated, and operator-friendly",
            "Showed system-level engineering across planning, debugging, runtime design, recovery, and AI collaboration"
        ]
    }
};

export default projectDetails;
