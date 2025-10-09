import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // In a real application, you would send this to a backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "thakurankit858@gmail.com",
    href: "mailto:thakurankit858@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 9368752133",
    href: "tel:+919368752133"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Agra, Uttar Pradesh",
    href: null
  }];
  const socialLinks = [{
    icon: Github,
    label: "GitHub",
    href: "https://github.com/thakurankit858",
    color: "hover:bg-foreground hover:text-background"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ankit-sikarwar-agra",
    color: "hover:bg-primary"
  }];
  return <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Send me a message and let's make something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map(info => {
                const Icon = info.icon;
                const content = <div className="flex items-center gap-4 p-4 bg-card rounded-xl hover-lift border border-border">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </div>;
                return info.href ? <a key={info.label} href={info.href} className="block">
                      {content}
                    </a> : <div key={info.label}>{content}</div>;
              })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map(social => {
                const Icon = social.icon;
                return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-4 bg-card rounded-xl border border-border transition-colors ${social.color}`} aria-label={social.label}>
                      <Icon className="w-6 h-6" />
                    </a>;
              })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>
      </div>
    </section>;
};
export default Contact;