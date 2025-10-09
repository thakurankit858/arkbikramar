import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            My Journey
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            
            {/* Experience Card */}
            <div className="relative pl-20 pb-12">
              <div className="absolute left-4 top-0 w-8 h-8 bg-primary rounded-full border-4 border-background z-10" />
              
              <div className="bg-card rounded-2xl p-8 shadow-lg hover-lift border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Web Developer (Intern)</h3>
                    <p className="text-lg text-primary font-semibold">Web AtoZ, Agra</p>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">June 2025 – August 2025</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Completed a 3-month unpaid internship focused on full stack web development, gaining hands-on 
                  experience through real-world projects and close collaboration with development teams. Acquired 
                  practical skills across front-end and back-end technologies including React.js, PHP, Laravel, 
                  and MySQL.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {['React.js', 'PHP', 'Laravel', 'MySQL', 'REST APIs'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;