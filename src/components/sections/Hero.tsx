import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Web Developer'];

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [roleCharIndex, setRoleCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter logic for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && roleCharIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setTypedRole(currentRole.slice(0, roleCharIndex + 1));
        setRoleCharIndex(roleCharIndex + 1);
      }, 100);
    } else if (isDeleting && roleCharIndex > 0) {
      timeout = setTimeout(() => {
        setTypedRole(currentRole.slice(0, roleCharIndex - 1));
        setRoleCharIndex(roleCharIndex - 1);
      }, 50);
    } else if (!isDeleting && roleCharIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && roleCharIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [roleCharIndex, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .blink-cursor {
            animation: blink 1s step-end infinite;
          }

          @keyframes fadeUpZoom {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-name {
            animation: fadeUpZoom 1.2s ease-out forwards;
            background: linear-gradient(90deg, #4ade80, #60a5fa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
            text-shadow: 0 0 8px rgba(74, 222, 128, 0.5);
          }

          .fade-delayed {
            opacity: 0;
            animation: fadeUpZoom 1s ease-out forwards;
          }

          .fade-delay-1 { animation-delay: 0.4s; }
          .fade-delay-2 { animation-delay: 0.7s; }
          .fade-delay-3 { animation-delay: 1s; }
        `}
      </style>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-20 lg:py-0">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 animate-name">
            Mummadi Kalyan
          </h1>

          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-[2.5rem] fade-delayed fade-delay-1">
            {typedRole}
            <span className="blink-cursor">|</span>
          </p>

          <p className="text-lg mb-8 max-w-xl fade-delayed fade-delay-2">
            A relentless tech innovator blending physics insight with full-stack mastery.
            Creating engaging and user-friendly web applications with innovation, creativity, and discipline.
          </p>

          <div className="flex gap-4 fade-delayed fade-delay-3">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
               viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
               className="text-primary">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
