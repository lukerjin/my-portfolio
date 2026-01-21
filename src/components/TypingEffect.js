import React, { useState, useEffect } from "react";

const roles = [
    "Full Stack Developer",
    "eCommerce System Builder",
    "Warehouse System Architect",
    "Senior Frontend Engineer"
];

export default function TypingEffect() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = 90;
    const cursorShapes = ["■", "□", "▣", "▤", "▥", "▦"];

    // Random cursor shape on each render or fixed? 
    // For stability let's just pick one or rotate. 
    // The original code re-randomized on every render which might cause hydration mismatch or flicker 
    // if not careful, but basic implementation here.
    const [cursor, setCursor] = useState("■");

    useEffect(() => {
        setCursor(cursorShapes[Math.floor(Math.random() * cursorShapes.length)]);
    }, [text]); // Change cursor when text changes for effect

    useEffect(() => {
        const role = roles[index];
        let t;

        if (!isDeleting && text.length < role.length) {
            t = setTimeout(() => setText(role.slice(0, text.length + 1)), speed);
        } else if (isDeleting && text.length > 0) {
            t = setTimeout(() => setText(role.slice(0, text.length - 1)), speed / 2);
        } else if (!isDeleting && text.length === role.length) {
            t = setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text.length === 0) {
            setIsDeleting(false);
            setIndex((index + 1) % roles.length);
        }
        return () => clearTimeout(t);
    }, [text, isDeleting, index]);

    return (
        <h1>
            I'm <strong>Jin Wu</strong><br />
            <span className="animated-role">{text}</span>
            <span className="cursor">{cursor}</span>
        </h1>
    );
}
