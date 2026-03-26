import React from "react";
import '../css/Capabilities.css';

export default function Capabilities(): React.JSX.Element {
    return (
        <section className="capabilities reveal">
            <div className="cap-card">
                <h3>AI-Assisted Engineering & Automated Validation</h3>
                <p>
                    I use AI as an engineering multiplier for planning, implementation, debugging, root-cause analysis,
                    and structured validation across UI, API, and database layers—while keeping architecture, ownership,
                    and final technical judgment firmly under human control.
                </p>
            </div>

            <div className="cap-card">
                <h3>Operational Systems & Lifecycle Design</h3>
                <p>
                    I design systems around real operational workflows: subscriptions, warehouse processes, fulfilment,
                    task orchestration, internal admin tooling, and transaction lifecycles. The focus is always on clear
                    states, reliable flows, and software that behaves predictably in daily business use.
                </p>
            </div>

            <div className="cap-card">
                <h3>Platform Integration & Modernisation</h3>
                <p>
                    I modernise legacy systems and connect platforms across storefronts, admin systems, ERP, payments,
                    search, and operational tooling—improving maintainability, scalability, and business continuity
                    without losing sight of real production constraints.
                </p>
            </div>
        </section>
    );
}
