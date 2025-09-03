import { Code, Zap, Shield, Globe, Database, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EnterpriseAPIs() {
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
                Developer-First APIs
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-gray-900">
                Enterprise <span className="text-gradient-logistics">APIs</span>
              </h1>
              <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
                <strong>Powerful APIs for seamless integration!</strong> Build, scale, and optimize your logistics 
                operations with our comprehensive REST APIs and webhooks designed for enterprise applications.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">API Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive API suite for all your logistics integration needs
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 hover-lift border-2 border-primary/20">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">RESTful APIs</h3>
                <p className="text-gray-600 mb-6">Clean, intuitive REST APIs with comprehensive documentation and SDKs for multiple programming languages.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Rate limiting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Versioning support</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-accent/20">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Real-time Webhooks</h3>
                <p className="text-gray-600 mb-6">Get instant notifications for shipment updates, delivery confirmations, and status changes via webhooks.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Event-driven updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Retry mechanisms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Custom endpoints</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-secondary/20">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Bulk Operations</h3>
                <p className="text-gray-600 mb-6">Process thousands of shipments with bulk APIs for quotes, bookings, and tracking operations.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Batch processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Async operations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Progress tracking</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Core API Endpoints</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential endpoints for logistics operations
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-white/60 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900">Get Shipping Quotes</h4>
                    <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      GET
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-gray-700">
                    <div className="text-blue-400">GET</div>
                    <div className="text-yellow-300"> /api/v1/quotes</div>
                    <br />
                    <div className="text-gray-300">?from_pincode=110001</div>
                    <div className="text-gray-300">&to_pincode=400001</div>
                    <div className="text-gray-300">&weight=1.5</div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    Get real-time shipping quotes from multiple courier partners with pricing and delivery estimates.
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/60 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900">Create Shipment</h4>
                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      POST
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-gray-700">
                    <div className="text-blue-400">POST</div>
                    <div className="text-yellow-300"> /api/v1/shipments</div>
                    <br />
                    <div className="text-white">{'{'}</div>
                    <div className="text-gray-300 ml-4">"courier_id": <span className="text-green-300">"bluedart"</span>,</div>
                    <div className="text-gray-300 ml-4">"from_address": <span className="text-green-300">"..."</span>,</div>
                    <div className="text-gray-300 ml-4">"to_address": <span className="text-green-300">"..."</span></div>
                    <div className="text-white">{'}'}</div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    Create and book shipments with automatic AWB generation and tracking setup.
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Enterprise Security</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bank-grade security and compliance for enterprise applications
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">API Authentication</h3>
                <p className="text-gray-600">OAuth 2.0 and API key authentication with role-based access control and rate limiting.</p>
              </Card>
              
              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 gradient-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Data Encryption</h3>
                <p className="text-gray-600">End-to-end encryption for all API communications with TLS 1.3 and data at rest encryption.</p>
              </Card>
              
              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Global CDN</h3>
                <p className="text-gray-600">High-performance global CDN with 99.9% uptime SLA and sub-100ms response times.</p>
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
                Start Building Today
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Integrate with <br/>Our <span className="text-yellow-300">APIs</span>
              </h2>
              <p className="text-2xl text-white font-semibold max-w-4xl mx-auto">
                <strong>Join 1000+ developers building with our APIs!</strong> Get started with comprehensive 
                documentation, SDKs, and dedicated developer support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                >
                  View API Documentation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Get API Access
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
