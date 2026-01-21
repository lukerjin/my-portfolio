import React from "react";
import '../css/Capabilities.css';

export default function Capabilities(): React.JSX.Element {
    return (
        <section className="capabilities reveal">
            <div className="cap-card">
                <h3>Large-Scale System Architecture & Workflow</h3>
                <p>
                    Architected a fully customised Warehouse Management System supporting
                    inventory, stocktaking, picking, packing, and role-based workflows,
                    while streamlining operations with task assignment, barcode-driven picking,
                    packing validation, labelling, and full audit trails.
                </p>
            </div>

            <div className="cap-card">
                <h3>eCommerce Development & Shopify Expertise</h3>
                <p>
                    Extensive experience in full-stack eCommerce development, including fully customised, responsive online stores and Shopify websites.
                </p>
            </div>

            <div className="cap-card">
                <h3>System Migration & Backward Compatibility</h3>
                <p>
                    Migrated production systems from Angular + Laravel 5.8 to Vue + Laravel 8.12
                    while maintaining continuous operations and shared databases.
                </p>
            </div>
        </section>
    );
}
