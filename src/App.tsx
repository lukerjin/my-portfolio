import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import ScrollToTop from './hooks/useScrollToTop';

function App(): React.JSX.Element {
  return (
    <Router basename="/my-portfolio">
      <ScrollToTop />
      <header className="App-header">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Portfolio Highlights</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/education">Education</Link>
        </nav>
      </header>

      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;