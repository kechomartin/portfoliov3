import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <Projects />
        <div className="divider" />
        <About />
      </main>
      <Contact />
      <WhatsAppButton />
    </>
  );
}
export default App;