import { Globe, Plane, MapPin, Clock, Shield, TrendingUp, DollarSign, Zap, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function International() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-green-50 relative">
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="absolute top-20 right-1/4 w-72 h-72 gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-88 h-88 gradient-accent rounded-full opacity-8 blur-2xl animate-bounce" style={{animationDelay: '1.5s'}}></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-4 gradient-logistics rounded-full text-white font-bold text-lg mb-8 shadow-xl animate-pulse">
                Global Shipping Solutions
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-gray-900">
                International <span className="text-gradient-logistics">Shipping</span>
              </h1>
              <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
                <strong>Ship anywhere in the world!</strong> Comprehensive international shipping solutions with 
                customs clearance, documentation, and global courier partnerships for seamless cross-border logistics.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Global Shipping Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete international shipping solutions for businesses and individuals
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 hover-lift border-2 border-primary/20">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Global Coverage</h3>
                <p className="text-gray-600 mb-6">Ship to 220+ countries and territories with our extensive network of international courier partners.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">220+ countries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">50+ courier partners</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Real-time tracking</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-accent/20">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Express Delivery</h3>
                <p className="text-gray-600 mb-6">Fast international shipping with express options for urgent deliveries worldwide.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">1-3 day delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Priority handling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Dedicated support</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-secondary/20">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Customs & Compliance</h3>
                <p className="text-gray-600 mb-6">Automated customs clearance and compliance management for hassle-free international shipping.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Auto documentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Duty calculation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Compliance checks</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Global Network</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted partnerships with leading international courier companies
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Strategic Partnerships</h3>
                    <p className="text-gray-600">Direct partnerships with DHL, FedEx, UPS, and regional carriers for optimal coverage and pricing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Transit Times</h3>
                    <p className="text-gray-600">Competitive transit times with guaranteed delivery windows and real-time tracking updates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Cost Optimization</h3>
                    <p className="text-gray-600">Intelligent route optimization and carrier selection to minimize shipping costs and transit times.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 rounded-3xl p-8 border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Global Statistics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Countries Covered</span>
                    <span className="text-2xl font-bold text-primary">220+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Courier Partners</span>
                    <span className="text-2xl font-bold text-accent">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Shipments</span>
                    <span className="text-2xl font-bold text-secondary">100K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">On-Time Delivery</span>
                    <span className="text-2xl font-bold text-primary">97%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Options Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">International Shipping Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the right shipping option for your international shipments
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Express International</h3>
                <p className="text-gray-600 mb-4">Fastest delivery option for urgent international shipments.</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 1-3 business days</div>
                  <div>• Priority handling</div>
                  <div>• Real-time tracking</div>
                  <div>• Insurance included</div>
                </div>
              </Card>
              
              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 gradient-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Standard International</h3>
                <p className="text-gray-600 mb-4">Reliable and cost-effective shipping for regular international deliveries.</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 5-10 business days</div>
                  <div>• Cost-effective</div>
                  <div>• Full tracking</div>
                  <div>• Customs clearance</div>
                </div>
              </Card>
              
              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Economy International</h3>
                <p className="text-gray-600 mb-4">Most affordable option for non-urgent international shipments.</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 10-15 business days</div>
                  <div>• Lowest cost</div>
                  <div>• Basic tracking</div>
                  <div>• Standard insurance</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-professional relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-green-500/90"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="space-y-10">
              <div className="inline-flex items-center px-8 py-4 bg-white/20 rounded-full text-white font-bold text-lg mb-6 shadow-xl">
                Go Global Today
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Ship <br/>International <span className="text-yellow-300">Seamlessly</span>
              </h2>
              <p className="text-2xl text-white font-semibold max-w-4xl mx-auto">
                <strong>Join thousands of businesses shipping globally!</strong> Start your international 
                shipping journey with our comprehensive global logistics solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                >
                  Get International Quote
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  View Global Coverage
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
