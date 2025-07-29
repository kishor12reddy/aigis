import { Badge } from "@/components/ui/badge";

const PlatformMarquee = () => {
  const platforms = [
    "Lovable", "Bolt", "Replit", "CodeSandbox", "Stackblitz", "Glitch", 
    "GitHub Codespaces", "Vercel", "Netlify", "v0.dev", "Claude Artifacts", 
    "ChatGPT Code", "Cursor", "Windsurf"
  ];

  return (
    <div className="py-8 bg-secondary/20 border-y border-border/20 overflow-hidden">
      <div className="relative">
        {/* First row - scrolling right */}
        <div className="flex animate-scroll-right whitespace-nowrap mb-4">
          {[...platforms, ...platforms, ...platforms].map((platform, index) => (
            <Badge 
              key={`right-${index}`}
              variant="outline" 
              className="mx-4 px-4 py-2 text-sm border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors flex-shrink-0"
            >
              ✨ Test apps from {platform}
            </Badge>
          ))}
        </div>
        
        {/* Second row - scrolling left */}
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...platforms.reverse(), ...platforms, ...platforms].map((platform, index) => (
            <Badge 
              key={`left-${index}`}
              variant="outline" 
              className="mx-4 px-4 py-2 text-sm border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 transition-colors flex-shrink-0"
            >
              🛡️ Secure {platform} projects
            </Badge>
          ))}
        </div>
        
        {/* Gradient overlays to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
      </div>
      
      {/* Center text */}
      <div className="text-center mt-6">
        <p className="text-lg text-muted-foreground">
          <span className="text-primary font-semibold">VibeCoders</span> can test apps from any platform
        </p>
      </div>
    </div>
  );
};

export default PlatformMarquee;