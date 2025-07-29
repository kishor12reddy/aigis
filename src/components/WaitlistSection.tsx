import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Rocket, Building2, Users, ArrowRight } from "lucide-react";

const WaitlistSection = () => {
  const credentials = [
    {
      icon: Rocket,
      company: "NASA",
      description: "We protected NASA by ethically hacking them and finding critical XSS vulnerabilities"
    },
    {
      icon: Building2, 
      company: "Fortune 500",
      description: "Our team has hacked and protected many Fortune 500 companies from security threats"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Waitlist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be the first to secure your AI app! Join our waitlist and get early access.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Team Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Our Team's Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {credentials.map((cred, index) => (
                <Card key={index} className="bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-primary">
                        <cred.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="outline" className="border-accent/50 text-accent text-lg px-3 py-1">
                        {cred.company}
                      </Badge>
                    </div>
                    <CardDescription className="text-base text-muted-foreground">
                      {cred.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Waitlist Form */}
          <Card className="bg-gradient-card border-border/20 max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Join the Waitlist</CardTitle>
              <CardDescription className="text-lg">
                Enter your email to get early access when we launch.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-background/50 border-border/50 focus:border-primary"
                />
                <Button 
                  className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8"
                  size="lg"
                >
                  Join Waitlist
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
              
              {/* Enterprise CTA */}
              <div className="text-center pt-6 border-t border-border/20">
                <h4 className="font-semibold mb-2 text-foreground">Enterprise Customers</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Need security testing for multiple applications or have special requirements? 
                  Our enterprise team can create a custom solution for your organization.
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Contact Enterprise Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;