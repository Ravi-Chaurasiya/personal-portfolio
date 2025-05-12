
import React, { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, School, Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const About = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Add intersection observer for scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cardRefs.current.forEach(ref => {
      if (ref) {
        ref.classList.add('opacity-0');
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="bg-lavender-50/50">
      <div className="container-custom">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center mx-auto mb-8 max-w-4xl text-gray-800 font-medium text-xl">
          I'm a passionate Web Developer and UI/UX Designer, currently finishing my B.Tech in Computer Science and Engineering at 20. 
          I enjoy creating efficient, scalable solutions for both web and mobile platforms, while focusing on user-centric design. 
          Always eager to learn, I'm committed to staying on top of the latest technologies to deliver innovative, impactful results.
        </p>
        <p className="section-subtitle text-center mx-auto mb-12 max-w-4xl text-gray-800 font-medium text-xl">
          I'm passionate about exploring web technologies, UI/UX design, and emerging AI innovations, all while continuously 
          learning and growing in the ever-evolving digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Experience Tile */}
          <Card 
            ref={el => cardRefs.current[0] = el}
            className="border border-lavender-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-lavender-50/70 group"
          >
            <CardHeader className="flex flex-col items-center space-x-2 pb-2 border-b border-lavender-200 bg-lavender-100/50 group-hover:bg-lavender-200/80 transition-colors">
              <Briefcase className="h-5 w-5 text-lavender-500 group-hover:text-lavender-700 transition-colors mb-1" />
              <CardTitle className="text-center">Experience</CardTitle>
            </CardHeader>
            <CardContent className="p-0 max-h-64">
              <ScrollArea className="max-h-64">
                <div className="p-6">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-center text-xl text-gray-400 group-hover:text-gray-600 transition-colors">6 months<br />Frontend Developer</p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Education Tile */}
          <Card 
            ref={el => cardRefs.current[1] = el}
            className="border border-lavender-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-lavender-50/70 group"
          >
            <CardHeader className="flex flex-col items-center space-x-2 pb-2 border-b border-lavender-200 bg-lavender-100/50 group-hover:bg-lavender-200/80 transition-colors">
              <School className="h-5 w-5 text-lavender-500 group-hover:text-lavender-700 transition-colors mb-1" />
              <CardTitle className="text-center">Education</CardTitle>
            </CardHeader>
            <CardContent className="p-0 max-h-64">
              <ScrollArea className="max-h-64">
                <div className="p-6">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-center text-xl text-gray-400 group-hover:text-gray-600 transition-colors">B.Tech Bachelors Degree<br />Computer Science and Engineering</p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Achievements & Leadership Tile */}
        <Card 
          ref={el => cardRefs.current[2] = el}
          className="border border-lavender-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-lavender-50/70 group"
        >
          <CardHeader className="flex flex-col items-center space-x-2 pb-2 border-b border-lavender-200 bg-lavender-100/50 group-hover:bg-lavender-200/80 transition-colors">
            <Star className="h-5 w-5 text-lavender-500 group-hover:text-lavender-700 transition-colors mb-1" />
            <CardTitle className="text-center">Achievements & Leadership</CardTitle>
          </CardHeader>
          <CardContent className="p-0 max-h-64">
            <ScrollArea className="max-h-64">
              <div className="p-6">
                <p className="text-base leading-relaxed text-gray-400 group-hover:text-gray-600 transition-colors">
                  Since February 2022, I have been co-leading the Open Source Development Club at Echelon Institute of Technology, 
                  working alongside the club head to foster a strong coding culture with over 50+ student developers. 
                  I've organized 15+ workshops and collaborative coding sessions, where I mentored peers in FOSS applications and projects. 
                  Through these initiatives, I've honed my leadership, project management, and community-building skills, 
                  contributing to a more engaged and collaborative development environment.
                </p>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
