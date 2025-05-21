
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    services: useRef<HTMLElement | null>(null),
    portfolio: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null)
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      rootMargin: '-10% 0px -90% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
      const id = section.id;
      if (id in sectionRefs) {
        sectionRefs[id as keyof typeof sectionRefs].current = section as HTMLElement;
      }
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = sectionRefs[id as keyof typeof sectionRefs].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <div className="flex-1 ml-0 md:ml-20">
        <main>
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
