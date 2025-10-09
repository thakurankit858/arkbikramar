import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const mainProject = {
    title: "Student Management System",
    description: "A comprehensive one-page login system with role-based access control for Admin, Teacher, and Student roles.",
    features: [
      "Admin: CRUD operations for users, attendance tracking, subject/class management",
      "Teacher: Student management, attendance and performance reports",
      "Student: Profile view, attendance reports, results with performance charts"
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/thakurankit858",
    liveUrl: "#"
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured Project
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my main project demonstrating full-stack capabilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl hover-lift border border-border">
            {/* Project Header */}
            <div className="bg-gradient-to-br from-primary via-secondary to-accent p-8 text-white">
              <h3 className="text-3xl font-bold mb-3">{mainProject.title}</h3>
              <p className="text-white/90 text-lg">{mainProject.description}</p>
            </div>

            {/* Project Content */}
            <div className="p-8 space-y-6">
              {/* Key Features */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {mainProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mainProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  variant="gradient"
                  size="lg"
                  asChild
                  className="group"
                >
                  <a href={mainProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    View Code
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <a href={mainProject.liveUrl}>
                    View Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;