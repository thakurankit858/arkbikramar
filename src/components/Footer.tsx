import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Ankit Sikarwar. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made by Ankit in Agra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;