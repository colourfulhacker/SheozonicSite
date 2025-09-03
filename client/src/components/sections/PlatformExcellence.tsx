import { AlertTriangle, Lightbulb, Calculator, Shield, Trophy, Medal, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const challenges = [
  {
    icon: AlertTriangle,
    challenge: "Limited B2C support in existing platforms restricts individual sellers and SMEs.",
    solution: "Unified B2B+B2C platform serving enterprises, SMEs, and individual shippers equally.",
  },
  {
    icon: AlertTriangle,
    challenge: "Hidden courier costs and unclear pricing structures affect budgeting.",
    solution: "Instant AI-powered cost breakdown with transparent pricing and no hidden fees.",
  },
  {
    icon: Shield,
    challenge: "COD fraud and fake returns cause significant revenue losses.",
    solution: "AI fraud detection with trust scoring and risk management systems.",
  },
];

const advantages = [
  {
    icon: Trophy,
    title: "vs ShipRocket",
    features: [
      "AI-powered optimization",
      "Comprehensive franchise system", 
      "Enterprise-grade APIs",
      "Advanced fraud detection",
    ],
  },
  {
    icon: Medal,
    title: "vs Cprofit",
    features: [
      "Instant quotation system",
      "Dual B2B & B2C focus",
      "White-label solutions",
      "Carbon footprint tracking",
    ],
  },
  {
    icon: Rocket,
    title: "Market Leadership",
    features: [
      "Scalable SaaS revenue",
      "Franchise licensing model",
      "Strategic API partnerships",
      "Investor-friendly growth",
    ],
  },
];

export default function PlatformExcellence() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Platform <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How Sheozonic transforms logistics challenges into competitive advantages for modern businesses.
          </p>
        </div>
        
        {/* Challenge vs Solution Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((item, index) => (
            <Card key={index} className="p-8 hover-lift">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-destructive">Industry Challenge</h3>
              <p className="text-muted-foreground mb-6">{item.challenge}</p>
              
              <div className="border-t border-border pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-accent">Sheozonic Solution</h4>
                <p className="text-muted-foreground">{item.solution}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Competitive Advantage */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Competitive Advantages</h3>
            <p className="text-xl text-muted-foreground">Why leading enterprises choose Sheozonic over traditional platforms</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4">
                <div className={`w-20 h-20 rounded-2xl mx-auto flex items-center justify-center ${
                  index === 0 ? 'gradient-primary' : 
                  index === 1 ? 'gradient-accent' : 
                  'bg-secondary'
                }`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold">{advantage.title}</h4>
                <div className="space-y-2 text-muted-foreground">
                  {advantage.features.map((feature, featureIndex) => (
                    <p key={featureIndex}>✓ {feature}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
