import { Truck, Package, Users, TrendingUp, Shield, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function B2BLogistics() {
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
                Enterprise B2B Solutions
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-gray-900">
                B2B <span className="text-gradient-logistics">Logistics</span>
              </h1>
              <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
                <strong>Streamline your business shipping operations!</strong> Advanced logistics solutions designed for enterprises, 
                e-commerce platforms, and high-volume shippers with intelligent optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Enterprise-Grade Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive B2B logistics platform with advanced automation and analytics
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 hover-lift border-2 border-primary/20">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Bulk Shipment Management</h3>
                <p className="text-gray-600 mb-6">Process thousands of shipments with automated workflows, batch processing, and intelligent routing optimization.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">CSV/Excel bulk upload</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Automated validation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Batch processing</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-accent/20">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Analytics</h3>
                <p className="text-gray-600 mb-6">Real-time insights and performance metrics to optimize your logistics operations and reduce costs.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Cost optimization reports</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Performance dashboards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Predictive analytics</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-secondary/20">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Team Management</h3>
                <p className="text-gray-600 mb-6">Multi-user access with role-based permissions and team collaboration tools for enterprise teams.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Role-based access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Team collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Audit trails</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Our B2B Platform?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade logistics solutions that scale with your business
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Cost Reduction</h3>
                    <p className="text-gray-600">Save up to 30% on shipping costs with intelligent courier selection and route optimization.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
                    <p className="text-gray-600">Bank-grade security with data encryption, compliance certifications, and audit trails.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">Dedicated account managers and round-the-clock technical support for enterprise clients.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 rounded-3xl p-8 border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Enterprise Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Cost Savings</span>
                    <span className="text-2xl font-bold text-primary">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Processing Speed</span>
                    <span className="text-2xl font-bold text-accent">99.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Uptime SLA</span>
                    <span className="text-2xl font-bold text-secondary">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Enterprise Clients</span>
                    <span className="text-2xl font-bold text-primary">500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-professional relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-green-500/90"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="space-y-10">
              <div className="inline-flex items-center px-8 py-4 bg-white/20 rounded-full text-white font-bold text-lg mb-6 shadow-xl">
                Ready for Enterprise Scale?
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Transform Your <br/>B2B <span className="text-yellow-300">Logistics</span>
              </h2>
              <p className="text-2xl text-white font-semibold max-w-4xl mx-auto">
                <strong>Join 500+ enterprises optimizing their shipping operations!</strong> Get started with our 
                enterprise-grade B2B logistics platform today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                >
                  Schedule Enterprise Demo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Sales Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
