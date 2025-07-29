import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">AIGIS</span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © 2024 AIGIS. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Keeping your AI applications secure from cyber threats.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;