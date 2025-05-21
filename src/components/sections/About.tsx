
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "MCA (Pursuing)",
      institution: "Auroras PG College",
      year: "2023 - Present",
      description: "Master of Computer Applications with focus on advanced programming and system design."
    },
    {
      degree: "B.Sc. Physics",
      institution: "Andhra University",
      year: "2023",
      description: "Bachelor of Science with focus on Physics, developing strong analytical and problem-solving skills."
    },
    {
      degree: "Intermediate Education",
      institution: "Board of Intermediate Education",
      year: "2020",
      description: "Foundational education in sciences and mathematics."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Personal Info</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="relative">
                <div className="bg-card p-4 rounded-lg gradient-border">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded absolute -top-2 left-3">AGE</span>
                  <p className="mt-2 text-lg font-medium">22</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-card p-4 rounded-lg gradient-border">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded absolute -top-2 left-3">RESIDENCE</span>
                  <p className="mt-2 text-lg font-medium">India</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-card p-4 rounded-lg gradient-border">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded absolute -top-2 left-3">FREELANCE</span>
                  <p className="mt-2 text-lg font-medium">Available</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-card p-4 rounded-lg gradient-border">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded absolute -top-2 left-3">ADDRESS</span>
                  <p className="mt-2 text-lg font-medium">Hyderabad</p>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Hello! I'm Kalyan Mummadi, a passionate and enthusiastic FULL (SQL, Express.js, React.js, Node.js) stack developer, ready to embark on an exciting journey in the world of web development.
            </p>
            
            <p className="text-muted-foreground">
              I bring a dynamic mix of skills and a hunger for continuous learning to create engaging and user-friendly web applications. With a background in physics, I approach problems with analytical thinking and creative solutions.
            </p>
          </div>
          
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-card group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary -ml-5 md:ml-0 md:mr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                    </svg>
                  </div>
                  
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 hover:border-primary transition-all">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-primary">{item.degree}</h4>
                        <span className="text-xs font-bold bg-secondary px-2 py-1 rounded">{item.year}</span>
                      </div>
                      <p className="text-sm font-medium mb-2">{item.institution}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
