import { Cookie, Settings, Eye, Shield, Database, Globe, CheckCircle, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cookies() {
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
                <Cookie className="w-6 h-6 mr-2" />
                Cookie Policy
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
                Cookie <span className="text-gradient-logistics">Policy</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance your experience on our platform.
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
                  <Cookie className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">What Are Cookies?</h2>
                <p className="text-gray-600 mb-6">Cookies are small text files that are stored on your device when you visit our website.</p>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p>Cookies help us provide you with a better experience by remembering your preferences and enabling certain functionality.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p>We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period of time).</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift border-2 border-secondary/20 bg-gradient-to-br from-white to-green-50/30">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Types of Cookies We Use</h2>
                <p className="text-gray-600 mb-6">We use different types of cookies for various purposes on our platform.</p>
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg border border-accent/20">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-accent" />
                      Essential Cookies
                    </h3>
                    <p className="text-gray-600 text-sm">Necessary for website functionality, navigation, and login status.</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg border border-accent/20">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2 text-accent" />
                      Performance Cookies
                    </h3>
                    <p className="text-gray-600 text-sm">Collect usage information to improve website performance.</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg border border-accent/20">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-accent" />
                      Functional Cookies
                    </h3>
                    <p className="text-gray-600 text-sm">Enable enhanced functionality and personalization.</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg border border-accent/20">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Eye className="w-4 h-4 mr-2 text-accent" />
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-600 text-sm">Help us understand visitor interactions anonymously.</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 hover-lift border-2 border-secondary/20 bg-gradient-to-br from-white to-gray-50/30">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">How We Use Cookies</h2>
                <p className="text-gray-600 mb-6">We use cookies to enhance your experience and improve our services.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Remember your login status and preferences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Analyze website traffic and usage patterns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Improve website performance and functionality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Provide personalized content and recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Ensure security and prevent fraud</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Enable social media integration</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift border-2 border-primary/20 bg-gradient-to-br from-white to-blue-50/30">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Managing Cookies</h2>
                <p className="text-gray-600 mb-6">You have control over cookies and can manage them through your browser settings.</p>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <Globe className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p>Browser settings: Most browsers allow you to refuse or delete cookies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p>Cookie preferences: Use our cookie preference center when available</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p>Opt-out tools: Use industry opt-out tools for advertising cookies</p>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-gray-900">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 hover-lift border-2 border-accent/20 bg-gradient-to-br from-white to-accent/5 mb-16">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-6 text-center">We may use third-party services that set their own cookies.</p>
              <div className="space-y-4 text-gray-600 text-center max-w-3xl mx-auto">
                <p className="mb-4">Some cookies on our website are set by third-party services, including:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    <span>Analytics providers (Google Analytics, etc.)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Globe className="w-4 h-4 text-accent" />
                    <span>Social media platforms</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Database className="w-4 h-4 text-accent" />
                    <span>Advertising networks</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4 text-accent" />
                    <span>Customer support tools</span>
                  </div>
                </div>
                <p className="mt-4">These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.</p>
              </div>
            </Card>

            {/* CTA Section */}
            <div className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Questions About Cookies?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're here to help you understand how we use cookies and how you can manage them.
              </p>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Last Updated:</strong> December 2024
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  <a href="mailto:privacy@sheozonic.com" className="flex items-center">
                    Contact Privacy Team
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
