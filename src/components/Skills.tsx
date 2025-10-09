import { Code2, Database, Layers, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js", "Redux Toolkit"]
    },
    {
      title: "Backend & Frameworks",
      icon: Layers,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: ["PHP", "Laravel", "JDBC", "Servlets", "JAVA", "REST APIs"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Cursor", "IntelliJ IDEA", "Eclipse IDE", "WAMP Server", "Composer"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            My Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-card rounded-2xl p-8 shadow-lg hover-lift border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${category.bgColor} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competencies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6">Core Competencies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Full-Stack Development',
              'Responsive Design',
              'Secure Authentication',
              'API Integration',
              'Modular Routing',
              'Database Design',
              'Debugging'
            ].map((competency) => (
              <span 
                key={competency}
                className="px-5 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-medium shadow-lg"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;