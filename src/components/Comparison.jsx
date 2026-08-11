import { ArrowRight, Check, X } from 'lucide-react';

const Comparison = () => {
  return (
    <section style={{ padding: '60px 0', background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">The Alga Difference</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '30px', marginTop: '40px' }}>
          
          <div className="card" style={{ flex: 1, minWidth: '280px', borderLeft: '4px solid #ef4444' }}>
            <h3 style={{ color: '#ef4444', marginBottom: '15px' }}>WITHOUT ALGA</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['High CO₂ Levels', 'Poor Air Quality', 'Heat Island Effect'].map(t => (
                <li key={t} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><X size={16} color="#ef4444"/> {t}</li>
              ))}
            </ul>
          </div>

          <ArrowRight size={32} color="var(--text-gray)" />

          <div className="card" style={{ flex: 1, minWidth: '280px', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>WITH YOUR SYSTEM</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Reduced Carbon Footprint', 'Fresh Oxygen Supply', 'Sustainable Biomass'].map(t => (
                <li key={t} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Check size={16} color="var(--primary)"/> {t}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;