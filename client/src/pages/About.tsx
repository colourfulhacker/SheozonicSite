import { Target, Eye, Users, Award, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import teamImage from "@assets/generated_images/Indian_business_team_office_56641528.png";
import ecommerceImage from "@assets/generated_images/Indian_e-commerce_seller_shop_69b205a6.png";

export default function About() {
  return (
    <div className="min-h-screen pt-24 gradient-indian relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-orange-50/90"></div>
      <div className="absolute top-20 right-10 w-80 h-80 gradient-accent rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 gradient-primary rounded-full opacity-15 blur-2xl animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 gradient-vibrant rounded-full text-white font-bold text-lg mb-8 shadow-xl animate-pulse">
              🇮🇳 🚀 Indian Innovation Story
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              About <span className="text-gradient-indian">Sheozonic</span> 🎆
            </h1>
            <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
              🔥 <strong>Building India's most revolutionary logistics platform!</strong> We're creating the next-generation 
              aggregator that unifies B2B and B2C shipping with intelligent AI technology, solving problems that 
              traditional players can't even imagine! 🤖✨🇮🇳
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Target className="w-4 h-4 mr-2" />
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold">Transforming Indian Logistics</h2>
                <p className="text-lg text-muted-foreground">
                  We're on a mission to become India's universal logistics layer where businesses, corporates, and individuals 
                  can access instant quotations, transparent pricing, and intelligent courier selection with unprecedented ease.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">2023</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-secondary mb-2">₹25Cr</div>
                <div className="text-sm text-muted-foreground">Funding Raised</div>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Professional Indian business team working together"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl"></div>
              <Card className="absolute bottom-4 left-4 right-4 glassmorphism p-6 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-white/90 text-sm">
                  To become India's universal logistics layer, enabling seamless collaboration between 
                  e-commerce sellers, enterprises, and partners with faster deliveries and optimized costs.
                </p>
              </Card>
            </div>
            
            <Card className="p-8 hover-lift border-2 border-accent/20">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                Democratize access to world-class logistics infrastructure through intelligent technology, 
                transparent pricing, and enterprise-grade APIs that scale with Indian business growth.
              </p>
            </Card>
            
            <Card className="p-8 hover-lift border-2 border-secondary/20">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Values</h3>
              <p className="text-muted-foreground">
                Innovation, transparency, customer-centricity, and sustainable growth. We believe in building 
                technology that empowers Indian businesses while creating positive environmental impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Indian Market Focus */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Built for India's Future</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the unique challenges and opportunities in India's rapidly growing logistics ecosystem.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tier 2/3 City Focus</h3>
                    <p className="text-muted-foreground">
                      Specialized infrastructure to serve India's emerging markets with reliable last-mile delivery.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Regional Language Support</h3>
                    <p className="text-muted-foreground">
                      Multi-language platform supporting Hindi, Tamil, Telugu, Bengali, and other regional languages.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Made in India</h3>
                    <p className="text-muted-foreground">
                      Proudly developed in India, supporting local businesses and contributing to the Digital India initiative.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">India Logistics Market</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Market Size (2024)</span>
                  <span className="text-2xl font-bold text-primary">₹2.5 Trillion</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Growth Rate (CAGR)</span>
                  <span className="text-2xl font-bold text-accent">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">E-commerce Volume</span>
                  <span className="text-2xl font-bold text-secondary">8B+ Packages</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Digital Adoption</span>
                  <span className="text-2xl font-bold text-primary">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced leaders from top logistics, technology, and finance companies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Team member cards would go here - using placeholders for now */}
            <Card className="p-8 text-center hover-lift">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CEO</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Chief Executive Officer</h3>
              <p className="text-muted-foreground mb-4">15+ years in logistics and technology</p>
              <p className="text-sm text-muted-foreground">
                Former senior executive at leading logistics companies, IIT graduate with MBA from IIM.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-lift">
              <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CTO</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Chief Technology Officer</h3>
              <p className="text-muted-foreground mb-4">12+ years in AI and machine learning</p>
              <p className="text-sm text-muted-foreground">
                Former tech lead at major Indian unicorns, specialist in logistics optimization algorithms.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-lift">
              <div className="w-20 h-20 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CFO</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Chief Financial Officer</h3>
              <p className="text-muted-foreground mb-4">10+ years in finance and operations</p>
              <p className="text-sm text-muted-foreground">
                Former investment banker and startup CFO, expert in scaling high-growth businesses.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in building India's next-generation logistics platform
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-primary font-medium">Q1 2023</div>
                  <h3 className="text-lg font-semibold">Company Founded</h3>
                  <p className="text-muted-foreground">Sheozonic Technologies incorporated with seed funding from angel investors.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center relative z-10">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-accent font-medium">Q3 2023</div>
                  <h3 className="text-lg font-semibold">MVP Launch</h3>
                  <p className="text-muted-foreground">First version of the platform launched with basic courier aggregation features.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center relative z-10">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-secondary font-medium">Q1 2024</div>
                  <h3 className="text-lg font-semibold">Series A Funding</h3>
                  <p className="text-muted-foreground">Raised ₹25 crores from leading VCs to accelerate product development and market expansion.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-primary font-medium">Q3 2024</div>
                  <h3 className="text-lg font-semibold">AI Platform Launch</h3>
                  <p className="text-muted-foreground">Launched AI-powered courier selection and fraud detection systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center relative z-10">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-accent font-medium">Q1 2025</div>
                  <h3 className="text-lg font-semibold">Enterprise & API Launch</h3>
                  <p className="text-muted-foreground">Full enterprise platform with APIs, white-label solutions, and franchise model.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
