import { Link } from "wouter";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import Logo from "@/components/common/Logo";

const solutions = [
  { href: "/b2b-logistics", label: "B2B Logistics" },
  { href: "/b2c-shipping", label: "B2C Shipping" },
  { href: "/enterprise-apis", label: "Enterprise APIs" },
  { href: "/white-label", label: "White Label" },
  { href: "/international", label: "International" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Careers" },
  { href: "/contact", label: "Press" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Partners" },
];

const support = [
  { href: "/contact", label: "Help Center" },
  { href: "/technology", label: "API Docs" },
  { href: "/contact", label: "Status" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Training" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-background/80 text-lg">
              India's most advanced logistics aggregator platform, powered by AI and designed for the future of shipping.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/80">Gurugram, Haryana, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">hello@sheozonic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
            </div>
          </div>
          
          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Solutions</h3>
            <div className="space-y-2">
              {solutions.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-background/80 hover:text-primary transition-colors"
                  data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Company</h3>
            <div className="space-y-2">
              {company.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-background/80 hover:text-primary transition-colors"
                  data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Support</h3>
            <div className="space-y-2">
              {support.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-background/80 hover:text-primary transition-colors"
                  data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-background/60">
              © {currentYear} Sheozonic Technologies Private Limited. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-background/60 hover:text-primary transition-colors"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-background/60 hover:text-primary transition-colors"
                data-testid="footer-link-terms"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-background/60 hover:text-primary transition-colors"
                data-testid="footer-link-cookies"
              >
                Cookies
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-link-twitter"
              >
                <Twitter className="w-5 h-5 text-background/80" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-link-linkedin"
              >
                <Linkedin className="w-5 h-5 text-background/80" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-link-github"
              >
                <Github className="w-5 h-5 text-background/80" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
