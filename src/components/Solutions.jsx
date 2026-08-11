import { Leaf, Wind, Recycle, Building2 } from 'lucide-react';

const Solutions = () => {
  const items = [
    { icon: <Leaf size={32} />, title: 'CO₂ Capture', desc: 'Alga uses CO₂ during photosynthesis, acting as a biological carbon sink.' },
    { icon: <Wind size={32} />, title: 'Oxygen Production', desc: 'Photosynthesis releases fresh oxygen back into the urban atmosphere.' },
    { icon: <Recycle size={32} />, title: 'Biomass Reuse', desc: 'Harvested alga can potentially be used for biofuels or fertilizers.' },
    { icon: <Building2 size={32} />, title: 'Cleaner Cities', desc: 'Integrating biotech into architecture creates sustainable urban ecosystems.' },
  ];

  return (
    <section id="solutions" style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">How Alga Helps</h2>
        <p className="section-subtitle">Understanding the science behind the simulation.</p>
        
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {items.map((item, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '15px', display: 'inline-block', padding: '15px', background: '#dcfce7', borderRadius: '50%' }}>{item.icon}</div>
              <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', textAlign: 'center' }}>
          {['City produces CO₂', 'CO₂ enters algae system', 'Photosynthesis occurs', 'Clean air + Biomass'].map((step, i) => (
            <div key={i} style={{ flex: '1 1 200px', maxWidth: '250px' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontWeight: 700 }}>0{i+1}</div>
              <p style={{ fontWeight: 600 }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;