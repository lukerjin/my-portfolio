import React from "react";
import '../css/Capabilities.css';

export default function Capabilities(): React.JSX.Element {
    return (
        <section className="capabilities reveal">
            <div className="cap-card">
                <h3>AI Orchestration & AI-Assisted Engineering</h3>
                <p>
                    Able to use AI as a practical engineering multiplier for planning, implementation, debugging, review, and documentation—while keeping architecture, ownership, and final technical judgment under control.
                </p>
            </div>

            <div className="cap-card">
                <h3>System Architecture, Workflow & Migration</h3>
                <p>
                    Architected and evolved complex production systems spanning inventory, stocktaking, picking, packing, role-based workflows, and operational tooling, while also leading framework migrations and backward-compatible transitions without disrupting live business operations.
                </p>
            </div>

            <div className="cap-card">
                <h3>eCommerce Development & Shopify Expertise</h3>
                <p>
                    Extensive experience in full-stack eCommerce development, including fully customised, responsive online stores and Shopify websites.
                </p>
            </div>
        </section>
    );
}
