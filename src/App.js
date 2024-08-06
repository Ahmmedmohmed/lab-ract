import React from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
