import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Know Me More
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              I'm a <span className="gradient-text">Full-Stack Developer</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies. 
              I enjoy building responsive user interfaces using React.js, Tailwind CSS, and JavaScript, and I've also 
              worked with PHP and Laravel to create secure backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm deeply interested in scalable architecture, modular routing, and clean authentication flows. My goal 
              is to master full-stack development and contribute to impactful tech projects that prioritize performance, 
              security, and user experience.
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-card rounded-2xl p-8 shadow-lg hover-lift border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Education</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-lg">Bachelor of Arts</h5>
                    <p className="text-muted-foreground">Dr. Bhimrao Ambedkar University, Agra</p>
                    <p className="text-sm text-primary font-medium">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;