import { useState } from "react";
import { Calculator, Truck, Clock, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface CourierQuote {
  id: string;
  name: string;
  price: number;
  deliveryTime: string;
  reliability: number;
  isRecommended?: boolean;
  isCheapest?: boolean;
  isEcoFriendly?: boolean;
  icon: string;
  iconColor: string;
}

export default function PricingCalculator() {
  const [fromPincode, setFromPincode] = useState("");
  const [toPincode, setToPincode] = useState("");
  const [weight, setWeight] = useState("");
  const [packageType, setPackageType] = useState("");
  const [quotes, setQuotes] = useState<CourierQuote[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    if (!fromPincode || !toPincode || !weight || !packageType) {
      return;
    }

    setIsCalculating(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockQuotes: CourierQuote[] = [
        {
          id: "bluedart",
          name: "BlueDart Express",
          price: 165,
          deliveryTime: "1-2 days delivery",
          reliability: 95,
          isRecommended: true,
          icon: "🚚",
          iconColor: "bg-blue-100"
        },
        {
          id: "delhivery",
          name: "Delhivery Surface",
          price: 89,
          deliveryTime: "3-5 days delivery",
          reliability: 88,
          isCheapest: true,
          icon: "🚛",
          iconColor: "bg-red-100"
        },
        {
          id: "ecom",
          name: "Ecom Express",
          price: 105,
          deliveryTime: "2-4 days delivery",
          reliability: 90,
          isEcoFriendly: true,
          icon: "🌱",
          iconColor: "bg-green-100"
        }
      ];
      
      setQuotes(mockQuotes);
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4">Shipping Cost Calculator</h3>
        <p className="text-lg text-muted-foreground">Get instant quotes from multiple couriers</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from-pincode">From Pincode</Label>
                <Input
                  id="from-pincode"
                  type="text"
                  placeholder="110001"
                  value={fromPincode}
                  onChange={(e) => setFromPincode(e.target.value)}
                  data-testid="input-from-pincode"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to-pincode">To Pincode</Label>
                <Input
                  id="to-pincode"
                  type="text"
                  placeholder="400001"
                  value={toPincode}
                  onChange={(e) => setToPincode(e.target.value)}
                  data-testid="input-to-pincode"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="1.5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  data-testid="input-weight"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="package-type">Package Type</Label>
                <Select value={packageType} onValueChange={setPackageType}>
                  <SelectTrigger data-testid="select-package-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="document">Document</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="apparel">Apparel</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              onClick={handleCalculate}
              disabled={isCalculating || !fromPincode || !toPincode || !weight || !packageType}
              className="w-full py-4 text-lg font-semibold"
              data-testid="button-calculate"
            >
              <Calculator className="w-5 h-5 mr-2" />
              {isCalculating ? "Calculating..." : "Calculate Shipping Cost"}
            </Button>
          </div>
          
          <div className="space-y-4">
            {isCalculating ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : quotes.length > 0 ? (
              quotes.map((quote) => (
                <Card key={quote.id} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${quote.iconColor} rounded-lg flex items-center justify-center`}>
                        <span className="text-lg">{quote.icon}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{quote.name}</div>
                        <div className="text-sm text-muted-foreground">{quote.deliveryTime}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">₹{quote.price}</div>
                      <div className={`text-sm ${
                        quote.isRecommended ? 'text-accent' :
                        quote.isCheapest ? 'text-secondary' :
                        quote.isEcoFriendly ? 'text-accent' : 'text-muted-foreground'
                      }`}>
                        {quote.isRecommended && "AI Recommended"}
                        {quote.isCheapest && "Best Price"}
                        {quote.isEcoFriendly && "Eco-Friendly"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {quote.isEcoFriendly ? "Carbon Footprint" : "Reliability Score"}
                    </span>
                    <span className={`font-medium ${quote.isEcoFriendly ? 'text-accent' : ''}`}>
                      {quote.isEcoFriendly ? "Low" : `${quote.reliability}%`}
                    </span>
                  </div>
                </Card>
              ))
            ) : (
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter shipping details to get instant quotes</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
