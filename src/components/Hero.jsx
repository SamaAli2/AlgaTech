import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ padding: '80px 0', background: 'linear-gradient(to bottom, var(--white), var(--bg-light))' }}>
      <div className="container hero-content" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '20px' }}>
            Build a <span style={{ color: 'var(--primary)' }}>cleaner</span><br />tomorrow, today.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '30px', maxWidth: '500px' }}>
            Explore how alga technology can reduce carbon pollution. 
            Build your own solution and see the estimated environmental impact.
          </p>
          <button className="btn-primary" onClick={() => document.getElementById('simulator').scrollIntoView({behavior:'smooth'})}>
            Start Simulation <ArrowRight size={18} />
          </button>
        </div>

        <div style={{ flex: 1, height: '300px', position: 'relative', background: '#e0f2fe', borderRadius: '20px', overflow: 'hidden', border: '2px solid var(--primary-light)' }}>
          <div style={{ position: 'absolute', top: '20px', right: '20px', width: '50px', height: '50px', background: '#fbbf24', borderRadius: '50%', boxShadow: '0 0 20px #fbbf24' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: '#94a3b8', clipPath: 'polygon(0% 100%, 0% 40%, 10% 40%, 10% 20%, 25% 20%, 25% 60%, 40% 60%, 40% 10%, 60% 10%, 60% 50%, 80% 50%, 80% 30%, 100% 30%, 100% 100%)' }}></div>
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', gap: '10px' }}>
            {[1,2,3].map(i => (
              <div key={i} style={{ width: '40px', height: '80px', background: 'rgba(5, 150, 105, 0.8)', borderRadius: '20px 20px 0 0', animation: 'pulse-green 3s infinite', animationDelay: `${i*0.5}s` }}></div>
            ))}
          </div>
          <div style={{ position: 'absolute', top: '40%', left: '30%' }} className="particle-co2">CO₂</div>
          <div style={{ position: 'absolute', top: '30%', left: '50%' }} className="particle-o2">O₂</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;