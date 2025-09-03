import { Truck } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
        <Truck className="w-5 h-5 text-white" />
      </div>
      {showText && (
        <span className="text-2xl font-bold text-gradient">Sheozonic</span>
      )}
    </div>
  );
}
