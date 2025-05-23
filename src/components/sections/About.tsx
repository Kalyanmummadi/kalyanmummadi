import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Once visible, no need to observe further
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
    <section id="about" ref={sectionRef} className="py-20 relative">
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .slide-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .staggered {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .staggered.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .education-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .education-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .education-item:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 10;
        }
      `}</style>

      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className={`slide-in-left ${visible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold mb-6">Personal Info</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {['AGE', 'RESIDENCE', 'FREELANCE', 'ADDRESS'].map((label, i) => {
                const values = ['22', 'India', 'Available', 'Hyderabad'];
                return (
                  <div
                    key={label}
                    className={`relative staggered ${visible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="bg-card p-4 rounded-lg gradient-border">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded absolute -top-2 left-3">
                        {label}
                      </span>
                      <p className="mt-2 text-lg font-medium">{values[i]}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className={`text-muted-foreground mb-6 fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '700ms' }}>
              Hello! I'm Kalyan Mummadi, a passionate and enthusiastic FULL (SQL, Express.js, React.js, Node.js) stack developer, ready to embark on an exciting journey in the world of web development.
            </p>

            <p className={`text-muted-foreground fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '900ms' }}>
              I bring a dynamic mix of skills and a hunger for continuous learning to create engaging and user-friendly web applications. With a background in physics, I approach problems with analytical thinking and creative solutions.
            </p>
          </div>

          <div className={`slide-in-right ${visible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-bold mb-6">Education</h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
              {education.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group education-item ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${500 + i * 200}ms` }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-card group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary -ml-5 md:ml-0 md:mr-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
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
