import React, { useState, useEffect } from "react";

const roles: string[] = [
    "Full-Stack AI Developer",
    "eCommerce System Builder",
    "UI / UX Designer",
    "Warehouse System Architect",
    "Senior Frontend Engineer",
];

export default function TypingEffect(): React.JSX.Element {
    const [text, setText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const speed = 90;

    useEffect(() => {
        const role = roles[index];
        let t: NodeJS.Timeout;

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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
