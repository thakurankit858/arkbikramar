import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, Code2 } from "lucide-react";
import ankitProfile from "@/assets/ankit-photo.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{
        animationDelay: '4s'
      }} />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg rotate-12 animate-float" />
      <div className="absolute bottom-32 right-20 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float" style={{
      animationDelay: '1s'
    }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/10 backdrop-blur-sm rounded-lg rotate-45 animate-float" style={{
      animationDelay: '3s'
    }} />
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 border-2 border-accent/30 rotate-45 animate-float" style={{
      animationDelay: '2.5s'
    }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge with glassmorphism */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground">Available for Hire • Agra, Noida, Delhi</span>
              </div>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Full-Stack Developer</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block gradient-text mt-2">Ankit</span>
              </h1>
            </div>
            
            {/* Enhanced description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Crafting <span className="text-primary font-semibold">scalable</span>, <span className="text-secondary font-semibold">secure</span>, and <span className="text-accent font-semibold">user-centric</span> applications with modern technologies.
            </p>
            
            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['React', 'PHP', 'Laravel', 'JavaScript', 'MySQL'].map(tech => <span key={tech} className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all cursor-default">
                  {tech}
                </span>)}
            </div>
            
            {/* CTA buttons with enhanced styling */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button variant="gradient" size="lg" onClick={() => scrollToSection('contact')} className="group shadow-2xl hover:shadow-accent/50 transition-all">
                <Sparkles className="w-4 h-4" />
                Hire Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('projects')} className="border-2 hover:border-primary hover:bg-primary/5">
                <Code2 className="w-4 h-4" />
                View Projects
              </Button>
            </div>
            
            {/* Social links with enhanced design */}
            <div className="flex gap-3 justify-center lg:justify-start pt-4">
              <a href="https://github.com/thakurankit858" target="_blank" rel="noopener noreferrer" className="group relative p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg">
                <Github className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://linkedin.com/in/ankit-sikarwar-agra" target="_blank" rel="noopener noreferrer" className="group relative p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg">
                <Linkedin className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:thakurankit858@gmail.com" className="group relative p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all shadow-lg">
                <Mail className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Enhanced Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated gradient orbs */}
              <div className="absolute -top-8 -right-8 w-80 h-80 bg-gradient-to-br from-primary via-primary-glow to-secondary rounded-full opacity-30 blur-3xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-br from-accent via-accent-light to-secondary rounded-full opacity-30 blur-3xl animate-float" style={{
              animationDelay: '2s'
            }} />
              
              {/* Main image container with glassmorphism */}
              <div className="relative z-10 aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10" />
                
                {/* Profile Image */}
                <img src={ankitProfile} alt="Ankit Sikarwar - Full Stack Developer" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                
                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-accent rounded-tl-2xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-2xl" />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -top-6 right-8 bg-card/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-border z-20 hover-lift">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <span className="text-3xl font-bold gradient-text">2+</span>
                  <span className="text-muted-foreground">Projects<br />Completed</span>
                </p>
              </div>
              
              {/* Decorative dots pattern */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-2 opacity-30">
                {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 bg-primary rounded-full" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;