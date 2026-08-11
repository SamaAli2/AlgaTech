const ScenarioCard = ({ scenario, selected, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(scenario)}
      className="card" 
      style={{ 
        cursor: 'pointer', 
        border: selected ? '2px solid var(--primary)' : '2px solid transparent',
        background: selected ? 'var(--bg-light)' : 'var(--white)',
        textAlign: 'center'
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{scenario.icon}</div>
      <h3 style={{ fontWeight: 700, marginBottom: '5px' }}>{scenario.name}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>Base CO₂: {scenario.co2} ppm</p>
      <span style={{ 
        display: 'inline-block', marginTop: '10px', padding: '4px 12px', 
        borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
        background: scenario.pollution === 'High' || scenario.pollution === 'Very High' ? '#fee2e2' : '#dcfce7',
        color: scenario.pollution === 'High' || scenario.pollution === 'Very High' ? '#991b1b' : '#166534'
      }}>
        Pollution: {scenario.pollution}
      </span>
    </div>
  );
};

export default ScenarioCard;