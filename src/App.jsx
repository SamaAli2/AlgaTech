import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Simulator from './components/Simulator';
import Comparison from './components/Comparison';
import Solutions from './components/Solutions';
import About from './components/About';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
 
  const [simResults, setSimResults] = useState(null);

  return (
    <div>
      <Navbar />
      <Hero />
      <Stats results={simResults} />
      <Simulator onResultsUpdate={setSimResults} /> 
      <Comparison />
      <Solutions />
      <About />
      <Footer />
    </div>
  );
}

export default App;