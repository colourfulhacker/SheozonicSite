import { Sparkles, Rocket, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import warehouseImage from "@assets/generated_images/Indian_logistics_warehouse_scene_0b680fc0.png";
import teamImage from "@assets/generated_images/Indian_business_team_office_56641528.png";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Next-Generation Logistics Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Smart <span className="text-gradient-vibrant">Logistics</span> for Modern India
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Unify B2B and B2C shipping with intelligent courier selection, instant quotations, and enterprise-grade APIs. 
                Scale your logistics operations with India's most advanced aggregator platform.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">₹50L+</div>
                <div className="text-sm text-muted-foreground">Monthly Savings</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-muted-foreground">Delivery Accuracy</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
                data-testid="button-start-trial"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold"
                data-testid="button-watch-demo"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
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
