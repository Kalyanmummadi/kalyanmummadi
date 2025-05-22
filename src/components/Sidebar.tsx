
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Sidebar = ({ activeSection, scrollToSection }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { id: 'home', icon: '👤', label: 'Home' },
    { id: 'about', icon: '📖', label: 'About' },
    { id: 'services', icon: '🛠️', label: 'Services' },
    { id: 'portfolio', icon: '💼', label: 'Portfolio' },
    { id: 'contact', icon: '📞', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        className="fixed top-6 left-6 z-50 md:hidden bg-secondary p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`h-0.5 w-full bg-primary block transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-primary block transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`h-0.5 w-full bg-primary block transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      <div className={`fixed top-0 left-0 h-full z-40 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="h-full w-20 bg-card border-r border-border flex flex-col items-center py-8">
          <div className="mb-8">
            <Link to="/">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="font-bold text-primary-foreground">MK</span>
              </div>
            </Link>
          </div>
          
          <nav className="flex-1">
            <ul className="flex flex-col items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:text-primary group ${
                      activeSection === item.id ? 'bg-secondary text-primary' : 'bg-transparent text-foreground'
                    }`}
                    aria-label={item.label}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="absolute left-16 bg-background border border-border px-3 py-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto">
            <a  
              href="/kalyan_resume(2).pdf"  download="kalyan_resume(2).pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group"
              aria-label="Download CV"
            >
              <span className="text-xl">📄</span>
              <span className="absolute left-16 bg-background border border-border px-3 py-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
