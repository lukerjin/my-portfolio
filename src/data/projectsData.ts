import { quantTradingTelegramAsset } from './quantTradingTelegramAsset';

export interface ProjectAsset {
    title: string;
    image: string;
    caption: string;
}

export interface ProjectLink {
    title: string;
    url: string;
    description: string;
}

export interface Project {
    title: string;
    overview: string;
    features: string[];
    tech: string[];
    contribution: string[];
    outcome: string[];
    assets?: ProjectAsset[];
    links?: ProjectLink[];
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
        title: "AI-Orchestrated Quantitative Trading System",
        overview: "Designed, iterated, and debugged a real IBKR-connected quantitative trading platform spanning strategy research, candidate generation, execution runtime, broker synchronization, reconciliation, and operator recovery. What made the project distinctive was not just the trading stack itself, but the way it was developed: using OpenClaw to coordinate multiple specialized AI agents for planning, implementation, testing, auditing, and architecture synthesis. The project became a practical case study in AI-assisted systems engineering under real operational constraints.",
        features: [
            "IBKR-integrated execution runtime with live account/order/position handling",
            "Research and candidate-generation pipeline separated from execution runtime",
            "Walk-forward analysis, offline backtesting, and QuantStats-based report generation for strategy evaluation",
            "Robustness and regime-aware thinking across strategy research, execution behavior, and architecture evolution",
            "Lane-isolated environments for local, ibkr_paper, and ibkr_live",
            "Order lifecycle management including shadow import, reconcile, terminal convergence, and idempotent cancel handling",
            "OpenClaw-based multi-agent workflow for planner, developer, auditor, and operator-style collaboration",
            "Forward architecture planning for QuantBeacon, a cleaner event-driven successor"
        ],
        tech: ["Python", "IBKR API", "OpenClaw", "Multi-Agent Workflows", "QuantStats", "State Machines"],
        contribution: [
            "Drove end-to-end system design across research, execution, reconciliation, and operator tooling",
            "Built and used research validation flows including backtesting, walk-forward analysis, and report generation to assess strategy behavior beyond simple point-in-time results",
            "Designed and refined an AI collaboration workflow using specialized agents for planning, coding, testing, and review",
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
        ],
        links: [
            {
                title: "QuantStats Baseline Report",
                url: "/my-portfolio/assets/quant-trading/reports/2026-02-24/baseline/quantstats.html",
                description: "Example offline baseline tearsheet showing backtesting output, risk metrics, and performance breakdown from the strategy research workflow."
            },
            {
                title: "Equity Curve Report",
                url: "/my-portfolio/assets/quant-trading/reports/2026-02-24/baseline/equity_curve.html",
                description: "Companion report focused on equity curve behavior for the same offline baseline run."
            },
            {
                title: "Drawdown Report",
                url: "/my-portfolio/assets/quant-trading/reports/2026-02-24/baseline/drawdown.html",
                description: "Drawdown-focused report used to reason about robustness and downside behavior."
            }
        ],
        assets: [
            {
                title: "OpenClaw Multi-Agent Workflow",
                image: "/my-portfolio/assets/quant-trading/discord-openclaw-agents.png",
                caption: "A real multi-agent workflow coordinated through OpenClaw, with specialized agents for planning, implementation, auditing, and operational support."
            },
            {
                title: "Live Trading Dashboard — Overview",
                image: "/my-portfolio/assets/quant-trading/live-dashboard-part1.png",
                caption: "Operator-facing live dashboard showing account health, open positions, pending orders, and lifecycle state in a broker-connected environment."
            },
            ...(quantTradingTelegramAsset ? [{
                title: "Telegram Trading Alerts",
                image: quantTradingTelegramAsset,
                caption: "Real-time Telegram notifications used to surface timely buy/sell actions, price updates, and runtime trading context outside the dashboard."
            }] : []),
            {
                title: "Live Trading Dashboard — Execution Detail",
                image: "/my-portfolio/assets/quant-trading/live-dashboard-part2.png",
                caption: "Detailed execution visibility including fills, commissions, lifecycle state, and recovery-relevant order information."
            },
            {
                title: "Runtime Decision Output",
                image: "/my-portfolio/assets/quant-trading/runtime-output.png",
                caption: "Example runtime output showing symbol-level decisions, gate outcomes, and execution lifecycle reasons rather than simple signal generation alone."
            }
        ]
    },
    6: {
        title: "AI-Assisted Legacy Migration & 0→1 Delivery",
        overview: "Led a practical AI-assisted engineering workflow across two very different kinds of work: migrating and modernising legacy systems with accumulated technical debt, and accelerating brand-new 0→1 project delivery. The work focused on using AI not as a gimmick, but as an engineering multiplier—speeding up analysis, implementation, validation, and documentation while still keeping architecture, ownership boundaries, and production constraints under human control.",
        features: [
            "AI-assisted migration work across older codebases with historical baggage and uneven structure",
            "0→1 project delivery support using orchestrated AI agents for planning, implementation, and review",
            "Faster iteration loops for feature design, code generation, debugging, and documentation",
            "Structured workflows that separated planning, coding, testing, and auditing responsibilities",
            "Practical use of OpenClaw-style multi-agent orchestration for real engineering work rather than isolated prompts"
        ],
        tech: ["OpenClaw", "AI Agent Workflows", "Legacy Migration", "System Design", "Full-Stack Delivery"],
        contribution: [
            "Applied AI-assisted workflows to modernise legacy systems without losing control of architecture and system ownership",
            "Used orchestrated agent roles to break complex work into planning, implementation, testing, and review tracks",
            "Accelerated 0→1 delivery by reducing iteration time on analysis, coding, debugging, and technical writing",
            "Kept human judgment focused on architecture direction, quality control, and business-critical decisions",
            "Turned AI from an ad-hoc coding helper into a repeatable engineering workflow"
        ],
        outcome: [
            "Improved delivery speed on both legacy modernisation and greenfield work",
            "Reduced manual grind on repetitive analysis, implementation, and documentation tasks",
            "Created a more structured model for AI-assisted software delivery with clearer role separation",
            "Demonstrated that AI agents can be used effectively for real migration and product work when paired with strong human technical direction"
        ]
    }
};

export default projectDetails;
