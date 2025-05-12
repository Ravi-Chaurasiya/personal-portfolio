
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
    technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
    technologies: ["React", "JavaScript", "Firebase", "CSS"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with a clean, minimalist design.",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Blog Platform",
    description: "A feature-rich blog platform with markdown support, comments, and user authentication.",
    technologies: ["React", "NextJS", "Node.js", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with location search, forecasts, and animated weather visualizations.",
    technologies: ["JavaScript", "React", "APIs", "CSS"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container-custom">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center mx-auto">
          Check out some of my recent works. Each project showcases different skills and technologies.
        </p>
        
        {/* Technology Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {["React", "NextJS", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js"].map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-4 hover-lift group">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-lavender-100 text-lavender-600 mb-2 transition-all duration-300 group-hover:border-2 group-hover:border-black">
                {tech === "React" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z"/><path d="M6.32 19.32A9 9 0 0 0 21 12"/><path d="M14.73 5.61A9 9 0 0 1 21 12"/><path d="M9.27 5.61A9 9 0 0 0 3 12"/></svg>
                )}
                {tech === "NextJS" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.2 17.8 6 12l5.2-5.8"/><path d="m18 12-6 6"/><path d="m6 6 6 6"/></svg>
                )}
                {tech === "JavaScript" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.5 18.5a1 1 0 0 1-1 1c-.27-.02-1-.14-1-2v-1.5c0-.28-.22-.5-.5-.5h-2a.5.5 0 0 0-.5.5v1.5c0 2.12 1.73 3 3 3s3-.88 3-3v-1c0-.28.22-.5.5-.5h2a.5.5 0 0 1 .5.5v1c0 3.5-2 4.5-3 4.5s-2.5-.5-2.5-1.5"/><path d="M16.5 10.5c0 .28.22.5.5.5h1.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h.5"/><path d="M6.5 8a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H9"/><path d="M3 3h18v18H3z"/></svg>
                )}
                {tech === "TypeScript" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9v.75a.75.75 0 0 0 .75.75"/><path d="M17.25 10.5a.75.75 0 0 1 .75.75"/><path d="M18 10.5V18a3 3 0 0 1-3 3h-9V9h4.5A1.5 1.5 0 0 0 12 7.5v-3h3a3 3 0 0 1 3 3v3Z"/><path d="M13.5 3v3a3 3 0 0 0 3 3h3"/><path d="M3 3v18a3 3 0 0 0 3 3h12"/><path d="M3 15h12v3H3z"/></svg>
                )}
                {tech === "Tailwind CSS" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.25 10.5c-.35.5-.85.9-1.5 1.2M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M18 12V8h-4a2 2 0 0 0 0 4h4"/><path d="M9.5 8H6a2 2 0 1 0 0 4h1.5a2 2 0 1 1 0 4H4"/><path d="M3 3h18v18H3z"/></svg>
                )}
                {tech === "Node.js" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 10v4c0 1.1.9 2 2 2s2-.9 2-2v-4.5"/><path d="M18 14c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8"/><path d="M12 9v3"/><path d="M12 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/></svg>
                )}
              </div>
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border border-lavender-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in bg-gradient-to-br from-white to-lavender-50"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <CardHeader className="border-b border-lavender-100">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-lavender-100 text-lavender-700 hover:bg-lavender-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-lavender-100 pt-4">
                <Button variant="outline" size="sm" className="border-lavender-300 hover:bg-lavender-50" onClick={() => window.open(project.demoUrl, '_blank')}>
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="border-lavender-300 hover:bg-lavender-50" onClick={() => window.open(project.codeUrl, '_blank')}>
                  View Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
