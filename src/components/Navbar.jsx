import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav style={{ background: 'var(--white)', boxShadow: 'var(--shadow)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <Leaf size={28} color="var(--primary)" />
          <div>
            <h1 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-dark)' }}>AlgaTech</h1>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-gray)' }}>Clean Air. Green Future.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-nav">
          {['Home', 'Simulator', 'Solutions', 'About'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} 
              style={{ background: 'none', fontWeight: 500, color: 'var(--text-dark)' }}>
              {item}
            </button>
          ))}
          <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Login</button>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} 
          style={{ display: 'none', background: 'none' }}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div style={{ background: 'var(--white)', padding: '20px', borderTop: '1px solid #eee' }}>
          {['Home', 'Simulator', 'Solutions', 'About'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} 
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 0', background: 'none' }}>
              {item}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width: 768px) { 
          .desktop-nav { display: none !important; } 
          .mobile-toggle { display: block !important; } 
        }
      `}</style>
    </nav>
  );
};

export default Navbar;