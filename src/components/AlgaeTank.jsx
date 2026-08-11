const AlgaeTank = ({ config }) => {
  const tankHeight = config.size === 'Small' ? 120 : config.size === 'Medium' ? 160 : 200;
  const tankWidth = config.size === 'Small' ? 60 : config.size === 'Medium' ? 80 : 100;
  const liquidColor = config.light === 'High' ? '#22c55e' : config.light === 'Medium' ? '#4ade80' : '#86efac';
  const bubbleSpeed = config.light === 'High' ? '1s' : config.light === 'Medium' ? '2s' : '3s';
  const visualTanks = Array.from({ length: Math.min(config.tanks, 5) });

  return (
    <div style={{ 
      flex: 1, minHeight: '300px', background: '#f8fafc', borderRadius: 'var(--radius)', 
      display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '10px',
      padding: '20px', border: '1px dashed #cbd5e1', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px', color: '#ef4444', fontWeight: 'bold', opacity: 0.5 }}>CO₂ Input →</div>
      
      {visualTanks.map((_, i) => (
        <div key={i} style={{ 
          width: `${tankWidth}px`, height: `${tankHeight}px`, 
          border: '3px solid #cbd5e1', borderBottom: 'none',
          borderRadius: '15px 15px 0 0', position: 'relative', overflow: 'hidden',
          background: 'rgba(255,255,255,0.5)'
        }}>
          <div style={{ 
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '80%', 
            background: liquidColor, opacity: 0.8, transition: '0.5s' 
          }}></div>
          
          {[1,2,3].map(b => (
            <div key={b} style={{
              position: 'absolute', bottom: '10px', left: `${20 + b*20}%`,
              width: '8px', height: '8px', background: 'white', borderRadius: '50%',
              animation: `rise ${bubbleSpeed} infinite linear`, animationDelay: `${b*0.3}s`
            }}></div>
          ))}
        </div>
      ))}

      {config.tanks > 5 && (
        <div style={{ alignSelf: 'center', fontWeight: 'bold', color: 'var(--text-gray)' }}>
          +{config.tanks - 5} more
        </div>
      )}

      <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--primary)', fontWeight: 'bold', opacity: 0.5 }}>← O₂ Output</div>
    </div>
  );
};

export default AlgaeTank;