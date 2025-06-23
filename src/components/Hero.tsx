
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lavender-500 font-semibold mb-4">👋 Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ravi <span className="text-black">Chaurasiya</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              A passionate developer focused on creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="rounded-full border-lavender-200 hover:bg-lavender-50 hover-lift"
                onClick={() => window.open('/Ravi_Chaurasiya_Resume_V5.pdf', '_blank')}
              >
                <ArrowDown className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Animated background elements */}
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-lavender-300 to-lavender-500 blur-md top-4 left-4 mx-auto animate-pulse"></div>
              <div className="absolute -z-10 w-60 h-60 md:w-76 md:h-76 rounded-full bg-gradient-to-l from-lavender-200 to-lavender-400 blur-md top-2 left-8 mx-auto animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute -z-10 w-68 h-68 md:w-84 md:h-84 rounded-full bg-gradient-to-tr from-lavender-100 to-lavender-300 blur-md top-6 left-2 mx-auto animate-ping" style={{ animationDuration: '8s', animationIterationCount: 'infinite' }}></div>
              
              {/* Profile image container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-lavender-200 to-lavender-400 mx-auto overflow-hidden relative z-10">
                <img 
                  src="/profile-pic/519db0f4-383f-42f6-88fc-2f7ac167dbea.png" 
                  alt="Ravi Chaurasiya" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-lavender-100 -z-10 blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-lavender-200 -z-10 blur-3xl opacity-30"></div>
    </section>
  );
};

export default Hero;
