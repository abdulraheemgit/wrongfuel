
import { Phone, MapPin, Wrench, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Phone,
      title: "1. Call Us",
      description: "Ring our emergency hotline and provide your location and vehicle details. We're available 24/7.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: MapPin,
      title: "2. We Come to You",
      description: "Our mobile van is dispatched immediately to your location - no need to arrange towing or move your car.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Wrench,
      title: "3. Safe Extraction",
      description: "Using professional suction equipment, we safely extract the wrong fuel and clean your fuel system.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: CheckCircle,
      title: "4. Back on the Road",
      description: "We add the correct fuel and you're ready to drive safely. The whole process takes 30-45 minutes.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Mobile Fuel Drain Service Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and professional. Get your vehicle back on the road in under an hour.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className={`${step.bgColor} border-2 hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-md`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Don't Start Your Engine!</h3>
            <p className="text-lg text-red-600 font-semibold mb-2">If you've put the wrong fuel in your car, don't turn on the engine.</p>
            <p className="text-gray-700">Starting the engine can cause expensive damage. Call us immediately for safe extraction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
