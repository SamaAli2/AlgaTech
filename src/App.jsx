import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import styles from './home.module.css';
import styles from './about.module.css';
import styles from './contact.module.css';
export default function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav >
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link> <Link to="/contact">Contact</Link>
      </nav>
      {/* Page Content Router */}
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}