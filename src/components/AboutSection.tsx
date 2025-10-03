
import { Wrench, Car, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Mobile Fuel Extraction Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let the wrong fuel ruin your day. Our expert team comes directly to you with specialized equipment to safely extract incorrect fuel from your vehicle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Our Service Works</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Mobile Van Service</h4>
                  <p className="text-gray-600">Our fully equipped van comes directly to your location, whether you're at home, work, or stranded on the roadside.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Safe Suction Method</h4>
                  <p className="text-gray-600">Using professional-grade suction equipment, we safely extract the wrong fuel without damaging your vehicle's fuel system.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Petrol & Diesel Mix-ups</h4>
                  <p className="text-gray-600">We handle both petrol in diesel cars and diesel in petrol cars, ensuring your engine is protected from damage.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quick Turnaround</h4>
                  <p className="text-gray-600">Most fuel extractions are completed within 30-45 minutes, getting you back on the road fast.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Car className="h-8 w-8 text-red-600" />
                  <h4 className="text-xl font-bold text-gray-900">Emergency Response</h4>
                </div>
                <p className="text-gray-700">Available 24/7 for fuel emergencies across London and surrounding areas. Fast response times guaranteed.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <h4 className="text-xl font-bold text-gray-900">Professional Equipment</h4>
                </div>
                <p className="text-gray-700">State-of-the-art fuel extraction equipment ensures safe and complete removal without engine damage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
