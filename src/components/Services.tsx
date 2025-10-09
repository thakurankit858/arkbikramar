import { Code, Layout, Server, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Full Stack Developer",
      description: "End-to-end web solutions with optimized front-end and back-end integration for seamless user experiences.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Layout,
      title: "Front-End Developer",
      description: "Responsive, user-friendly interfaces using React.js, Tailwind CSS, and modern JavaScript frameworks.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Server,
      title: "PHP Developer",
      description: "Secure, database-driven applications with robust backend logic and efficient data management.",
      gradient: "from-accent to-accent-light"
    },
    {
      icon: Code,
      title: "Laravel Developer",
      description: "Scalable, modular web app development with authentication systems, CRUD operations, and RESTful APIs.",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            What I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-lg hover-lift border border-border relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;