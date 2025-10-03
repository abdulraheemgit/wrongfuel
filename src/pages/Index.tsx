
import { Phone, CheckCircle, Clock, MapPin, Star, Wrench, Car, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <GallerySection />
      <ServiceAreaSection />
      <ReviewsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
