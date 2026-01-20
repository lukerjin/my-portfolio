import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer reveal glass-card">
      <h2>Let's Connect</h2>
      <p>
        I'm currently looking for new opportunities, my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="footer-links">
        <a href="mailto:jc.jinwu@gmail.com">Email</a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Jin Wu. All rights reserved.</p>
    </footer>
  );
}