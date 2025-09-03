import { useState } from "react";
import { Check, Star, Zap, Building2, Crown, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PricingCalculator from "@/components/sections/PricingCalculator";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual sellers and small businesses",
      icon: Zap,
      price: {
        monthly: 499,
        yearly: 4990,
      },
      features: [
        "Up to 100 shipments per month",
        "AI-powered courier selection",
        "Real-time tracking & notifications",
        "Basic analytics dashboard",
        "COD management",
        "Email support",
        "Mobile app access",
        "Standard API calls (1,000/month)",
      ],
      limitations: [
        "No bulk upload",
        "Basic reporting only",
        "Standard support hours",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing SMEs and e-commerce businesses",
      icon: Building2,
      price: {
        monthly: 1999,
        yearly: 19990,
      },
      features: [
        "Up to 1,000 shipments per month",
        "Everything in Starter",
        "Advanced analytics & custom reports",
        "Bulk upload capabilities (CSV/Excel)",
        "Fraud detection & risk scoring",
        "Priority support (24/7)",
        "API access with higher limits (10,000/month)",
        "Branded tracking pages",
        "Multi-user dashboard",
        "Custom integrations support",
      ],
      limitations: [
        "Limited white-label options",
        "Standard API response times",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large corporations and high-volume shippers",
      icon: Crown,
      price: {
        monthly: "Custom",
        yearly: "Custom",
      },
      features: [
        "Unlimited shipments",
        "Everything in Professional",
        "Full API suite access (unlimited)",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations & development",
        "Advanced fraud protection",
        "Custom SLA agreements",
        "Multi-tenant architecture",
        "Enterprise security features",
        "Custom reporting & analytics",
        "Onboarding & training included",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const addOns = [
    {
      name: "International Shipping",
      price: "₹2,999/month",
      description: "Cross-border logistics with customs clearance",
    },
    {
      name: "Advanced Analytics",
      price: "₹1,499/month", 
      description: "Deep insights, custom dashboards, and BI tools",
    },
    {
      name: "Dedicated Support",
      price: "₹4,999/month",
      description: "24/7 dedicated technical support team",
    },
    {
      name: "Custom Integrations",
      price: "₹9,999/month",
      description: "Bespoke API integrations and development",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your shipping needs. All plans include AI-powered features 
              with no hidden costs. Pay in INR with Indian pricing optimized for local businesses.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <Label htmlFor="billing-toggle" className={`${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </Label>
              <Switch
                id="billing-toggle"
                checked={isYearly}
                onCheckedChange={setIsYearly}
                data-testid="switch-billing"
              />
              <Label htmlFor="billing-toggle" className={`${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </Label>
              {isYearly && (
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Save 17%
                </Badge>
              )}
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`p-8 hover-lift relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-2">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      index === 0 ? 'bg-accent/10' : 
                      index === 1 ? 'gradient-primary' : 
                      'gradient-accent'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${
                        index === 0 ? 'text-accent' : 'text-white'
                      }`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">
                      {typeof plan.price.monthly === 'number' ? (
                        <>
                          ₹{isYearly ? plan.price.yearly.toLocaleString() : plan.price.monthly.toLocaleString()}
                          <span className="text-lg text-muted-foreground font-normal">
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        </>
                      ) : (
                        <span className="text-3xl">Custom Pricing</span>
                      )}
                    </div>
                    {typeof plan.price.monthly === 'number' && typeof plan.price.yearly === 'number' && (
                      <p className="text-sm text-muted-foreground">
                        {isYearly ? 
                          `₹${Math.round(plan.price.yearly / 12).toLocaleString()}/month billed annually` :
                          `₹${(plan.price.monthly * 12).toLocaleString()}/year if billed annually`
                        }
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    data-testid={`button-plan-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Feature Comparison */}
          <div className="text-center">
            <Button variant="outline" size="lg" data-testid="button-compare-features">
              Compare All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Add-on Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your logistics capabilities with our specialized add-on services
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <Card key={addon.name} className="p-6 hover-lift">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{addon.name}</h3>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">{addon.price}</div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      data-testid={`button-addon-${addon.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Add to Plan
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Volume Discounts</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The more you ship, the more you save. Automatic discounts applied based on monthly volume.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">0-100</div>
              <div className="text-sm text-muted-foreground mb-4">Shipments/month</div>
              <div className="text-2xl font-bold mb-2">Standard Rates</div>
              <div className="text-sm text-accent">Perfect for starters</div>
            </Card>
            
            <Card className="p-6 text-center hover-lift border-primary">
              <div className="text-3xl font-bold text-primary mb-2">101-1,000</div>
              <div className="text-sm text-muted-foreground mb-4">Shipments/month</div>
              <div className="text-2xl font-bold mb-2">10% Discount</div>
              <div className="text-sm text-accent">Growing businesses</div>
            </Card>
            
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">1,001-10,000</div>
              <div className="text-sm text-muted-foreground mb-4">Shipments/month</div>
              <div className="text-2xl font-bold mb-2">20% Discount</div>
              <div className="text-sm text-accent">Scale operations</div>
            </Card>
            
            <Card className="p-6 text-center hover-lift border-accent">
              <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground mb-4">Shipments/month</div>
              <div className="text-2xl font-bold mb-2">Custom Pricing</div>
              <div className="text-sm text-accent">Enterprise rates</div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Are there any setup fees or hidden charges?</h3>
              <p className="text-muted-foreground">
                No setup fees, no hidden charges. Our pricing is completely transparent. You only pay 
                the monthly subscription and actual shipping costs charged by courier partners.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Can I change my plan anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate the billing accordingly.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. 
                Enterprise customers can also opt for invoice-based billing.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Is there a free trial available?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day free trial for all plans. No credit card required to start. 
                You get full access to all features during the trial period.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">What happens if I exceed my plan limits?</h3>
              <p className="text-muted-foreground">
                We'll notify you when you're approaching your limits. You can either upgrade your plan 
                or pay overage charges at competitive rates. No service interruption.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of businesses saving up to 30% on shipping costs with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                data-testid="button-start-trial"
              >
                Start 30-Day Free Trial
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                data-testid="button-contact-sales"
              >
                Contact Sales Team
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30 Days</div>
                <div className="text-white/80">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">No Setup</div>
                <div className="text-white/80">Fees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Cancel</div>
                <div className="text-white/80">Anytime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
