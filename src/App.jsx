import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Subjects from './components/Subjects';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
      const revealOnScroll = () => {
          const reveals = document.querySelectorAll('.reveal');
          const windowHeight = window.innerHeight;
          const elementVisible = 100;
          for (let i = 0; i < reveals.length; i++) {
              const elementTop = reveals[i].getBoundingClientRect().top;
              if (elementTop < windowHeight - elementVisible) {
                  reveals[i].classList.add('active');
              }
          }
      };
      
      window.addEventListener('scroll', revealOnScroll);
      revealOnScroll(); // Trigger initial check
      
      return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Subjects />
      <Footer />
    </>
  );
}

export default App;
