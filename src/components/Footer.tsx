import React from 'react';
import '../css/Footer.css';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="footer reveal glass-card">
      <h2>Let’s Connect</h2>
      <p>
        I’m interested in senior full-stack, platform, and AI-assisted engineering roles focused on real systems,
        operational complexity, and meaningful product impact. If that sounds relevant, feel free to reach out.
      </p>
      <div className="footer-links">
        <a href="mailto:jc.jinwu@gmail.com">Email</a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Jin Wu. All rights reserved.</p>
    </footer>
  );
}
