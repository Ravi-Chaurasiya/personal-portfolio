
import React from "react";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-lavender-50/50 py-16">
      <div className="container-custom">
        <h2 className="section-title text-center">Contact Me</h2>
        <p className="section-subtitle text-center mx-auto mb-12">
          Have a question or want to work together? Feel free to reach out.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Email Contact */}
            <a 
              href="mailto:ravichaurasiya693@gmail.com" 
              className="w-full flex items-center justify-center gap-4 py-4 px-6 rounded-xl transition-all hover:bg-lavender-50 hover:shadow-md group border border-lavender-200"
            >
              <div className="p-3 rounded-full">
                <Mail className="h-6 w-6 text-lavender-700" />
              </div>
              <div className="flex-1">
                <p className="text-lavender-600">ravichaurasiya693@gmail.com</p>
              </div>
            </a>
            
            {/* LinkedIn Contact */}
            <a 
              href="https://www.linkedin.com/in/ravichaurasiya04/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-4 py-4 px-6 rounded-xl transition-all hover:bg-lavender-50 hover:shadow-md group border border-lavender-200"
            >
              <div className="p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-lavender-700" />
              </div>
              <div className="flex-1">
                <p className="text-lavender-600">Ravi Chaurasiya</p>
              </div>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Copyright © 2025 Ravi Chaurasiya. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
