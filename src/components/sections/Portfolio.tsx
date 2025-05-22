
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  details: string;
  link: string;
}

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Password Manager App",
      description: "A secure application to manage and store passwords with user-centric design",
      technologies: ["React", "Node.js", "Express", "SQLite"],
      image: "https://up.yimg.com/ib/th?id=OIP.nCfGpvMs4G0gwzt9NTrlUgHaEK&pid=Api&rs=1&c=1&qlt=95&w=165&h=92",
      details: "The Password Manager application provides a secure way to store and manage passwords. Features include encryption, auto-generation of strong passwords, and category organization. User experience was prioritized with an intuitive interface and seamless interactions.",
      link: "#"
    },
    {
      id: 2,
      title: "Money Manager App",
      description: "An intuitive financial control application for personal finance management",
      technologies: ["React", "Node.js", "Express", "SQLite"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      details: "The Money Manager application helps users track income, expenses, and savings goals. Features include transaction categorization, budget planning, visual reports, and recurring transaction setup. The application provides insights into spending patterns and financial health.",
      link: "#"
    },
    {
      id: 3,
      title: "Human Disease Prediction App",
      description: "Cutting-edge health tech application for disease prediction and analysis",
      technologies: ["Python", "Django", "Machine Learning", "SQLite"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
      details: "This application utilizes machine learning algorithms to predict potential health risks based on user-provided data and symptoms. It includes a comprehensive database of diseases and conditions, symptom analysis, risk assessment, and preventive recommendations.",
      link: "#"
    }
  ];
  
  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Portfolio</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            A showcase of my projects and applications that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="border border-border hover:border-primary transition-all overflow-hidden group animate-slide-in-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="default" onClick={() => handleOpenProject(project)} className="bg-primary hover:bg-primary/80">
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-secondary text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        {selectedProject && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <div className="relative h-64 mb-4 overflow-hidden rounded-md">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <DialogDescription className="text-foreground">
              <h4 className="text-lg font-semibold mb-2">Project Description</h4>
              <p className="mb-4">{selectedProject.details}</p>
              
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="bg-secondary text-xs px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </DialogDescription>
            <DialogFooter>
              <Button asChild>
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/80">
                  Visit Project
                </a>
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
