import { Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const phoneNumber = "+44 7963 511139";

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // ✅ Call Google Ads conversion tracking if available
    if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(`tel:${phoneNumber}`);
    } else {
      // Fallback if tracking isn’t loaded
      window.open(`tel:${phoneNumber}`);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo + Tagline */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Wrong Fuel Assist</h1>
              <p className="text-sm text-gray-600">24/7 Emergency Service</p>
            </div>
          </div>

          {/* Desktop Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Emergency Hotline</p>
              <p className="text-2xl font-bold text-red-600">
                <a
                  href={`tel:${phoneNumber}`}
                  onClick={handleCallClick}
                  className="hover:text-red-700 transition-colors"
                >
                  {phoneNumber}
                </a>
              </p>
            </div>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold"
              onClick={handleCallClick}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Call Button */}
          <div className="md:hidden">
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white font-bold"
              onClick={handleCallClick}
            >
              <Phone className="h-4 w-4 mr-1" />
              Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
