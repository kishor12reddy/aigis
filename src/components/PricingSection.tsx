import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Building } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      icon: Star,
      name: "Basic Security Check",
      description: "Perfect for small apps and startups",
      price: "$10",
      period: "/per audit",
      features: [
        "All 5 security tests",
        "24-hour report delivery", 
        "Easy-to-understand results",
        "Basic fix instructions",
        "Email support"
      ],
      cta: "Start Security Check",
      popular: false
    },
    {
      icon: Crown,
      name: "Professional Audit",
      description: "Best for growing businesses",
      price: "$20", 
      period: "/per audit",
      features: [
        "All 5 security tests",
        "12-hour report delivery",
        "Detailed fix instructions", 
        "Priority email support",
        "Re-test after fixes (free)"
      ],
      cta: "Start Security Check",
      popular: true
    },
    {
      icon: Building,
      name: "Enterprise Solution",
      description: "For large companies with multiple apps",
      price: "Custom",
      period: "/contact us",
      features: [
        "Multiple app testing",
        "Custom security tests",
        "Same-day reports",
        "Dedicated security expert",
        "Phone & video support",
        "Unlimited re-testing", 
        "Compliance reporting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, Fair Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the security check that fits your needs. No hidden fees, no monthly subscriptions - just pay for what you need!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-full bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-300 group ${
                plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300 ${
                    plan.popular ? 'bg-gradient-primary' : 'bg-secondary'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                </div>
                
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow-primary' 
                      : 'bg-secondary hover:bg-secondary/80'
                  } transition-all duration-300`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which plan is right for you?
          </p>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            Contact us for a free consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;