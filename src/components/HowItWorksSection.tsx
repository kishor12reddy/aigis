import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, Search, FileCheck, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      step: "1",
      title: "Share Your URL",
      description: "Tell us about your AI app or website. Just send us the link or details - it's that simple!",
      details: "No complex setup required. We work with any AI application or website."
    },
    {
      icon: Search,
      step: "2", 
      title: "We Run 5 Important Tests",
      description: "Our security experts run only 5 tests but 5 important tests not 50 tests. Like having a focused security guard!",
      details: "Automated and manual testing to catch the most critical security issues."
    },
    {
      icon: FileCheck,
      step: "3",
      title: "Get Clear Report",
      description: "We give you a simple report showing what we found and how to fix it. No confusing tech jargon!",
      details: "Easy-to-understand reports with step-by-step fix instructions."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How We Keep You Safe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting your security check is as easy as 1-2-3! Here's exactly what happens when you work with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border/20">
            <CardHeader>
              <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Most security checks are completed in less than 10 minutes. Get peace of mind knowing your app is secure!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-6 text-lg"
              >
                Start Your Security Check
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;