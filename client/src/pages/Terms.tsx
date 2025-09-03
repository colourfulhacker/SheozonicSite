import { FileText, Scale, AlertTriangle, CheckCircle, Users, Shield, Globe, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen pt-24 gradient-professional relative overflow-hidden">
      <div className="absolute top-20 right-1/4 w-72 h-72 gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-88 h-88 gradient-accent rounded-full opacity-8 blur-2xl animate-bounce" style={{animationDelay: '1.5s'}}></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-4 gradient-logistics rounded-full text-white font-bold text-lg mb-8 shadow-xl">
                <Scale className="w-6 h-6 mr-2" />
                Terms of Service
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
                Terms of <span className="text-gradient-logistics">Service</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Please read these terms carefully before using our logistics platform and services.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 hover-lift border-2 border-primary/20 bg-gradient-to-br from-white to-blue-50/30">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">By accessing and using Sheozonic's services, you agree to be bound by these Terms of Service.</p>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p>These terms constitute a legally binding agreement between you and Sheozonic Technologies Private Limited.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift border-2 border-secondary/20 bg-gradient-to-br from-white to-green-50/30">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Service Description</h2>
                <p className="text-gray-600 mb-6">Sheozonic provides logistics and shipping aggregation services through our platform.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Shipping rate comparison and booking services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Courier partner integration and management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Package tracking and delivery notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Customer support and assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">API access for enterprise customers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">White-label solutions for partners</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 hover-lift border-2 border-secondary/20 bg-gradient-to-br from-white to-gray-50/30">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">User Responsibilities</h2>
                <p className="text-gray-600 mb-6">As a user of our services, you agree to comply with the following requirements.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Provide accurate and complete information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Comply with all applicable laws and regulations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Not use our services for illegal or prohibited activities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Maintain the security of your account credentials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Pay all applicable fees and charges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Respect intellectual property rights</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift border-2 border-primary/20 bg-gradient-to-br from-white to-blue-50/30">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">Our liability is limited as described in this section.</p>
                <div className="space-y-4 text-gray-600">
                  <p className="font-medium text-gray-900">Sheozonic acts as an intermediary between you and courier partners. We are not responsible for:</p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Delays, damages, or loss of packages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Courier partner service failures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Force majeure events beyond our control</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Indirect or consequential damages</span>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-gray-900">Our total liability shall not exceed the amount paid by you for the specific service in question.</p>
                </div>
              </Card>
            </div>

            <Card className="p-8 hover-lift border-2 border-accent/20 bg-gradient-to-br from-white to-accent/5 mb-16">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Governing Law</h2>
              <p className="text-gray-600 mb-6 text-center">These terms are governed by the laws of India.</p>
              <div className="space-y-4 text-gray-600 text-center max-w-3xl mx-auto">
                <p>Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana, India.</p>
                <p>We encourage users to resolve disputes through our customer support team before pursuing legal action.</p>
              </div>
            </Card>

            {/* CTA Section */}
            <div className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Questions About Terms?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our legal team is here to help clarify any questions about our terms of service.
              </p>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Last Updated:</strong> December 2024
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  <a href="mailto:legal@sheozonic.com" className="flex items-center">
                    Contact Legal Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
