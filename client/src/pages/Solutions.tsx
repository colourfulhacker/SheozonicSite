import { Building2, Users, Code, Handshake, Upload, Globe, BarChart3, Zap, Eye, CreditCard, CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Solutions() {
  return (
    <div className="min-h-screen pt-24 gradient-warm relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-yellow-50/80"></div>
      <div className="absolute top-10 left-20 w-64 h-64 gradient-accent rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 gradient-primary rounded-full opacity-15 blur-2xl animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 gradient-vibrant rounded-full text-white font-bold text-lg mb-8 shadow-xl animate-pulse">
              🚀 💡 Revolutionary Problem Solving
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              Complete <span className="text-gradient-indian">Logistics Solutions</span> 📦✨
            </h1>
            <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
              🔥 <strong>Solving problems others can't even see!</strong> From tiny shipments to massive enterprise operations, 
              Sheozonic revolutionizes every aspect of shipping with breakthrough AI technology and mind-blowing integrations! 🤖🇮🇳
            </p>
          </div>
        </div>
      </section>

      {/* B2B Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Building2 className="w-4 h-4 mr-2" />
                  B2B Solutions
                </div>
                <h2 className="text-4xl font-bold">Enterprise & Corporate Logistics</h2>
                <p className="text-lg text-muted-foreground">
                  Streamline bulk shipments with integrated ERP systems, dedicated dashboards, and advanced analytics. 
                  Perfect for manufacturers, wholesalers, and large retailers.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Bulk Order Processing</h3>
                    <p className="text-muted-foreground">Upload thousands of orders with CSV/Excel integration, automated validation, and batch processing capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">International Logistics</h3>
                    <p className="text-muted-foreground">Cross-border shipping with customs clearance, documentation support, and compliance management.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Performance Analytics</h3>
                    <p className="text-muted-foreground">Real-time SLA monitoring, courier performance insights, and predictive analytics dashboards.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" data-testid="button-b2b-demo">
                Request B2B Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Enterprise Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Custom pricing negotiations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Priority support & SLA guarantees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Advanced reporting & analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>ERP/WMS integrations</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Volume Discounts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">1,000+ shipments/month</span>
                    <span className="font-semibold text-primary">15% discount</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">10,000+ shipments/month</span>
                    <span className="font-semibold text-primary">25% discount</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">50,000+ shipments/month</span>
                    <span className="font-semibold text-primary">Custom pricing</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* B2C Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Instant Quotation Engine</h3>
                <p className="text-muted-foreground mb-4">
                  Get real-time pricing from 15+ courier partners in under 3 seconds with our AI-powered comparison engine.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">BlueDart Express</span>
                    <span className="font-bold text-accent">₹145</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Delhivery Surface</span>
                    <span className="font-bold">₹89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ecom Express</span>
                    <span className="font-bold">₹95</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Smart COD Management</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Automated COD reconciliation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Fraud detection & risk scoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Faster settlement cycles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Detailed financial reporting</span>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  B2C Solutions
                </div>
                <h2 className="text-4xl font-bold">Individual & SME Shipping</h2>
                <p className="text-lg text-muted-foreground">
                  Quick shipment booking with real-time cost comparison and branded tracking for your customers. 
                  Perfect for individual sellers, small businesses, and online stores.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Instant Quotations</h3>
                    <p className="text-muted-foreground">Get real-time pricing from multiple couriers in seconds with transparent cost breakdown.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Branded Tracking</h3>
                    <p className="text-muted-foreground">Custom tracking pages with your brand colors, logo, and personalized messaging.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Flexible COD</h3>
                    <p className="text-muted-foreground">Smart COD management with automated reconciliation and fraud protection.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" data-testid="button-b2c-signup">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise APIs */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Enterprise API Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate Sheozonic's logistics intelligence directly into your platforms with our comprehensive API suite.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">API Features</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Instant Quotation API</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Courier Selection API</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Order Booking API</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Tracking & Updates API</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Analytics & Reporting API</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" data-testid="button-api-docs">
                View API Documentation
              </Button>
            </Card>
            
            <Card className="p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6">Integration Examples</h3>
              <div className="space-y-6">
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold mb-2">E-commerce Checkout</h4>
                  <p className="text-sm text-muted-foreground">
                    Display real-time shipping costs during checkout with automatic courier selection.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold mb-2">ERP Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Automate order fulfillment directly from your ERP system with bulk processing.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Mobile Apps</h4>
                  <p className="text-sm text-muted-foreground">
                    Embed shipping functionality into your mobile applications with our SDKs.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* White-Label Franchise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  <Handshake className="w-4 h-4 mr-2" />
                  Franchise Model
                </div>
                <h2 className="text-4xl font-bold">White-Label Solutions</h2>
                <p className="text-lg text-muted-foreground">
                  Launch your own branded logistics business with our proven platform and comprehensive support system.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Custom Branding</h3>
                    <p className="text-muted-foreground">Complete white-label dashboard with your logo, colors, and domain name.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Revenue Management</h3>
                    <p className="text-muted-foreground">Built-in tools for pricing, commission tracking, and financial reporting.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Partner Support</h3>
                    <p className="text-muted-foreground">Dedicated support team, training programs, and marketing assistance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Franchise Benefits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Setup Fee</span>
                    <span className="font-semibold">₹2,50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Revenue Share</span>
                    <span className="font-semibold text-accent">15-25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Territory Rights</span>
                    <span className="font-semibold">Exclusive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support Level</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Success Metrics</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">₹15L+</div>
                    <div className="text-sm text-muted-foreground">Average Monthly Revenue</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">50+</div>
                      <div className="text-xs text-muted-foreground">Active Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">95%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Button size="lg" className="w-full" data-testid="button-franchise-apply">
                Apply for Franchise
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Scale Your Logistics?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the solution that fits your business needs and start optimizing your shipping operations today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                  data-testid="button-contact-sales"
                >
                  Contact Sales Team
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                  data-testid="button-view-pricing"
                >
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
