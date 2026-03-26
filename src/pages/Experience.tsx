import React from 'react';
import '../css/Experience.css';

const experienceData = [
  {
    company: 'CGA Trading Pty Ltd',
    role: 'Full Stack Developer | AI Agent Engineer',
    period: 'Nov 2019 – Present',
    location: 'Regents Park, NSW',
    highlights: [
      'Built and evolved operational systems across warehouse, fulfilment, subscriptions, internal admin tooling, and customer-facing eCommerce workflows.',
      'Delivered higher-complexity systems including a warehouse management platform, subscription lifecycle workflows, virtual gift card capabilities, and internal task tooling.',
      'Applied AI-assisted engineering workflows for issue detection, root-cause analysis, debugging, automated validation, migration support, and implementation acceleration.',
      'Modernised legacy websites and internal systems into more maintainable architectures while preserving business continuity.',
      'Worked across frontend, backend, integrations, and operational workflows to translate business pain points into production-grade solutions.'
    ]
  },
  {
    company: 'Deluxe Products Pty Ltd',
    role: 'Full Stack Developer',
    period: 'Nov 2015 – Oct 2019',
    location: 'Wetherill Park, NSW',
    highlights: [
      'Delivered customer-facing eCommerce features including one-page checkout, staff checkout, product pages, and review systems.',
      'Integrated platforms with NetSuite ERP, CMS, and warehouse automation flows to support order, inventory, and fulfilment operations.',
      'Designed and implemented an end-to-end warehouse automation solution from ordering through shipping, reducing labour costs by approximately $100K per year.',
      'Led a small development team while maintaining delivery quality across multiple concurrent projects.',
      'Contributed to measurable commercial outcomes, including support for digital initiatives linked to 37% revenue growth.'
    ]
  }
];

export default function Experience(): React.JSX.Element {
  return (
    <section className="experience-page">
      <div className="glass-card experience-hero">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">
          10+ years building production systems, operational platforms, and customer-facing products.
        </p>
        <p className="experience-intro">
          My work sits at the intersection of full-stack delivery, business workflow design, platform integration,
          and practical system evolution. I’m strongest when the problem involves real operational complexity rather than isolated feature tickets.
        </p>
      </div>

      <div className="experience-timeline">
        {experienceData.map((job) => (
          <article className="glass-card experience-card" key={`${job.company}-${job.period}`}>
            <div className="experience-header">
              <div>
                <h2>{job.company}</h2>
                <h3>{job.role}</h3>
              </div>
              <div className="experience-meta">
                <span>{job.period}</span>
                <span>{job.location}</span>
              </div>
            </div>

            <ul className="experience-list">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="glass-card experience-side-notes">
        <div className="experience-note">
          <h2>Selected Focus Areas</h2>
          <ul>
            <li>Operational systems and internal tooling</li>
            <li>Lifecycle-heavy commerce features</li>
            <li>Platform integration and legacy modernisation</li>
            <li>AI-assisted engineering, testing, and debugging workflows</li>
          </ul>
        </div>

        <div className="experience-note">
          <h2>Education</h2>
          <p><strong>Master of Information Technology (Extended)</strong></p>
          <p>University of Technology Sydney</p>
        </div>
      </section>
    </section>
  );
}
