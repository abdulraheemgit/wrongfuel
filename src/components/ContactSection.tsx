
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const phoneNumber = "+44 7963 511139";
  const email = "help@fuelassist.co.uk";

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us - 24/7 Emergency Service
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need immediate help or have questions? We're here for you around the clock.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="bg-red-600 text-white mb-8">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Emergency Hotline</h3>
                <p className="text-3xl font-bold mb-4">{phoneNumber}</p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold"
                  onClick={() => window.open(`tel:${phoneNumber}`)}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now for Emergency Service
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                        {email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Operating Hours</h4>
                      <p className="text-gray-600">24 hours a day, 7 days a week</p>
                      <p className="text-sm text-gray-500">Emergency service available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Area</h4>
                      <p className="text-gray-600">London & Surrounding Counties</p>
                      <p className="text-sm text-gray-500">Mobile service - we come to you</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <Input type="tel" placeholder="Your phone number" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <Input placeholder="Where is your vehicle located?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Describe your situation - what type of fuel mix-up occurred, vehicle details, etc."
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 font-bold"
                >
                  Send Message
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  For urgent situations, please call our emergency hotline for faster response.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
