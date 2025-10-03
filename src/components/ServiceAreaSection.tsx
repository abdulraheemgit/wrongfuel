
import { MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceAreaSection = () => {
  const areas = [
    "Central London", "North London", "South London", "East London", "West London",
    "Westminster", "Camden", "Islington", "Hackney", "Tower Hamlets",
    "Greenwich", "Lewisham", "Southwark", "Lambeth", "Wandsworth",
    "Hammersmith & Fulham", "Kensington & Chelsea", "Brent", "Ealing", "Hounslow",
    "Richmond upon Thames", "Kingston upon Thames", "Croydon", "Bromley", "Barnet",
    "Enfield", "Haringey", "Waltham Forest", "Redbridge", "Havering",
    "Barking & Dagenham", "Newham", "Hillingdon"
  ];

  const surroundingAreas = [
    "Hertfordshire", "Essex", "Kent", "Surrey", "Buckinghamshire",
    "Watford", "St Albans", "Hemel Hempstead", "Dartford", "Gravesend",
    "Sevenoaks", "Guildford", "Woking", "Slough", "Windsor"
  ];

  return (
    <section id="service-area" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Coverage Area
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide mobile fuel extraction services across London and surrounding counties. Fast response guaranteed.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Greater London</h3>
                  <p className="text-gray-600">All 33 London boroughs covered</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2 py-1">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Surrounding Areas</h3>
                  <p className="text-gray-600">Counties and major towns</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {surroundingAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2 py-1">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Response Times</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Central London: 15-30 minutes</li>
                  <li>• Greater London: 30-45 minutes</li>
                  <li>• Surrounding areas: 45-90 minutes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Don't see your area listed? Give us a call - we may still be able to help!
          </p>
          <div className="bg-white rounded-lg p-4 shadow-md inline-block">
            <p className="text-sm text-gray-600">Emergency callout available 24/7</p>
            <p className="text-2xl font-bold text-red-600">+44 7XXX XXX XXX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
