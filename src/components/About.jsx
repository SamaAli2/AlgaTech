const About = () => {
  return (
    <section id="about" style={{ padding: '80px 0', background: 'var(--primary-dark)', color: 'white' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Why Algae City?</h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px' }}>
          AlgaTech is an educational interactive simulation designed to help users understand 
          how alga-based systems could be explored as part of environmental solutions.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {['Educational', 'Interactive', 'Data-driven', 'Experimental'].map(tag => (
            <span key={tag} style={{ padding: '8px 16px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', fontSize: '0.9rem' }}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;