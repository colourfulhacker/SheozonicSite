import Hero from "@/components/sections/Hero";
import PlatformExcellence from "@/components/sections/PlatformExcellence";
import PricingCalculator from "@/components/sections/PricingCalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Code, 
  Handshake, 
  Upload, 
  Globe, 
  BarChart3, 
  Zap, 
  Eye, 
  CreditCard,
  Brain,
  Clock,
  TrendingUp,
  Shield,
  Leaf,
  Route,
  CheckCircle,
  ChartLine,
  Rocket
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete <span className="text-gradient">Logistics Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From individual shipments to enterprise-scale logistics, Sheozonic powers every aspect of modern shipping needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* B2B Solutions */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Building2 className="w-4 h-4 mr-2" />
                  B2B Solutions
                </div>
                <h3 className="text-3xl font-bold">Enterprise & Corporate Logistics</h3>
                <p className="text-lg text-muted-foreground">
                  Streamline bulk shipments with integrated ERP systems, dedicated dashboards, and advanced analytics.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Bulk Order Processing</h4>
                    <p className="text-muted-foreground">Upload thousands of orders with CSV/Excel integration and automated processing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">International Logistics</h4>
                    <p className="text-muted-foreground">Cross-border shipping with customs clearance and documentation support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Performance Analytics</h4>
                    <p className="text-muted-foreground">Real-time SLA monitoring and courier performance insights.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* B2C Solutions */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  B2C Solutions
                </div>
                <h3 className="text-3xl font-bold">Individual & SME Shipping</h3>
                <p className="text-lg text-muted-foreground">
                  Quick shipment booking with real-time cost comparison and branded tracking for your customers.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Instant Quotations</h4>
                    <p className="text-muted-foreground">Get real-time pricing from multiple couriers in seconds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Branded Tracking</h4>
                    <p className="text-muted-foreground">Custom tracking pages with your brand colors and logo.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Flexible COD</h4>
                    <p className="text-muted-foreground">Smart COD management with automated reconciliation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* API & Franchise Section */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12">
            {/* Enterprise APIs */}
            <Card className="p-8 hover-lift">
              <div className="space-y-6">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Enterprise APIs</h3>
                  <p className="text-muted-foreground">
                    Integrate Sheozonic directly into your platforms with our comprehensive API suite.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Instant Quotation API</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Courier Choice API</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Dynamic Routing Engine</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" data-testid="button-api-docs">
                  View API Documentation
                </Button>
              </div>
            </Card>
            
            {/* Franchise Model */}
            <Card className="p-8 hover-lift">
              <div className="space-y-6">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">White-Label Franchise</h3>
                  <p className="text-muted-foreground">
                    Launch your own branded logistics business with our proven platform and support.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Custom Branding Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Revenue Management Tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Regional Partner Support</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" data-testid="button-become-partner">
                  Become a Partner
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PlatformExcellence />

      {/* Technology Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              AI-Powered <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced artificial intelligence and machine learning drive every aspect of our logistics optimization.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Intelligent Decision Engine</h3>
                <p className="text-lg text-muted-foreground">
                  Our AI analyzes thousands of data points in real-time to optimize every shipment decision.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">AI Courier Selection</h4>
                    <p className="text-muted-foreground">Predicts the optimal courier based on cost, speed, and reliability for each specific route.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Predictive ETA Engine</h4>
                    <p className="text-muted-foreground">Machine learning models forecast accurate delivery times using weather, traffic, and historical data.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Dynamic Pricing</h4>
                    <p className="text-muted-foreground">Real-time rate optimization based on demand patterns, courier capacity, and market conditions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 hover-lift">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">AI Processing Status</h4>
                  <div className="text-sm text-accent font-medium">Live Analysis</div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Route Optimization</span>
                      <span className="text-accent">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fraud Detection</span>
                      <span className="text-primary">94%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[94%]"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Price Prediction</span>
                      <span className="text-secondary">97%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full w-[97%]"></div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">1.2M+</div>
                      <div className="text-xs text-muted-foreground">Data Points</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent">24/7</div>
                      <div className="text-xs text-muted-foreground">Processing</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">99.9%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Advanced Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fraud & Risk Detection</h3>
              <p className="text-muted-foreground mb-6">Advanced ML algorithms identify suspicious patterns and prevent fraudulent COD orders.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Real-time risk scoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Behavioral pattern analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Automated blocking system</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Carbon Footprint Tracker</h3>
              <p className="text-muted-foreground mb-6">Comprehensive sustainability reporting for eco-conscious businesses and ESG compliance.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>CO2 emission tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Green courier recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Sustainability reports</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Route className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dynamic Routing Engine</h3>
              <p className="text-muted-foreground mb-6">Intelligent routing that adapts to real-time conditions for optimal delivery performance.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Multi-factor optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Real-time rerouting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Performance analytics</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of businesses already using Sheozonic to optimize their shipping operations with AI-powered intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                data-testid="button-cta-trial"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free 30-Day Trial
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                data-testid="button-cta-demo"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.8%</div>
                <div className="text-white/80">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
