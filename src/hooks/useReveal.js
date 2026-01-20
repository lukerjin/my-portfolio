import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}