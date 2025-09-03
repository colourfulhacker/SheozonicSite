import { Sparkles, Rocket, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
                AI-Powered <span className="text-gradient">Logistics</span> for Modern India
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
              <div className="absolute inset-0 gradient-primary opacity-20 rounded-full blur-3xl"></div>
              
              {/* Dashboard cards */}
              <div className="relative space-y-4">
                <Card className="glassmorphism p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-semibold">AI Courier Selection</div>
                    <div className="w-3 h-3 bg-accent rounded-full pulse-animation"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">BlueDart Express</span>
                      <span className="text-accent font-medium">₹145</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Delhivery Surface</span>
                      <span className="text-foreground font-medium">₹89</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ecom Express</span>
                      <span className="text-muted-foreground font-medium">₹95</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="glassmorphism p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-semibold">Real-time Analytics</div>
                    <div className="text-primary">📊</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">2,847</div>
                      <div className="text-xs text-muted-foreground">Shipments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">98.5%</div>
                      <div className="text-xs text-muted-foreground">On-time</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
