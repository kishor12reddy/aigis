import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Clock, Eye } from "lucide-react";
import heroCyber from "@/assets/hero-cyber.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Shield className="h-4 w-4 mr-2" />
              Protect Your AI Applications
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Keep Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Apps Safe
              </span>
              <br />
              From Hackers
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              We test your AI apps and websites to find security problems before the bad guys do. 
              Think of us as friendly hackers who help you stay safe!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-6 text-lg"
              >
                Start Security Check
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              >
                <Zap className="h-5 w-5 mr-2" />
                See How It Works
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Important Tests</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">&lt;10min</div>
                <div className="text-muted-foreground">Quick Results</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Confidential</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="flex-1 relative">
            <div className="relative p-8 rounded-3xl bg-gradient-card border border-border/20 shadow-cyber">
              <img 
                src={heroCyber} 
                alt="Cybersecurity Protection" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;