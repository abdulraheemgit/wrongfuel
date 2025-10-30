import { Phone, AlertTriangle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const phoneNumber = "+44 7963 511139";

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // If gtag_report_conversion is available, trigger it
    if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(`tel:${phoneNumber}`);
    } else {
      // Fallback: open the call directly
      window.open(`tel:${phoneNumber}`);
    }
  };

  return (
    <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Emergency Alert */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg inline-flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
            <span className="text-red-700 font-semibold">
              FUEL EMERGENCY? DON'T PANIC!
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Put the <span className="text-red-600">Wrong Fuel</span> in Your Car?
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          We Come to You – Fast Wrong Fuel Assist Service!
        </h2>

        {/* Call Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 max-w-2xl mx-auto border-4 border-red-200">
          <p className="text-lg text-gray-600 mb-2">
            Call Our Emergency Hotline Now:
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="text-4xl md:text-5xl font-bold text-red-600 hover:text-red-700 transition-colors block mb-4"
          >
            {phoneNumber}
          </a>

          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-8 py-4 rounded-xl shadow-lg w-full md:w-auto"
            onClick={handleCallClick}
          >
            <Phone className="h-6 w-6 mr-3" />
            Tap to Call - 24/7 Service
          </Button>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-md">
            <Clock className="h-6 w-6 text-green-600" />
            <span className="font-semibold text-gray-700">Fast Response</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-md">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <span className="font-semibold text-gray-700">On-Site Service</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-md">
            <Phone className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-gray-700">24/7 Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
