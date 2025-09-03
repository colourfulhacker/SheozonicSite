import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Solutions from "@/pages/Solutions";
import Platform from "@/pages/Platform";
import Technology from "@/pages/Technology";
import Pricing from "@/pages/Pricing";
import Investors from "@/pages/Investors";
import Contact from "@/pages/Contact";
import B2BLogistics from "@/pages/B2BLogistics";
import B2CShipping from "@/pages/B2CShipping";
import EnterpriseAPIs from "@/pages/EnterpriseAPIs";
import WhiteLabel from "@/pages/WhiteLabel";
import International from "@/pages/International";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/platform" component={Platform} />
          <Route path="/technology" component={Technology} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/investors" component={Investors} />
          <Route path="/contact" component={Contact} />
          <Route path="/b2b-logistics" component={B2BLogistics} />
          <Route path="/b2c-shipping" component={B2CShipping} />
          <Route path="/enterprise-apis" component={EnterpriseAPIs} />
          <Route path="/white-label" component={WhiteLabel} />
          <Route path="/international" component={International} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/cookies" component={Cookies} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="scroll-smooth custom-scroll">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
