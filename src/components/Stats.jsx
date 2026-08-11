import { Wind, Droplets, Factory, Car } from 'lucide-react';

const Stats = ({ results }) => {
  const stats = [
    { label: 'CO₂ Reduction', value: results ? `${results.reduction}%` : '--%', icon: <Wind color="var(--primary)" />, bg: '#dcfce7' },
    { label: 'Oxygen Produced', value: results ? `+${results.oxygen}%` : '--%', icon: <Droplets color="#3b82f6" />, bg: '#dbeafe' },
    { label: 'Factories Simulated', value: '48', icon: <Factory color="#6b7280" />, bg: '#f3f4f6' },
    { label: 'Cars Equivalent', value: '310K', icon: <Car color="#6b7280" />, bg: '#f3f4f6' },
  ];

  return (
    <section style={{ padding: '40px 0' }}>
      <div className="container grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {stats.map((stat, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ padding: '12px', borderRadius: '10px', background: stat.bg }}>{stat.icon}</div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>{stat.label}</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-dark)' }}>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;