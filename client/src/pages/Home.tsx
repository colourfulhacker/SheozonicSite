import Hero from "@/components/sections/Hero";
import PlatformExcellence from "@/components/sections/PlatformExcellence";
import PricingCalculator from "@/components/sections/PricingCalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import deliveryImage from "@assets/generated_images/Indian_delivery_street_scene_69f9cb10.png";
import ecommerceImage from "@assets/generated_images/Indian_e-commerce_seller_shop_69b205a6.png";
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
      <section className="py-20 gradient-warm opacity-95 relative">
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 gradient-accent rounded-full text-white font-bold mb-6 shadow-lg">
              🔍 Problem Solving Excellence
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              🎆 Complete <span className="text-gradient-indian">Logistics Solutions</span> 🚚
            </h2>
            <p className="text-2xl font-semibold max-w-4xl mx-auto" style={{color: 'hsl(220, 40%, 25%)'}}>
              🔥 <strong>Solving India's biggest logistics challenges!</strong> From individual shipments to enterprise-scale operations, 
              Sheozonic revolutionizes every aspect of modern shipping with AI-powered intelligence! 🤖✨
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
        </div>
      </section>

      <PlatformExcellence />

      {/* Technology Section */}
      <section className="py-20 gradient-innovation relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-white font-bold mb-6 shadow-lg animate-pulse">
              🤖 AI-Powered Innovation
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6" style={{color: 'hsl(220, 40%, 15%)'}}>
              🎆 Intelligent <span className="text-gradient-indian">Technology</span> 💻
            </h2>
            <p className="text-2xl font-semibold max-w-4xl mx-auto" style={{color: 'hsl(220, 40%, 25%)'}}>
              🚀 <strong>Revolutionary AI algorithms transforming Indian logistics!</strong> Advanced machine learning 
              and smart technology drive unprecedented optimization for businesses across India! 🇮🇳✨
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold" style={{color: 'hsl(220, 40%, 15%)'}}>Intelligent Decision Engine</h3>
                <p className="text-lg" style={{color: 'hsl(220, 40%, 35%)'}}>
                  Our AI analyzes thousands of data points in real-time to optimize every shipment decision.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold" style={{color: 'hsl(220, 40%, 15%)'}}>Smart Courier Selection</h4>
                    <p style={{color: 'hsl(220, 40%, 35%)'}}>Intelligent algorithms predict the optimal courier based on cost, speed, and reliability for each specific route.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold" style={{color: 'hsl(220, 40%, 15%)'}}>Predictive ETA Engine</h4>
                    <p style={{color: 'hsl(220, 40%, 35%)'}}>Machine learning models forecast accurate delivery times using weather, traffic, and historical data.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold" style={{color: 'hsl(220, 40%, 15%)'}}>Dynamic Pricing</h4>
                    <p style={{color: 'hsl(220, 40%, 35%)'}}>Real-time rate optimization based on demand patterns, courier capacity, and market conditions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={deliveryImage} 
                alt="Indian delivery person in busy street"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl"></div>
              <Card className="absolute bottom-4 left-4 right-4 glassmorphism p-6 hover-lift">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white">Live Processing</h4>
                    <div className="text-sm text-accent font-medium">Real-time Analysis</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-white/90">
                        <span>Route Optimization</span>
                        <span className="text-accent font-bold">98%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full w-[98%]"></div>
                      </div>
                    </div>
                  
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-white/90">
                        <span>Smart Routing</span>
                        <span className="text-secondary font-bold">97%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full w-[97%]"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-accent">24/7</div>
                        <div className="text-xs text-white/80">Processing</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-secondary">99.8%</div>
                        <div className="text-xs text-white/80">Success Rate</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary">10K+</div>
                        <div className="text-xs text-white/80">Daily Orders</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Advanced Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift border-2 border-primary/20">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'hsl(220, 40%, 15%)'}}>Smart Risk Detection</h3>
              <p className="mb-6" style={{color: 'hsl(220, 40%, 35%)'}}>Advanced algorithms identify suspicious patterns and prevent fraudulent COD orders, protecting your business revenue.</p>
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
            
            <Card className="p-8 hover-lift border-2 border-accent/20">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Eco-Friendly Tracking</h3>
              <p className="text-muted-foreground mb-6">Comprehensive sustainability reporting for environmentally conscious businesses and ESG compliance in India.</p>
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
            
            <Card className="p-8 hover-lift border-2 border-secondary/20">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Route className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Routing Engine</h3>
              <p className="text-muted-foreground mb-6">Intelligent routing system that adapts to Indian traffic patterns and weather conditions for optimal delivery performance.</p>
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
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-indian relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-green-500/90"></div>
        <div className="absolute top-10 left-20 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-orange-400 rounded-full opacity-25 blur-3xl animate-pulse"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-10">
            <div className="inline-flex items-center px-8 py-4 bg-white/20 rounded-full text-white font-bold text-lg mb-6 shadow-xl">
              🚀 Join the Logistics Revolution!
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
              Ready to Transform 🔄 <br/>Your <span className="text-yellow-300">Logistics</span>? 🚚✨
            </h2>
            <p className="text-2xl text-white font-semibold max-w-4xl mx-auto">
              🎆 <strong>Join 10,000+ businesses revolutionizing their shipping!</strong> Experience the power of 
              AI-driven logistics optimization that's transforming India's supply chain! 🇮🇳💪
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
