import { TrendingUp, Users, DollarSign, Globe, Target, BarChart3, Rocket, Building2, Zap, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Investors() {
  const metrics = [
    {
      icon: DollarSign,
      value: "₹2.5T",
      label: "Indian Logistics Market",
      growth: "+35% CAGR",
    },
    {
      icon: TrendingUp,
      value: "35%",
      label: "Annual Growth Rate",
      growth: "Fastest growing sector",
    },
    {
      icon: Users,
      value: "50M+",
      label: "E-commerce Users",
      growth: "+25% YoY",
    },
    {
      icon: Target,
      value: "Top 3",
      label: "Market Position Goal",
      growth: "By 2027",
    },
  ];

  const revenueStreams = [
    {
      icon: Building2,
      title: "Scalable SaaS Revenue",
      description: "Recurring monthly revenue from B2B and B2C subscriptions with 95% retention rate.",
      metrics: [
        { label: "ARR Target (Year 3)", value: "₹100 Cr" },
        { label: "Gross Margins", value: "75%+" },
        { label: "Customer LTV", value: "₹12L+" },
      ],
    },
    {
      icon: Zap,
      title: "Franchise Licensing",
      description: "White-label partnerships generating licensing fees and revenue sharing from 500+ partners.",
      metrics: [
        { label: "License Revenue", value: "₹25 Cr" },
        { label: "Revenue Share", value: "15-25%" },
        { label: "Partner Network", value: "500+" },
      ],
    },
    {
      icon: Crown,
      title: "API Partnerships",
      description: "Strategic enterprise integrations creating sticky, high-value customer relationships.",
      metrics: [
        { label: "API Revenue", value: "₹50 Cr" },
        { label: "Enterprise Clients", value: "1000+" },
        { label: "Integration Value", value: "₹50L+" },
      ],
    },
  ];

  const growthTrajectory = [
    {
      year: "Year 1",
      revenue: "₹2 Cr",
      description: "Product Launch & Initial Traction",
      progress: 20,
      highlights: ["MVP Launch", "First 100 customers", "Seed funding"],
    },
    {
      year: "Year 2", 
      revenue: "₹15 Cr",
      description: "Market Penetration & Scaling",
      progress: 40,
      highlights: ["Series A", "1000+ customers", "AI platform launch"],
    },
    {
      year: "Year 3",
      revenue: "₹60 Cr",
      description: "Enterprise Adoption & API Growth",
      progress: 60,
      highlights: ["Enterprise clients", "API partnerships", "Pan-India expansion"],
      highlight: true,
    },
    {
      year: "Year 4",
      revenue: "₹150 Cr", 
      description: "Pan-India Expansion & Franchises",
      progress: 80,
      highlights: ["500+ franchises", "Tier 2/3 penetration", "Series B"],
    },
    {
      year: "Year 5",
      revenue: "₹350 Cr",
      description: "Market Leadership & International",
      progress: 100,
      highlights: ["Market leader", "International expansion", "IPO readiness"],
    },
  ];

  const competitiveAdvantages = [
    {
      title: "First-Mover Advantage",
      description: "First platform to truly unify B2B and B2C logistics in India",
      impact: "3x faster market penetration",
    },
    {
      title: "AI-Powered Differentiation",
      description: "Proprietary algorithms for courier selection and fraud detection",
      impact: "20-30% cost savings for customers",
    },
    {
      title: "Franchise Model",
      description: "Unique white-label approach creating network effects",
      impact: "Capital-light expansion strategy",
    },
    {
      title: "Enterprise API Suite",
      description: "Deep platform integrations creating high switching costs",
      impact: "95%+ customer retention rate",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Investor <span className="text-gradient">Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in revolutionizing India's ₹2.5 trillion logistics market with scalable technology, 
              proven business models, and massive growth potential.
            </p>
          </div>
          
          {/* Market Metrics */}
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                  index % 4 === 0 ? 'gradient-primary' :
                  index % 4 === 1 ? 'gradient-accent' :
                  index % 4 === 2 ? 'bg-secondary' :
                  'bg-purple-500'
                }`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground mb-2">{metric.label}</div>
                <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                  {metric.growth}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Multiple Revenue Streams</h2>
            <p className="text-xl text-muted-foreground">
              Diversified business model with recurring revenue, high margins, and scalable growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {revenueStreams.map((stream, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  index === 0 ? 'gradient-primary' :
                  index === 1 ? 'gradient-accent' :
                  'bg-secondary'
                }`}>
                  <stream.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{stream.title}</h3>
                <p className="text-muted-foreground mb-6">{stream.description}</p>
                <div className="space-y-3">
                  {stream.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <span className={`font-semibold ${
                        metric.value.includes('%') ? 'text-accent' : 'text-foreground'
                      }`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Trajectory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">5-Year Growth Trajectory</h2>
            <p className="text-xl text-muted-foreground">
              Projected revenue milestones and strategic expansion plan across India
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border lg:hidden"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {growthTrajectory.map((milestone, index) => (
                <Card 
                  key={index} 
                  className={`p-6 hover-lift relative ${milestone.highlight ? 'border-primary shadow-lg' : ''}`}
                >
                  {milestone.highlight && (
                    <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                      Target Year
                    </Badge>
                  )}
                  
                  <div className="text-center space-y-4">
                    <div className="text-lg font-bold text-muted-foreground">{milestone.year}</div>
                    <div className={`text-2xl font-bold ${
                      milestone.highlight ? 'text-primary' : 'text-foreground'
                    }`}>
                      {milestone.revenue}
                    </div>
                    <div className="text-sm text-muted-foreground">{milestone.description}</div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          milestone.highlight ? 'bg-primary' : 'bg-accent'
                        }`}
                        style={{ width: `${milestone.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="space-y-1 text-xs text-muted-foreground">
                      {milestone.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex}>• {highlight}</div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" data-testid="button-investor-deck">
              <BarChart3 className="w-5 h-5 mr-2" />
              Download Detailed Investor Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Sustainable Competitive Advantages</h2>
            <p className="text-xl text-muted-foreground">
              Deep moats and differentiation that create long-term value and market leadership
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">Business Impact</span>
                    <span className="font-semibold text-accent">{advantage.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Why Invest in Sheozonic?</h2>
                <p className="text-lg text-muted-foreground">
                  Unique opportunity to capitalize on India's digital transformation and logistics revolution
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Massive Market Opportunity</h3>
                    <p className="text-muted-foreground">
                      India's logistics market growing at 35% CAGR, driven by e-commerce boom and digital adoption
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Proven Technology</h3>
                    <p className="text-muted-foreground">
                      AI-powered platform with demonstrable cost savings and efficiency improvements for customers
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Experienced Team</h3>
                    <p className="text-muted-foreground">
                      Leadership with 50+ years combined experience in logistics, technology, and scaling businesses
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Network Effects</h3>
                    <p className="text-muted-foreground">
                      Platform becomes more valuable as more users join, creating defensible market position
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Financial Projections</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Valuation</span>
                    <span className="font-bold">₹150 Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projected Valuation (2027)</span>
                    <span className="font-bold text-primary">₹2,500 Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Revenue Multiple</span>
                    <span className="font-bold text-accent">7.5x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected IRR</span>
                    <span className="font-bold text-secondary">45%+</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Funding Timeline</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seed Round (2023)</span>
                    <span className="font-bold">₹5 Cr ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Series A (2024)</span>
                    <span className="font-bold">₹25 Cr ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Series B (2025)</span>
                    <span className="font-bold text-primary">₹75 Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Series C (2026)</span>
                    <span className="font-bold text-accent">₹200 Cr</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Partner with India's Logistics Future
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join leading VCs and angel investors in backing the next logistics unicorn from India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                data-testid="button-investor-contact"
              >
                Schedule Investor Meeting
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                data-testid="button-download-deck"
              >
                Download Pitch Deck
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">₹25 Cr</div>
                <div className="text-white/80">Raised to Date</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-white/80">Investor Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2025</div>
                <div className="text-white/80">Series B Target</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
