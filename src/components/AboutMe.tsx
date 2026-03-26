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
          I’m a senior full-stack engineer focused on operational systems, internal platforms, and AI-assisted engineering workflows.
          Over the past 10+ years, I’ve built software for real business operations across eCommerce, warehouse, fulfilment,
          subscriptions, and internal tooling—turning messy workflows into maintainable systems with clear lifecycle rules,
          reliable integrations, and practical business impact.
        </p>

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

        {activeTab === 'Skills' && (
          <ul className="about-list">
            <li><strong>Frontend:</strong> Vue 2/3, React, Angular, TypeScript, Astro, Vite, Tailwind, Vuetify, Ant Design</li>
            <li><strong>Backend:</strong> Node.js, PHP/Laravel, Python, MySQL, PostgreSQL, REST APIs</li>
            <li><strong>Platforms & Integrations:</strong> Shopify, NetSuite ERP, Algolia, Amazon, Braze, Rithum, Primer, Zoho</li>
            <li><strong>AI / LLM Work:</strong> AI-assisted prototyping, debugging, refactoring, workflow design, automated validation, and agent-based tool orchestration</li>
            <li><strong>Testing & Automation:</strong> Playwright, browser automation, UI/API/DB validation, structured debugging workflows</li>
            <li><strong>DevOps:</strong> AWS, Docker, GitHub, Jenkins, CI/CD</li>
          </ul>
        )}

        {activeTab === 'Education' && (
          <ul className="about-list">
            <li>Master of Information Technology (Extended) - University of Technology Sydney</li>
          </ul>
        )}

        {activeTab === 'Experience' && (
          <ul className="about-list">
            <li>CGA Trading Pty Ltd - Full Stack Developer | AI Agent Engineer (2019-Present)</li>
            <li>Deluxe Products Pty Ltd - Full Stack Developer (2015-2019)</li>
          </ul>
        )}
      </div>
    </section>
  );
}
