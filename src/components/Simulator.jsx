import { useState, useEffect } from 'react';
import ScenarioCard from './ScenarioCard';
import AlgaeTank from './AlgaeTank';
import Results from './Results';
import { Play, RotateCcw, Minus, Plus } from 'lucide-react';

const SCENARIOS = [
  { id: 'ind', name: 'Industrial Zone', icon: '🏭', co2: 850, pollution: 'High' },
  { id: 'tra', name: 'Traffic Area', icon: '🚗', co2: 690, pollution: 'Medium' },
  { id: 'res', name: 'Residential', icon: '🏠', co2: 430, pollution: 'Low' },
  { id: 'city', name: 'Full City', icon: '🌆', co2: 980, pollution: 'Very High' },
];

const Simulator = () => {
  const [scenario, setScenario] = useState(SCENARIOS[0]);
  const [config, setConfig] = useState({ tanks: 5, size: 'Medium', light: 'Medium', efficiency: 50 });
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState(null);

  const handleRun = () => {
    setIsRunning(true);
    setResults(null);
    
    setTimeout(() => {
      const sizeMult = config.size === 'Small' ? 0.6 : config.size === 'Medium' ? 1 : 1.5;
      const lightMult = config.light === 'Low' ? 0.5 : config.light === 'Medium' ? 1 : 1.4;
      const effMult = config.efficiency / 100;
      
      const captureCapacity = config.tanks * sizeMult * lightMult * effMult * 15; 
      const reductionRaw = (captureCapacity / scenario.co2) * 100;
      const reduction = Math.min(Math.round(reductionRaw), 95);
      
      const finalCo2 = Math.round(scenario.co2 * (1 - reduction/100));
      const oxygen = Math.round(reduction * 0.8); 
      const biomass = Math.round(config.tanks * sizeMult * 2.5);
      const score = Math.min(100, Math.round(reduction + (scenario.pollution === 'Very High' ? 10 : 0)));

      setResults({ reduction, finalCo2, initialCo2: scenario.co2, oxygen, biomass, score });
      setIsRunning(false);
    }, 1200);
  };

  const handleReset = () => {
    setConfig({ tanks: 5, size: 'Medium', light: 'Medium', efficiency: 50 });
    setScenario(SCENARIOS[0]);
    setResults(null);
  };

  return (
    <section id="simulator" style={{ padding: '80px 0' }}>
      <div className="container">
        <h2 className="section-title">Don't just read. Try it yourself.</h2>
        <p className="section-subtitle">Select a city scenario and configure your alga system to see the impact.</p>

        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {SCENARIOS.map(s => (
            <ScenarioCard key={s.id} scenario={s} selected={scenario.id === s.id} onSelect={setScenario} />
          ))}
        </div>

        <div className="sim-layout" style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
          
          <div className="card" style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--primary-dark)' }}>Build Your System</h3>
            
            {/* Tanks */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Number of Tanks ({config.tanks})</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={() => setConfig(p => ({...p, tanks: Math.max(1, p.tanks-1)}))} 
                  style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center' }}><Minus size={16}/></button>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>{config.tanks}</span>
                <button onClick={() => setConfig(p => ({...p, tanks: Math.min(30, p.tanks+1)}))} 
                  style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center' }}><Plus size={16}/></button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Tank Size</label>
                <select value={config.size} onChange={e => setConfig({...config, size: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
                  <option>Small</option><option>Medium</option><option>Large</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Light Intensity</label>
                <select value={config.light} onChange={e => setConfig({...config, light: e.target.value})}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
                  <option>Low</option><option>Medium</option><option>High</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                <span>CO₂ Capture Efficiency</span>
                <span>{config.efficiency}%</span>
              </label>
              <input type="range" min="10" max="90" value={config.efficiency} 
                onChange={e => setConfig({...config, efficiency: parseInt(e.target.value)})}
                style={{ width: '100%', accentColor: 'var(--primary)' }} />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-primary" onClick={handleRun} disabled={isRunning} 
                style={{ flex: 1, justifyContent: 'center', opacity: isRunning ? 0.7 : 1 }}>
                {isRunning ? 'Calculating...' : <><Play size={18} fill="white" /> Run Simulation</>}
              </button>
              <button onClick={handleReset} style={{ padding: '12px', borderRadius: 'var(--radius)', background: '#f3f4f6' }}>
                <RotateCcw size={18} />
              </button>
            </div>
          </div>

          <AlgaeTank config={config} />
        </div>

        {results && <Results data={results} />}
      </div>
    </section>
  );
};

export default Simulator;