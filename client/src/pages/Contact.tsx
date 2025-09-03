import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Building2, Users, Briefcase, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 2000);
  };

  const offices = [
    {
      city: "Gurugram (HQ)",
      address: "DLF Cyber City, Phase 2, Sector 24, Gurugram, Haryana 122002",
      phone: "+91 98765 43210",
      email: "hello@sheozonic.com",
      type: "Headquarters",
    },
    {
      city: "Mumbai",
      address: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
      phone: "+91 98765 43211",
      email: "mumbai@sheozonic.com", 
      type: "Western Region",
    },
    {
      city: "Bangalore",
      address: "Electronic City, Bangalore, Karnataka 560100",
      phone: "+91 98765 43212",
      email: "bangalore@sheozonic.com",
      type: "Southern Region",
    },
  ];

  const careers = [
    {
      icon: Building2,
      title: "Engineering",
      openings: 12,
      description: "Full-stack developers, AI/ML engineers, DevOps specialists",
    },
    {
      icon: Users,
      title: "Product & Design",
      openings: 5,
      description: "Product managers, UX/UI designers, user researchers",
    },
    {
      icon: Briefcase,
      title: "Business Development",
      openings: 8,
      description: "Sales executives, partnership managers, account managers",
    },
    {
      icon: Heart,
      title: "Operations",
      openings: 6,
      description: "Operations managers, customer success, quality assurance",
    },
  ];

  return (
    <div className="min-h-screen pt-24 gradient-warm relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 to-yellow-50/85"></div>
      <div className="absolute top-20 right-1/4 w-72 h-72 gradient-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-88 h-88 gradient-accent rounded-full opacity-15 blur-2xl animate-bounce" style={{animationDelay: '1.5s'}}></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 gradient-accent rounded-full text-white font-bold text-lg mb-8 shadow-xl animate-pulse">
              💬 🇮🇳 Let's Connect & Transform!
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              Get in <span className="text-gradient-indian">Touch</span> 🤝
            </h1>
            <p className="text-2xl font-bold max-w-5xl mx-auto text-gray-700">
              🚀 <strong>Ready to revolutionize your logistics?</strong> Our team of experts is excited to help 
              you get started with personalized solutions that will transform your shipping operations! 📦✨🇮🇳
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        required
                        data-testid="input-first-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        required
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="Enter your email address"
                      required
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input 
                      id="company" 
                      placeholder="Enter your company name"
                      data-testid="input-company"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select required>
                      <SelectTrigger data-testid="select-inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="franchise">Franchise Opportunity</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="careers">Career Opportunities</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your requirements or questions..."
                      className="min-h-[120px]"
                      required
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  Reach out to us through any of the channels below. We're always happy to help!
                </p>
              </div>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Phone Support</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-7PM IST</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-muted-foreground">hello@sheozonic.com</p>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Mon-Fri: 9AM-7PM IST</p>
                      <p className="text-sm text-muted-foreground">Emergency support 24/7</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full" data-testid="button-schedule-demo">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="w-full" data-testid="button-start-trial">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" className="w-full" data-testid="button-view-pricing">
                    View Pricing
                  </Button>
                  <Button variant="outline" className="w-full" data-testid="button-api-docs">
                    API Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Offices</h2>
            <p className="text-xl text-muted-foreground">
              Visit us at our offices across major Indian cities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{office.city}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      office.type === 'Headquarters' ? 'bg-primary/10 text-primary' :
                      'bg-accent/10 text-accent'
                    }`}>
                      {office.type}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <p className="text-sm">{office.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <p className="text-sm">{office.email}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    data-testid={`button-visit-${office.city.toLowerCase()}`}
                  >
                    Get Directions
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of India's logistics revolution. We're looking for passionate individuals 
              to help build the future of intelligent logistics.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {careers.map((career, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <career.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{career.title}</h3>
                      <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {career.openings} openings
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{career.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      data-testid={`button-career-${career.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      View Openings
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" data-testid="button-careers-page">
              View All Career Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Partners & Media */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Partnership Opportunities</h3>
                  <p className="text-muted-foreground">
                    Interested in becoming a Sheozonic partner? Let's explore how we can work together.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Courier & Logistics Partners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Technology Integration Partners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>White-Label Franchise Partners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>E-commerce Platform Integrations</span>
                  </div>
                </div>
                
                <Button className="w-full" data-testid="button-partnership-inquiry">
                  Submit Partnership Inquiry
                </Button>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Press & Media</h3>
                  <p className="text-muted-foreground">
                    Media inquiries, press releases, and company information for journalists.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Press Kit & Company Assets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Executive Interviews</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Industry Reports & Research</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Product Announcements</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Media Contact:</p>
                  <p className="font-medium">press@sheozonic.com</p>
                </div>
                
                <Button variant="outline" className="w-full" data-testid="button-press-kit">
                  Download Press Kit
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
