import React, { useState, useEffect } from "react";

const roles = [
    "Full-Stack AI Developer",
    "eCommerce System Builder",
    "UI / UX Designer",
    "Warehouse System Architect",
    "Senior Frontend Engineer",
];

export default function TypingEffect() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = 90;

    useEffect(() => {
        const role = roles[index];
        let t;

        if (!isDeleting && text.length < role.length) {
            t = setTimeout(() => setText(role.slice(0, text.length + 1)), speed);
        } else if (isDeleting && text.length > 0) {
            t = setTimeout(() => setText(role.slice(0, text.length - 1)), speed / 2);
        } else if (!isDeleting && text.length === role.length) {
            t = setTimeout(() => setIsDeleting(true), 2000); // Pause longer at end
        } else if (isDeleting && text.length === 0) {
            setIsDeleting(false);
            setIndex((index + 1) % roles.length);
        }
        return () => clearTimeout(t);
    }, [text, isDeleting, index]);

    return (
        <h1>
            <span className="hero-name">I'm <strong>Jin Wu</strong></span>
            <div className="hero-role-container">
                <span className="animated-role">{text}</span>
                <span className="cursor"></span>
            </div>
        </h1>
    );
}
