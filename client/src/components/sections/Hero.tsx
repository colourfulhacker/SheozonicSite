import { Sparkles, Rocket, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import warehouseImage from "@assets/generated_images/Indian_logistics_warehouse_scene_0b680fc0.png";
import teamImage from "@assets/generated_images/Indian_business_team_office_56641528.png";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-indian opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 gradient-accent rounded-full opacity-15 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-6 py-3 gradient-indian rounded-full text-sm font-bold text-white shadow-lg hover-glow">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                🚀 Revolutionary Logistics Platform for India
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                Smart <span className="text-gradient-indian">Logistics</span> <br/>for <span className="text-gradient-innovation">Modern India</span> 🇮🇳
              </h1>
              <p className="text-xl leading-relaxed font-medium" style={{color: 'hsl(220, 40%, 25%)'}}>
                🔥 <strong>Revolutionizing logistics across India!</strong> Unify B2B and B2C shipping with AI-powered courier selection, 
                lightning-fast quotations, and enterprise-grade APIs. Join the logistics revolution that's transforming 
                how India ships! ⚡
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center card-white p-4 rounded-2xl hover-lift border-2 border-orange-300">
                <div className="text-4xl font-black text-gradient-indian">₹50L+</div>
                <div className="text-sm font-semibold text-gray-700">💰 Monthly Savings</div>
              </div>
              <div className="text-center card-white p-4 rounded-2xl hover-lift border-2 border-green-300">
                <div className="text-4xl font-black text-gradient-innovation">99.8%</div>
                <div className="text-sm font-semibold text-gray-700">🎯 Delivery Accuracy</div>
              </div>
              <div className="text-center card-white p-4 rounded-2xl hover-lift border-2 border-yellow-300">
                <div className="text-4xl font-black text-gradient-vibrant">10K+</div>
                <div className="text-sm font-semibold text-gray-700">🏢 Happy Businesses</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="btn-primary px-10 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl"
                style={{background: 'linear-gradient(135deg, hsl(18, 100%, 55%) 0%, hsl(35, 100%, 50%) 100%)', color: 'white'}}
                data-testid="button-start-trial"
              >
                <Rocket className="w-6 h-6 mr-3 animate-bounce" />
                🚀 Start FREE Trial - 30 Days!
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-10 py-6 text-xl font-bold border-4 transform hover:scale-105 transition-all duration-300 shadow-xl"
                style={{borderColor: 'hsl(18, 100%, 55%)', color: 'hsl(18, 100%, 55%)'}}
                data-testid="button-watch-demo"
              >
                <Play className="w-6 h-6 mr-3" />
                🎬 Watch Live Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Background gradient circle */}
              <div className="absolute inset-0 gradient-vibrant opacity-15 rounded-3xl blur-3xl"></div>
              
              {/* Hero Images */}
              <div className="relative space-y-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={warehouseImage} 
                    alt="Modern Indian logistics warehouse with delivery operations"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Card className="glassmorphism p-4 hover-lift">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-lg font-semibold text-white">Smart Courier Selection</div>
                        <div className="w-3 h-3 bg-accent rounded-full pulse-animation"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/80">BlueDart Express</span>
                          <span className="text-accent font-medium">₹145</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/80">Delhivery Surface</span>
                          <span className="text-secondary font-medium">₹89</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card className="glassmorphism p-4 hover-lift">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-accent">2,847</div>
                      <div className="text-xs text-muted-foreground">Daily Shipments</div>
                    </div>
                  </Card>
                  <Card className="glassmorphism p-4 hover-lift">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-primary">98.5%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
