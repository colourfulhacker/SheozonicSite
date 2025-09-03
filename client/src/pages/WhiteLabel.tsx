import { Palette, Layers, Settings, Users, BarChart, Globe, CheckCircle, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WhiteLabel() {
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
                Custom Branding Solutions
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-gray-900">
                White <span className="text-gradient-logistics">Label</span>
              </h1>
              <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
                <strong>Launch your own logistics platform!</strong> Complete white-label solutions with your branding, 
                custom features, and full control over the user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">White Label Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete customization and branding options for your logistics platform
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 hover-lift border-2 border-primary/20">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Complete Branding</h3>
                <p className="text-gray-600 mb-6">Full control over colors, logos, fonts, and UI elements to match your brand identity perfectly.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Custom color schemes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Logo integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Custom domains</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-accent/20">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Modular Architecture</h3>
                <p className="text-gray-600 mb-6">Choose from pre-built modules or request custom features to create the perfect solution for your business.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Pick & choose features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Custom workflows</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">API integrations</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-secondary/20">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Admin Dashboard</h3>
                <p className="text-gray-600 mb-6">Comprehensive admin panel to manage users, pricing, courier partners, and platform settings.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">User management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Pricing controls</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Analytics & reports</span>
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose White Label?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Launch faster, scale efficiently, and maintain full control
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Faster Time to Market</h3>
                    <p className="text-gray-600">Launch your logistics platform in weeks, not months, with our proven infrastructure and features.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Revenue Sharing</h3>
                    <p className="text-gray-600">Flexible revenue models with transparent reporting and automated payouts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Global Infrastructure</h3>
                    <p className="text-gray-600">Leverage our global network of courier partners and infrastructure for instant scalability.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 rounded-3xl p-8 border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">White Label Benefits</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Development Time</span>
                    <span className="text-2xl font-bold text-primary">80% Faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Setup Cost</span>
                    <span className="text-2xl font-bold text-accent">90% Lower</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Maintenance</span>
                    <span className="text-2xl font-bold text-secondary">Fully Managed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Support</span>
                    <span className="text-2xl font-bold text-primary">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple 4-step process to launch your white-label platform
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Consultation</h3>
                <p className="text-gray-600 text-sm">Discuss your requirements and customize the solution for your business needs.</p>
              </Card>
              
              <Card className="p-6 text-center hover-lift">
                <div className="w-16 h-16 gradient-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Branding</h3>
                <p className="text-gray-600 text-sm">Apply your branding, colors, and customizations to match your brand identity.</p>
              </Card>
              
              <Card className="p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Testing</h3>
                <p className="text-gray-600 text-sm">Thorough testing and quality assurance to ensure everything works perfectly.</p>
              </Card>
              
              <Card className="p-6 text-center hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Launch</h3>
                <p className="text-gray-600 text-sm">Go live with your custom logistics platform and start serving customers.</p>
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
                Launch Your Platform
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Start Your <br/>White Label <span className="text-yellow-300">Journey</span>
              </h2>
              <p className="text-2xl text-white font-semibold max-w-4xl mx-auto">
                <strong>Join 50+ successful white-label partners!</strong> Launch your own logistics platform 
                with our proven technology and comprehensive support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                >
                  Schedule Demo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Get White Label Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
