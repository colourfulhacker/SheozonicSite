import { Shield, Lock, Eye, FileText, Database, Users, Globe, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
                <Shield className="w-6 h-6 mr-2" />
                Privacy Policy
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
                Your Privacy <span className="text-gradient-logistics">Matters</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We are committed to protecting your personal information and being transparent about how we collect, use, and share your data.
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
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Information We Collect</h2>
                <p className="text-gray-600 mb-6">We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      Personal Information:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-6 text-gray-600">
                      <li>Name, email address, phone number</li>
                      <li>Shipping and billing addresses</li>
                      <li>Payment information (processed securely)</li>
                      <li>Account credentials and preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-primary" />
                      Usage Information:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-6 text-gray-600">
                      <li>Service usage patterns and preferences</li>
                      <li>Device information and IP addresses</li>
                      <li>Log data and analytics</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift border-2 border-secondary/20 bg-gradient-to-br from-white to-green-50/30">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">How We Use Your Information</h2>
                <p className="text-gray-600 mb-6">We use the information we collect to provide, maintain, and improve our services.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Process and fulfill your shipping requests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Provide customer support and respond to inquiries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Send important service updates and notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Improve our platform and develop new features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Ensure security and prevent fraud</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">Comply with legal obligations</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 hover-lift border-2 border-secondary/20 bg-gradient-to-br from-white to-gray-50/30">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Security</h2>
                <p className="text-gray-600 mb-6">We implement appropriate technical and organizational measures to protect your personal information.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Encryption of data in transit and at rest</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Regular security assessments and updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Access controls and authentication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Secure data centers and infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Employee training on data protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-gray-600">Incident response procedures</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-lift border-2 border-primary/20 bg-gradient-to-br from-white to-blue-50/30">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Rights</h2>
                <p className="text-gray-600 mb-6">You have certain rights regarding your personal information under applicable data protection laws.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Access and review your personal information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Correct inaccurate or incomplete data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Request deletion of your personal information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Object to certain processing activities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Data portability and transfer rights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Withdraw consent where applicable</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Questions About Privacy?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're here to help you understand how we protect your data and respect your privacy rights.
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
