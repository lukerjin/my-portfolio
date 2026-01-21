import React, { useState } from 'react';
import '../css/AboutMe.css';
import CoffeeImg from '../assets/coffee.png';

export default function AboutMe(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('Skills');

  return (
    <section className="about">
      <div className="about-image">
        <img src={CoffeeImg} alt="Coffee Time" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a full-stack web developer with 10+ years of experience building and modernising production-level web applications,
          with a strong passion for vibe coding and building clean, maintainable, and high-performance systems.
        </p>

        {/* Tabs */}
        <div className="about-tabs">
          {['Skills', 'Education', 'Experience'].map(tab => (
            <span
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Skills' && (
          <ul className="about-list">
            <li><strong>Front-End:</strong> Vue, React, Angular, TypeScript, Tailwind, Astro, Vite, Vuetify, Ant Design</li>
            <li><strong>Back-End:</strong> Node.js, Python, PHP (Laravel), MySQL, PostgreSQL</li>
            <li><strong>DevOps:</strong> Docker, Git, Jenkins</li>
            <li><strong>UX/UI:</strong> Figma, Wireframing, Prototyping</li>
            <li><strong>AI-Assisted Development Tools:</strong> ChatGPT, Claude, Gemini</li>
            <li><strong>Vibe Coding:</strong> Antigravity, Codex</li>
          </ul>
        )}

        {activeTab === 'Education' && (
          <ul className="about-list">
            <li>Master of Information Technology (Extended) - University of Technology Sydney</li>
          </ul>
        )}

        {activeTab === 'Experience' && (
          <ul className="about-list">
            <li>CGA Trading Pty Ltd - Full Stack Developer (2019-Present)</li>
            <li>Deluxe Products Pty Ltd - Full Stack Developer (2015-2019)</li>
          </ul>
        )}
      </div>
    </section>
  );
}