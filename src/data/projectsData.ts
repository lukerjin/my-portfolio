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
    workflow?: string[];
    workflowImage?: ProjectAsset;
    assets?: ProjectAsset[];
    links?: ProjectLink[];
}

export type ProjectDetails = Record<number, Project>;

const projectDetails: ProjectDetails = {
    0: {
        title: "AI-Assisted Testing & Debugging Workflows",
        overview: "Built AI-assisted engineering workflows that went beyond simple code generation. The goal was to make issue investigation and delivery more systematic by combining automated issue detection, root-cause analysis, fix iteration, and structured validation across UI, backend, and database layers. This work turned AI from an ad-hoc helper into a repeatable engineering mechanism for faster and more reliable debugging.",
        features: [
            "AI-assisted issue detection across frontend and backend workflows",
            "Root-cause analysis support spanning UI, API, and database layers",
            "Structured fix iteration with validation before and after changes",
            "Browser automation and DOM-level inspection for repeatable debugging flows",
            "Playwright-assisted end-to-end checks for higher confidence in fixes"
        ],
        tech: ["Playwright", "Claude Code", "AI-Assisted Engineering", "Browser Automation", "Validation Workflows"],
        contribution: [
            "Designed practical AI-assisted debugging workflows instead of relying on one-off prompts",
            "Used automation to inspect browser state, reproduce issues, and validate fixes more consistently",
            "Combined frontend, API, and database checks to reduce shallow debugging and improve confidence",
            "Applied AI to accelerate investigation and implementation while keeping technical judgment under human control"
        ],
        outcome: [
            "Reduced iteration time for debugging and verification work",
            "Improved confidence in full-stack fixes through more structured validation",
            "Demonstrated a practical model for AI-assisted engineering in production-oriented environments"
        ]
    },
    1: {
        title: "Warehouse Management System",
        overview: "Designed and fully developed a custom Warehouse Management System for internal staff operations. The system was built around real warehouse workflows rather than generic admin CRUD, covering inventory handling, stocktaking, picking, packing, shipping, labelling, returns, and user workflow management. It later became integrated into a broader Vue-based admin platform to improve maintainability and long-term scalability.",
        features: [
            "Inventory, stocktaking, and transfer workflows",
            "Labelling and printing support for warehouse operations",
            "Picking, packing, and shipping flows for daily fulfilment",
            "Return handling and batch-based reverse logistics support",
            "User access, permissions, and staff workflow support",
            "Integration into a broader admin system for operational visibility"
        ],
        workflowImage: {
            title: "Warehouse Operational Workflow",
            image: "/my-portfolio/assets/wms/operational-workflow.png",
            caption: "End-to-end warehouse workflow covering inbound receiving, barcode generation, labelling, pallet/rack storage, inventory audit, order picking, stock deduction, shipping, and returns processing with logistics return handling."
        },
        tech: ["Vue 2", "Laravel", "MySQL", "REST APIs", "Operational Tooling"],
        contribution: [
            "Designed the system around real warehouse operations rather than abstract features",
            "Built both frontend and backend for the full workflow lifecycle",
            "Translated operational pain points into scalable internal tooling",
            "Integrated the warehouse platform into a larger admin environment",
            "Connected inventory, picking, shipping, returns, and reporting into one operator-friendly workflow"
        ],
        outcome: [
            "Delivered a production internal system used for day-to-day warehouse operations",
            "Improved operational efficiency across labelling, picking, shipping, inventory management, and returns handling",
            "Created a scalable base for further workflow and admin platform improvements"
        ]
    },
    2: {
        title: "Subscription Lifecycle Platform",
        overview: "Built a subscription system supporting recurring orders, flexible scheduling, and customer self-service management. The project was not just about adding a checkout option; it required clear lifecycle states, reliable order generation logic, scheduled processing, payment handling, and user-facing controls for frequency changes, pause/cancel flows, and immediate order requests while keeping backend behavior consistent and predictable.",
        features: [
            "Recurring order support with scheduled generation workflows",
            "Skip, reschedule, pause, and cancel flows for customer self-service",
            "Subscription lifecycle states and transition rules",
            "Backend order generation aligned with customer-facing controls",
            "Administrative visibility into subscription activity and state"
        ],
        workflowImage: {
            title: "Subscription Lifecycle Workflow",
            image: "/my-portfolio/assets/subscription/lifecycle-workflow.png",
            caption: "Subscription flow covering creation, secure payment setup, automated recurring-order generation, and subscriber self-service management including frequency updates, pause/cancel actions, and immediate-order requests."
        },
        tech: ["Vue", "Laravel", "MySQL", "eCommerce Systems", "State Management"],
        contribution: [
            "Designed subscription lifecycle rules and state transitions",
            "Built the frontend and backend workflows supporting customer self-service",
            "Implemented scheduled order generation and payment-driven recurring processing",
            "Ensured recurring order generation behaved consistently across subscription states",
            "Handled the complexity of lifecycle logic in a production eCommerce setting"
        ],
        outcome: [
            "Delivered a flexible subscription capability aligned to real customer behaviour",
            "Improved self-service experience while reducing manual operational handling",
            "Added a more structured and reliable recurring-order workflow to the platform"
        ]
    },
    3: {
        title: "Virtual Gift Card System",
        overview: "Built a full-stack virtual gift card system with end-to-end lifecycle management. The work covered purchase, activation, redemption, balance tracking, validation rules, and backend consistency across orders and transactions. The interesting part was not the UI alone, but the need to make lifecycle rules, redemption behaviour, stored-value accounting, and transactional integrity work together cleanly.",
        features: [
            "Gift card purchase and issuance flows",
            "Lifecycle-controlled activation after payment confirmation or manual approval",
            "Redemption handling with validation and usage rules",
            "Stored-value balance tracking with partial usage across orders",
            "Balance check and usage-history support",
            "Backend consistency across order and transaction records",
            "Business rule enforcement for gift card use cases"
        ],
        workflow: [
            "┌──────────────────────────────────────────────┐",
            "│ PHASE 1: Purchase │",
            "└──────────────────────────────────────────────┘",
            "User selects gift card product",
            "│",
            "▼",
            "Adds to cart → Checkout",
            "│",
            "▼",
            "Order completed",
            "│",
            "▼",
            "Generate unique gift card code",
            "│",
            "▼",
            "Create gift card record",
            "(amount, balance, status = pending)",
            "------------------------------------------------",
            "┌──────────────────────────────────────────────┐",
            "│ PHASE 2: Activation │",
            "└──────────────────────────────────────────────┘",
            "Payment confirmed / manual approval",
            "│",
            "▼",
            "Gift card becomes active",
            "│",
            "▼",
            "Notification sent to recipient",
            "(code + balance info)",
            "------------------------------------------------",
            "┌──────────────────────────────────────────────┐",
            "│ PHASE 3: Redemption │",
            "└──────────────────────────────────────────────┘",
            "User enters gift card code at checkout",
            "│",
            "▼",
            "System validates:",
            "- code exists",
            "- status is active",
            "- balance > 0",
            "│",
            "┌─┴──────────┐",
            "invalid        valid",
            "│              │",
            "▼              ▼",
            "show error     apply credit",
            "│",
            "▼",
            "reduce order total",
            "│",
            "▼",
            "place order",
            "│",
            "▼",
            "update remaining balance",
            "│",
            "▼",
            "if balance = 0 → mark as consumed",
            "------------------------------------------------",
            "┌──────────────────────────────────────────────┐",
            "│ PHASE 4: Balance Check │",
            "└──────────────────────────────────────────────┘",
            "User enters gift card code",
            "│",
            "▼",
            "System returns:",
            "- remaining balance",
            "- current status",
            "- usage history",
            "------------------------------------------------",
            "┌──────────────────────────────────────────────┐",
            "│ STATE MACHINE │",
            "└──────────────────────────────────────────────┘",
            "pending ──► active ──► consumed",
            "│",
            "└──► active (partial usage)",
            "------------------------------------------------",
            "┌──────────────────────────────────────────────┐",
            "│ CORE SYSTEM CAPABILITIES │",
            "└──────────────────────────────────────────────┘",
            "• Lifecycle-controlled activation (pending → active)",
            "• Stored-value balance tracking",
            "• Partial redemption across orders",
            "• Validation rules (prevent misuse)",
            "• Transaction consistency across system",
            "• End-to-end flow integrity"
        ],
        tech: ["Laravel", "MySQL", "eCommerce", "Transactions", "Full-Stack Development"],
        contribution: [
            "Designed the lifecycle model for virtual gift card behaviour",
            "Implemented both customer-facing and backend transaction flows",
            "Built stored-value balance handling with partial redemption across orders",
            "Ensured validation rules and data consistency across related systems",
            "Handled edge cases around activation, redemption logic, and transactional integrity"
        ],
        outcome: [
            "Delivered a complete virtual gift card capability for the platform",
            "Improved confidence in transaction handling, lifecycle consistency, and stored-value accounting",
            "Showed strong backend and state-management thinking in an eCommerce feature area"
        ]
    },
    4: {
        title: "Task Management Platform",
        overview: "Built a full-stack task management platform to improve workflow visibility and coordination across teams. The system supported task creation, recurring tasks, comments, activity logs, notifications, summarisation, and analytics. It was designed as a practical internal tool rather than a generic checklist app, with emphasis on visibility, coordination, and operational usefulness.",
        features: [
            "Task creation and assignment workflows",
            "Recurring task support for repeat operational work",
            "Comments and activity logs for collaborative context",
            "Email and Slack notifications for timely follow-up",
            "Summaries and analytics for workflow visibility"
        ],
        tech: ["Vue", "Laravel", "MySQL", "Slack", "Internal Tools"],
        contribution: [
            "Designed the platform around real coordination and visibility needs",
            "Built full-stack support for tasks, activity history, and notifications",
            "Added recurring-task logic and analytical visibility for operational use",
            "Delivered an internal workflow system that balanced usability with practical team needs"
        ],
        outcome: [
            "Improved visibility into team work and recurring operational tasks",
            "Reduced coordination friction through comments, logs, and notifications",
            "Created a more structured internal workflow layer for day-to-day execution"
        ]
    },
    5: {
        title: "AI-Orchestrated Quantitative Trading System",
        overview: "Designed, iterated, and debugged a real IBKR-connected quantitative trading platform spanning strategy research, candidate generation, execution runtime, broker synchronization, reconciliation, and operator recovery. What made the project distinctive was not just the trading stack itself, but the way it was developed: using OpenClaw to coordinate multiple specialized AI agents for planning, implementation, testing, auditing, and architecture synthesis. The project became a practical case study in AI-assisted systems engineering under real operational constraints.",
        features: [
            "IBKR-integrated execution runtime with live account, order, and position handling",
            "Research and candidate-generation pipeline separated from execution runtime",
            "Walk-forward analysis, offline backtesting, and QuantStats-based report generation",
            "Lane-isolated environments for local, ibkr_paper, and ibkr_live",
            "Order lifecycle management including reconcile, terminal convergence, and idempotent cancel handling",
            "OpenClaw-based multi-agent workflow for planner, developer, auditor, and operator-style collaboration",
            "Operator-facing runtime and dashboard visibility for state, fills, and recovery"
        ],
        tech: ["Python", "IBKR API", "OpenClaw", "Multi-Agent Workflows", "QuantStats", "State Machines"],
        contribution: [
            "Drove end-to-end system design across research, execution, reconciliation, and operator tooling",
            "Built validation flows using backtesting, walk-forward analysis, and report generation",
            "Designed and refined an AI collaboration workflow using specialized agents for planning, coding, testing, and review",
            "Investigated and fixed deep broker/runtime bugs such as ghost orders, conId drift, and lifecycle edge cases",
            "Defined stricter execution contracts around broker truth, desired state vs working state, and symbol-level lifecycle control",
            "Wrote runbooks, handoff contracts, and agent skills to make a complex engineering workflow more structured and repeatable"
        ],
        outcome: [
            "Built a production-style quantitative trading platform around real broker integration rather than toy backtests alone",
            "Turned opaque lifecycle bugs into explicit, diagnosable operational patterns",
            "Demonstrated a practical AI-assisted engineering workflow with OpenClaw and multiple specialized agents",
            "Established a cleaner architecture direction: broker-truth-first, event-driven, lane-isolated, and operator-friendly"
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
            },
            {
                title: "Walk-Forward Validation (WFA) Summary",
                url: "/my-portfolio/assets/quant-trading/reports/2026-03-12/wfa_validate/wfa_validate_summary.html",
                description: "Walk-forward validation summary report showing out-of-sample validation behaviour across rolling windows for the 2026-03-12 research run."
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
        title: "Platform Modernisation & Legacy Migration",
        overview: "Modernised legacy websites and internal systems into more maintainable technology stacks while preserving business continuity. This work involved untangling older frontend and backend structures, improving maintainability, and making room for further feature delivery without destabilising live business operations.",
        features: [
            "Migration away from aging frontend and admin patterns",
            "Improved maintainability across customer-facing and internal systems",
            "Architecture cleanup to support faster future delivery",
            "Preservation of live workflows during transition",
            "Practical modernisation with business continuity in mind"
        ],
        tech: ["Vue 3", "Vite", "Astro", "Laravel", "Migration Workflows"],
        contribution: [
            "Planned and executed modernisation work across legacy systems",
            "Balanced architectural improvement with production stability",
            "Reworked frontend and integration layers to make the platform easier to evolve",
            "Used AI-assisted workflows to speed up migration analysis and implementation"
        ],
        outcome: [
            "Improved maintainability and reduced friction in future development",
            "Helped preserve seamless business continuity during technology transitions",
            "Strengthened the platform foundation for ongoing delivery"
        ]
    },
    7: {
        title: "Frontend Modernisation",
        overview: "Rebuilt customer-facing pages using Vue 3, Vite, and Astro to replace an aging frontend stack. The goal was not only to refresh the UI, but to create a cleaner frontend foundation that improved maintainability, responsiveness, and integration with backend systems.",
        features: [
            "Customer-facing frontend rebuild",
            "Modern component-based architecture",
            "Responsive and faster user experience",
            "Cleaner integration with backend systems"
        ],
        tech: ["Vue 3", "Vite", "Astro", "SCSS"],
        contribution: [
            "Rebuilt frontend architecture using a more maintainable stack",
            "Integrated the new frontend with backend APIs and existing business flows",
            "Improved responsiveness and usability across customer-facing pages"
        ],
        outcome: [
            "Replaced an aging frontend foundation with a more modern and maintainable one",
            "Improved frontend performance and long-term development ergonomics"
        ]
    },
    8: {
        title: "Key Frontend Modules",
        overview: "Delivered and refined customer-facing modules across existing eCommerce websites, including navigation, enquiry, collection management, and checkout-related experiences. While these were not the most architecturally deep projects, they contributed directly to customer usability and day-to-day storefront quality.",
        features: [
            "Responsive navigation and mega menu work",
            "Customer enquiry module integration",
            "Collection and merchandising support",
            "Checkout and storefront UI refinements"
        ],
        tech: ["Vue", "Blade", "Laravel", "eCommerce Frontend"],
        contribution: [
            "Built and refined customer-facing modules within existing commercial systems",
            "Improved usability and integration between frontend and backend flows",
            "Supported broader storefront quality and feature delivery"
        ],
        outcome: [
            "Improved customer-facing experience across important storefront flows",
            "Delivered practical enhancements that supported the broader platform"
        ]
    },
    9: {
        title: "Shopify Storefront Work",
        overview: "Developed and maintained customised Shopify storefronts tailored to business-specific branding, catalog, and eCommerce requirements. This work focused on practical delivery and storefront adaptation rather than deep platform architecture.",
        features: [
            "Theme and template customisation",
            "Responsive storefront implementation",
            "Catalog and merchandising configuration",
            "Business-specific UI adjustments"
        ],
        tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
        contribution: [
            "Implemented and maintained customised Shopify storefront experiences",
            "Adapted templates and UI to business-specific branding and needs",
            "Supported practical storefront improvements and rollout"
        ],
        outcome: [
            "Delivered responsive Shopify storefronts aligned with business requirements",
            "Provided additional eCommerce delivery capability across multiple brands"
        ]
    }
};

export default projectDetails;
