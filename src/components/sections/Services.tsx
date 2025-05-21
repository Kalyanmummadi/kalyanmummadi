
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, FileCode, FileText, Database, FileJson, Server } from 'lucide-react';

const Services = () => {
  const skillsData = [
    {
      name: "HTML",
      icon: FileCode,
      description: "Semantic markup structure for web applications",
      color: "#E34F26"
    },
    {
      name: "CSS",
      icon: FileText,
      description: "Responsive styling with modern techniques",
      color: "#1572B6"
    },
    {
      name: "JavaScript",
      icon: Code,
      description: "Dynamic frontend functionality and interactivity",
      color: "#F7DF1E"
    },
    {
      name: "React.js",
      icon: FileJson,
      description: "Building interactive UIs with component architecture",
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      icon: Server,
      description: "Server-side JavaScript runtime environment",
      color: "#339933"
    },
    {
      name: "SQLite/SQL",
      icon: Database,
      description: "Database design and management",
      color: "#003B57"
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Services</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            I offer comprehensive full-stack development services, leveraging cutting-edge technologies to build responsive, scalable, and user-friendly web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-full animate-fade-in">
            <Card className="border border-border hover:border-primary transition-all overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-background p-6 rounded-lg">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Full Stack Web Development</h3>
                    <p className="text-muted-foreground mb-4">
                      End-to-end web application development, from concept to deployment, crafting solutions that are both visually appealing and functionally robust.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Responsive Website Design</li>
                      <li>Custom Web Application Development</li>
                      <li>API Development and Integration</li>
                      <li>Database Design and Management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mt-16 mb-8 text-center">Technical Skills</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <Card key={index} className="border border-border hover:border-primary transition-all overflow-hidden animate-slide-in-bottom" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-background">
                    <skill.icon size={32} style={{ color: skill.color }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
                  <p className="text-center text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
