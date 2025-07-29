import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Key, Database, Code, FileText, ChevronRight } from "lucide-react";

const SecurityTestsSection = () => {
  const tests = [
    {
      icon: Shield,
      title: "Access Control Testing",
      description: "We check if your app properly controls who can see what. Like making sure only you can open your diary!",
      features: ["User permission checks", "Admin access verification", "Role-based security"]
    },
    {
      icon: Key,
      title: "Secret Key Protection", 
      description: "We look for hidden passwords and API keys that hackers might find. Like checking if you left your house key under the doormat!",
      features: ["API key exposure", "Password security", "Environment variables"]
    },
    {
      icon: Database,
      title: "SQL Injection Defense",
      description: "We test if hackers can trick your database into giving away information it shouldn't. Like preventing strangers from getting your address book!",
      features: ["Database security", "Query validation", "Input sanitization"]
    },
    {
      icon: Code,
      title: "XSS Attack Prevention", 
      description: "We check if bad code can run on your website. Like making sure no one can put a virus on your computer through your website!",
      features: ["Script injection tests", "Content security", "Browser protection"]
    },
    {
      icon: FileText,
      title: "Information Disclosure",
      description: "We make sure your app doesn't accidentally show private information. Like checking that your diary doesn't show on the front page!",
      features: ["Data leakage prevention", "Error message security", "Privacy protection"]
    }
  ];

  return (
    <section id="security-tests" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Security Tests We Run
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We check your AI apps for the most common security problems. Here's what we look for - explained in simple terms!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <Card key={index} className="group hover:shadow-cyber transition-all duration-300 bg-gradient-card border-border/20 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:shadow-glow-primary transition-all duration-300">
                    <test.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    Test {index + 1}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {test.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {test.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {test.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Example */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-border/20">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Code Example</CardTitle>
              <CardDescription>
                See how access control testing works in practice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/50 rounded-lg p-6 font-mono text-sm">
                <div className="mb-4">
                  <span className="text-red-400">// ❌ Bad: Anyone can access admin data</span>
                  <br />
                  <span className="text-blue-400">app.get</span>(<span className="text-green-400">'/admin/users'</span>, (req, res) =&gt; {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-yellow-400">getAllUsers</span>(); <span className="text-gray-400">// No permission check!</span>
                  <br />
                  {'}'});
                </div>
                <div>
                  <span className="text-green-400">// ✅ Good: Check if user is admin first</span>
                  <br />
                  <span className="text-blue-400">app.get</span>(<span className="text-green-400">'/admin/users'</span>, checkAdminRole, (req, res) =&gt; {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-yellow-400">getAllUsers</span>(); <span className="text-gray-400">// Safe!</span>
                  <br />
                  {'}'});
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestsSection;