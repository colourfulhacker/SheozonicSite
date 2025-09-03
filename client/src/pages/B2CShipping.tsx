import { ShoppingCart, Smartphone, CreditCard, Truck, Star, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function B2CShipping() {
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
                Consumer Shipping Solutions
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight text-gray-900">
                B2C <span className="text-gradient-logistics">Shipping</span>
              </h1>
              <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
                <strong>Seamless shipping for individual customers!</strong> Fast, reliable, and affordable shipping 
                solutions for personal packages, gifts, and e-commerce deliveries across India.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Consumer-Friendly Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, fast, and reliable shipping solutions designed for individual customers
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 hover-lift border-2 border-primary/20">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Mobile-First Experience</h3>
                <p className="text-gray-600 mb-6">Book shipments instantly from your mobile device with our user-friendly app and web interface.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">One-tap booking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Real-time tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Push notifications</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-accent/20">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Flexible Payment Options</h3>
                <p className="text-gray-600 mb-6">Pay online or choose Cash on Delivery with multiple payment methods for your convenience.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">UPI & digital wallets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Credit/Debit cards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Cash on Delivery</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 hover-lift border-2 border-secondary/20">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Express Delivery</h3>
                <p className="text-gray-600 mb-6">Same-day and next-day delivery options for urgent shipments across major Indian cities.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Same-day delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Next-day delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Scheduled delivery</span>
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Customers Love Our Service</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by millions of customers across India for reliable shipping
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Lightning Fast Booking</h3>
                    <p className="text-gray-600">Book a shipment in under 30 seconds with our streamlined booking process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Best Price Guarantee</h3>
                    <p className="text-gray-600">Get the best shipping rates with our intelligent courier selection and price comparison.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Easy Package Management</h3>
                    <p className="text-gray-600">Track all your shipments in one place with detailed delivery updates and notifications.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 rounded-3xl p-8 border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Customer Satisfaction</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Rating</span>
                    <span className="text-2xl font-bold text-primary">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">On-Time Delivery</span>
                    <span className="text-2xl font-bold text-accent">98.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Happy Customers</span>
                    <span className="text-2xl font-bold text-secondary">2M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cities Covered</span>
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
                Ship with Confidence
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Start Shipping <br/>Today <span className="text-yellow-300">Instantly</span>
              </h2>
              <p className="text-2xl text-white font-semibold max-w-4xl mx-auto">
                <strong>Join 2 million+ satisfied customers!</strong> Experience fast, reliable, and affordable 
                shipping with India's most trusted logistics platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90"
                >
                  Book Shipment Now
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Download Mobile App
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
