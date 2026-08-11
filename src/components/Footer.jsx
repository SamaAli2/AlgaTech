import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#022c22', color: '#9ca3af', padding: '40px 0', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <Leaf size={24} color="var(--primary)" />
          <span style={{ color: 'white', fontWeight: 700, fontSize: '1.2rem' }}>Algae City</span>
        </div>
        <p style={{ fontSize: '0.9rem' }}>© 2026 AlgaTech Simulation. For educational purposes only.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: 0.6 }}>Disclaimer: Calculations are simulated estimates for demonstration.</p>
      </div>
    </footer>
  );
};

export default Footer;