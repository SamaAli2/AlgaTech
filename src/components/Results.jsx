import { TrendingDown, TrendingUp, Sprout, Award } from 'lucide-react';

const Results = ({ data }) => {
  const getMessage = (score) => {
    if (score >= 80) return "Excellent! Your city is becoming greener.";
    if (score >= 60) return "Good progress! You can improve the system.";
    if (score >= 40) return "Your city needs more algae systems.";
    return "Pollution is still high. Try increasing the system.";
  };

  return (
    <div style={{ animation: 'enter 0.5s ease-out' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--primary-dark)' }}>Simulation Complete! 🌱</h3>
      
      <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <TrendingDown size={32} color="#ef4444" style={{ margin: '0 auto 10px' }} />
          <p style={{ color: 'var(--text-gray)' }}>CO₂ Reduction</p>
          <h2 style={{ color: '#ef4444', fontWeight: 800 }}>-{data.reduction}%</h2>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <TrendingUp size={32} color="var(--primary)" style={{ margin: '0 auto 10px' }} />
          <p style={{ color: 'var(--text-gray)' }}>Oxygen Boost</p>
          <h2 style={{ color: 'var(--primary)', fontWeight: 800 }}>+{data.oxygen}%</h2>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Sprout size={32} color="#84cc16" style={{ margin: '0 auto 10px' }} />
          <p style={{ color: 'var(--text-gray)' }}>Alga Biomass</p>
          <h2 style={{ fontWeight: 800 }}>{data.biomass} kg</h2>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Award size={32} color="#eab308" style={{ margin: '0 auto 10px' }} />
          <p style={{ color: 'var(--text-gray)' }}>City Score</p>
          <h2 style={{ fontWeight: 800 }}>{data.score}/100</h2>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 600 }}>
          <span>Before: {data.initialCo2} ppm</span>
          <span>After: {data.finalCo2} ppm</span>
        </div>
        <div style={{ height: '20px', background: '#fee2e2', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
          <div style={{ 
            width: `${(data.finalCo2 / data.initialCo2) * 100}%`, 
            height: '100%', background: 'var(--primary)', transition: 'width 1s ease-out' 
          }}></div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '15px', color: 'var(--primary-dark)', fontWeight: 600 }}>
          "{getMessage(data.score)}"
        </p>
      </div>
    </div>
  );
};

export default Results;