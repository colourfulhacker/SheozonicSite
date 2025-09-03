import { AlertTriangle, Lightbulb, Calculator, Shield, Trophy, Medal, Rocket, Users, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const challenges = [
  {
    icon: Users,
    challenge: "Limited B2C support in existing platforms restricts individual sellers and SMEs.",
    solution: "Unified B2B+B2C platform serving enterprises, SMEs, and individual shippers equally.",
  },
  {
    icon: DollarSign,
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-primary">Platform</span> <span className="text-gradient-logistics">Excellence</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            <strong>How Sheozonic transforms logistics challenges into competitive advantages</strong> for modern businesses.
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
              <p className="text-gray-600 mb-6">{item.challenge}</p>
              
              <div className="border-t border-border pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-accent">Sheozonic Solution</h4>
                <p className="text-gray-600">{item.solution}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Competitive Advantage */}
        <div className="bg-white/60 rounded-3xl p-8 lg:p-12 border-2 border-orange-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Competitive Advantages</h3>
            <p className="text-xl text-gray-700">Why leading enterprises choose Sheozonic over traditional platforms</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4">
                <div className={`w-20 h-20 rounded-2xl mx-auto flex items-center justify-center ${
                  index === 0 ? 'gradient-primary' : 
                  index === 1 ? 'gradient-accent' : 
                  'bg-secondary'
                }`}>
                  <advantage.icon className={`w-8 h-8 ${
                    index === 2 ? 'text-secondary-foreground' : 'text-white'
                  }`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{advantage.title}</h4>
                <div className="space-y-2 text-gray-600">
                  {advantage.features.map((feature, featureIndex) => (
                    <p key={featureIndex}><span className="text-accent font-bold">✓</span> {feature}</p>
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
