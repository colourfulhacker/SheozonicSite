import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/platform", label: "Platform Excellence" },
  { href: "/technology", label: "Technology" },
  { href: "/pricing", label: "Pricing" },
  { href: "/investors", label: "Investors" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  location === item.href ? "text-primary" : ""
                }`}
                data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" data-testid="button-login">
              Login
            </Button>
            <Button data-testid="button-get-started">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu fixed top-16 left-0 right-0 bottom-0 bg-background lg:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
              data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6 space-y-4">
            <Button variant="outline" className="w-full" data-testid="mobile-button-login">
              Login
            </Button>
            <Button className="w-full" data-testid="mobile-button-get-started">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
