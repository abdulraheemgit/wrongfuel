
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Kensington",
      rating: 5,
      text: "Absolute lifesaver! Put petrol in my diesel car at 11pm and they were there within 20 minutes. Professional, quick, and fairly priced. Highly recommended!",
      date: "2 weeks ago"
    },
    {
      name: "James T.",
      location: "Camden",
      rating: 5,
      text: "Made a silly mistake and filled up with diesel instead of petrol. Called these guys and they sorted it out in 30 minutes. Excellent service and very understanding!",
      date: "1 month ago"
    },
    {
      name: "Emma R.",
      location: "Greenwich",
      rating: 5,
      text: "Fast, professional, and saved me from an expensive garage bill. The technician was very knowledgeable and explained everything clearly. Will definitely use again if needed.",
      date: "3 weeks ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from drivers we've helped get back on the road quickly and safely.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                  "{review.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-1 mb-2">
              {renderStars(5)}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">5.0 Star Average Rating</h3>
            <p className="text-gray-700">Based on 150+ satisfied customers across London</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
