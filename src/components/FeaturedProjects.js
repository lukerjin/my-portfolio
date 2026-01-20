import { Link } from "react-router-dom";

const featuredProjects = [
  {
    id: 1,
    title: "Warehouse Management System",
    description: "A fully-featured WMS.",
    tags: ["Angular", "Vue 2", "Laravel", "MySQL"],
  },
  {
    id: 2,
    title: "Frontend Modernisation",
    description: "Frontend rebuild using Vue 3 + Vite + Astro.",
    tags: ["Vue 3", "Vite", "Astro", "Laravel"],
  },
  {
    id: 3,
    title: "Key Frontend Modules",
    description: "Mega Menu, Subscription workflow, Customer enquiry module, Collections.",
    tags: ["Vue 3", "Laravel", "Blade"],
  },
  {
    id: 4,
    title: "Shopify Websites",
    description: "Custom Shopify templates.",
    tags: ["Shopify", "HTML/CSS", "Liquid"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured reveal">
      <h2 className="featured-projects-title">Portfolio Highlights
         <Link to={`/projects`} className="btn ghost">
            View All
          </Link>
      </h2>

      <div className="featured-scroll">
        {featuredProjects.map((proj) => (
         <div className="featured-card" key={proj.id}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            <div className="tags">
              {proj.tags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>

            <Link to={`/projects/${proj.id}`} className="btn">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}