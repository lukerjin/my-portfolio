import React from "react";
import '../css/Capabilities.css';

export default function Capabilities(): React.JSX.Element {
    return (
        <section className="capabilities reveal">
            <div className="cap-card">
                <h3>AI Orchestration & Technical Direction</h3>
                <p>
                    I use AI as a structured engineering force multiplier rather than a novelty tool—setting architecture, dividing responsibilities across specialized agents, and keeping planning, implementation, testing, and review aligned with real system constraints.
                </p>
            </div>

            <div className="cap-card">
                <h3>System Architecture & Ownership Design</h3>
                <p>
                    Strong at turning messy, fast-growing systems into clearer architectures with explicit ownership boundaries, single sources of truth, deterministic runtime behavior, and operator-friendly recovery flows.
                </p>
            </div>

            <div className="cap-card">
                <h3>Legacy Modernisation & 0→1 Delivery</h3>
                <p>
                    Comfortable working at both ends of the spectrum: modernising legacy systems with historical baggage while also driving new 0→1 projects from concept to implementation with fast iteration and architectural discipline.
                </p>
            </div>

            <div className="cap-card">
                <h3>Production Execution & Debugging Depth</h3>
                <p>
                    Experienced in diagnosing deep runtime problems across state, lifecycle, broker integrations, and operational workflows—focusing on real mechanisms instead of surface-level patching or parameter tweaking.
                </p>
            </div>
        </section>
    );
}
