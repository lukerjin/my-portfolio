import React from "react";
import "./App.css";

const projects = [
  {
    title: "Project One",
    description: "A cool project using React and API integration.",
    link: "https://github.com/<your-username>/project-one"
  },
  {
    title: "Project Two",
    description: "Another awesome project demonstrating front-end skills.",
    link: "https://github.com/<your-username>/project-two"
  },
  {
    title: "Project Three",
    description: "Full-stack app with Node.js backend and React frontend.",
    link: "https://github.com/<your-username>/project-three"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <p>Hi! I'm <strong>Your Name</strong>, a React Developer.</p>
      </header>
      <main>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>© 2026 Your Name</p>
      </footer>
    </div>
  );
}

export default App;