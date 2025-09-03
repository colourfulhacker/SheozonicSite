import { Brain, Clock, TrendingUp, Shield, Leaf, Route, CheckCircle, Code, Database, Zap, BarChart3, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Technology() {
  return (
    <div className="min-h-screen pt-24 gradient-innovation relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/80"></div>
      <div className="absolute top-20 right-10 w-96 h-96 gradient-accent rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 gradient-primary rounded-full opacity-15 blur-2xl animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-full text-white font-bold text-lg mb-8 shadow-xl animate-pulse">
              Innovation Hub
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              Smart <span className="text-gradient-innovation">Technology</span>
            </h1>
            <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
              <strong>Revolutionary technology transforming India's logistics DNA!</strong> Advanced machine learning and 
              breakthrough algorithms deliver mind-blowing efficiency and intelligence that's redefining how India ships.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Engine */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Core Technology
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900">Intelligent Decision Engine</h2>
                <p className="text-lg text-gray-600">
                  Our intelligent system analyzes over 1.2 million data points in real-time to optimize every shipment decision, 
                  considering factors like weather, traffic, courier performance, and cost efficiency.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Smart Courier Selection</h3>
                    <p className="text-gray-600">
                      Predicts the optimal courier based on cost, speed, reliability, and historical performance 
                      for each specific route and package type.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Predictive ETA Engine</h3>
                    <p className="text-gray-600">
                      Machine learning models forecast accurate delivery times using weather patterns, 
                      traffic data, courier capacity, and historical delivery performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Dynamic Pricing Algorithm</h3>
                    <p className="text-gray-600">
                      Real-time rate optimization based on demand patterns, courier capacity, 
                      seasonal trends, and market conditions across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 hover-lift">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Processing Status</h3>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Live Analysis
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Route Optimization</span>
                      <span className="text-accent font-medium">98.5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-[98.5%] transition-all duration-1000"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fraud Detection Accuracy</span>
                      <span className="text-primary font-medium">94.2%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[94.2%] transition-all duration-1000"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Price Prediction</span>
                      <span className="text-secondary font-medium">97.1%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full w-[97.1%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">1.2M+</div>
                      <div className="text-xs text-gray-600">Data Points</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent">24/7</div>
                      <div className="text-xs text-gray-600">Processing</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced AI Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Advanced Capabilities</h2>
            <p className="text-xl max-w-3xl mx-auto text-foreground/80">
              Cutting-edge features that set Sheozonic apart from traditional logistics platforms
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Fraud & Risk Detection</h3>
              <p className="mb-6 text-foreground/60">
                Advanced ML algorithms analyze behavioral patterns to identify suspicious activities 
                and prevent fraudulent COD orders before they impact your business.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Real-time risk scoring engine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Behavioral pattern analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Automated fraud blocking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Historical fraud database</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Carbon Footprint Tracker</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive sustainability reporting for eco-conscious businesses, helping you 
                meet ESG compliance requirements and reduce environmental impact.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>CO2 emission tracking per shipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Green courier recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Sustainability reports & analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Carbon offset integration</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-lift">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Route className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dynamic Routing Engine</h3>
              <p className="text-gray-600 mb-6">
                Intelligent routing that adapts to real-time conditions, optimizing delivery paths 
                for maximum efficiency across India's diverse geography.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Multi-factor route optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Real-time traffic integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Weather-based rerouting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Performance analytics dashboard</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technology Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on modern, scalable architecture designed to handle India's logistics complexity
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Machine Learning Models</h3>
                    <p className="text-gray-600 text-sm">
                      TensorFlow and PyTorch models for demand forecasting, route optimization, and fraud detection
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Cloud Infrastructure</h3>
                    <p className="text-gray-600 text-sm">
                      AWS-based microservices architecture with Redis caching and PostgreSQL databases
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Real-time Processing</h3>
                    <p className="text-gray-600 text-sm">
                      Apache Kafka for event streaming and real-time data processing across the platform
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">API Architecture</h3>
                    <p className="text-gray-600 text-sm">
                      RESTful and GraphQL APIs with comprehensive documentation and SDKs
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Analytics Pipeline</h3>
                    <p className="text-gray-600 text-sm">
                      Apache Spark for big data processing and real-time analytics dashboards
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Global CDN</h3>
                    <p className="text-gray-600 text-sm">
                      CloudFlare edge network ensuring fast response times across all Indian regions
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Developer-Friendly APIs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive API suite with detailed documentation, code examples, and SDKs for popular programming languages
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise-Grade APIs</h3>
                  <p className="text-lg text-gray-600">
                    RESTful APIs designed for high-volume enterprise applications with comprehensive error handling and response caching.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>99.9% uptime SLA guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Rate limiting: 10,000 requests/minute</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Real-time webhook notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Comprehensive error handling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Multi-language SDKs available</span>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full" data-testid="button-api-docs">
                Explore API Documentation
              </Button>
            </div>
            
            <Card className="p-6 bg-muted/20 border border-border/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">API Endpoint Example</h4>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    POST
                  </Badge>
                </div>
                
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-gray-700">
                  <div className="text-green-400"># Get instant shipping quotes</div>
                  <div className="text-blue-400">POST</div>
                  <div className="text-yellow-300"> https://api.sheozonic.com/v1/quotes</div>
                  <br />
                  <div className="text-white">{'{'}</div>
                  <div className="text-gray-300 ml-4">"from_pincode": <span className="text-green-300">"110001"</span>,</div>
                  <div className="text-gray-300 ml-4">"to_pincode": <span className="text-green-300">"400001"</span>,</div>
                  <div className="text-gray-300 ml-4">"weight": <span className="text-blue-400">1.5</span>,</div>
                  <div className="text-gray-300 ml-4">"dimensions": <span className="text-yellow-300">{"{length: 20, width: 15, height: 10}"}</span>,</div>
                  <div className="text-gray-300 ml-4">"package_type": <span className="text-green-300">"electronics"</span></div>
                  <div className="text-white">{'}'}</div>
                </div>
                
                <div className="text-sm text-gray-600">
                  Response includes real-time quotes from 15+ courier partners with delivery estimates, 
                  pricing breakdown, and intelligent recommendations.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Security & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security measures ensuring data protection and regulatory compliance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">ISO 27001</h3>
              <p className="text-sm text-gray-600">Certified information security management system</p>
            </Card>
            
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 gradient-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-gray-600">Audited security, availability, and confidentiality controls</p>
            </Card>
            
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">GDPR Ready</h3>
              <p className="text-sm text-gray-600">Data protection and privacy compliance framework</p>
            </Card>
            
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">256-bit SSL</h3>
              <p className="text-sm text-gray-600">End-to-end encryption for all data transmissions</p>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
