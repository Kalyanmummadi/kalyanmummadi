
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-20 lg:py-0">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-glow">
            <span className="text-primary">Mummadi</span> Kalyan
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Full Stack Developer
          </p>
          <p className="text-lg mb-8 max-w-xl">
            A relentless tech innovator blending physics insight with full-stack mastery.
            Creating engaging and user-friendly web applications with innovation, creativity, and discipline.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => scrollToSection('portfolio')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
            >
              View Portfolio
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-6"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center relative animate-fade-in">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary">
            <img 
              src="/lovable-uploads/46109c79-c169-4c9f-aa3c-fd684ddff5f0.png" 
              alt="Mummadi Kalyan" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card px-6 py-3 rounded-full border border-border">
            <p className="font-semibold text-primary">Available for freelance work</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="bg-card p-2 rounded-full" 
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
