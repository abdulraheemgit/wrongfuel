
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const phoneNumber = "+44 7963 511139";
  const email = "help@fuelassist.co.uk";
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mobile Fuel Drain</h3>
            <p className="text-gray-300 mb-4">
              Professional mobile fuel extraction service across London and surrounding areas. 
              Fast, safe, and reliable 24/7 emergency response.
            </p>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">24/7 Emergency Service</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Our Service</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#service-area" className="hover:text-white transition-colors">Service Area</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Wrong Fuel Removal</li>
              <li>Petrol in Diesel Car</li>
              <li>Diesel in Petrol Car</li>
              <li>Emergency Fuel Extraction</li>
              <li>Mobile Fuel Drain</li>
              <li>24/7 Roadside Assistance</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-gray-300">24/7 Hotline:</p>
                  <a href={`tel:${phoneNumber}`} className="text-white font-bold hover:text-red-400">
                    {phoneNumber}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Email:</p>
                  <a href={`mailto:${email}`} className="text-white hover:text-blue-400">
                    {email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-gray-300">Coverage:</p>
                  <p className="text-white">London & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mobile Fuel Drain Service. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Professional fuel extraction service | Fully insured | Emergency response
              </p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <div className="bg-red-600 text-white rounded-lg p-4 inline-block">
              <p className="font-bold text-lg">EMERGENCY? DON'T DELAY!</p>
              <p className="text-2xl font-bold">{phoneNumber}</p>
              <p className="text-sm">Available 24/7 for immediate assistance</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
