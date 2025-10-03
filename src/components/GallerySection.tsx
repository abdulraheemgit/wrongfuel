import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const images = [
    {
      src: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop",
      alt: "Mobile fuel extraction van on location",
      title: "Our Mobile Service Van"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      alt: "Professional fuel extraction equipment",
      title: "Professional Equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      alt: "Fuel drain service in progress",
      title: "Service in Progress"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      alt: "Completed fuel extraction job",
      title: "Job Completed"
    },
    {
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop",
      alt: "Emergency roadside assistance",
      title: "Roadside Assistance"
    },
    {
      src: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop",
      alt: "24/7 mobile service coverage",
      title: "24/7 Coverage"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      alt: "Fuel extraction equipment close-up",
      title: "Equipment Detail"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      alt: "Digital monitoring system",
      title: "Digital Monitoring"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      alt: "Service documentation process",
      title: "Service Documentation"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      alt: "Advanced fuel analysis system",
      title: "Fuel Analysis System"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      alt: "Mobile workshop setup",
      title: "Mobile Workshop"
    },
    {
      src: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      thumb: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop",
      alt: "Emergency response vehicle",
      title: "Emergency Response"
    }
  ];

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  const openLightbox = (index: number) => {
    // Convert the page-relative index to the absolute index
    const absoluteIndex = startIndex + index;
    setCurrentImageIndex(absoluteIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Our Professional Service in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real photos from our mobile fuel extraction jobs across London and surrounding areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <Card key={startIndex + index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative group" onClick={() => openLightbox(index)}>
                  <img 
                    src={image.thumb} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <p className="text-sm">Click to view larger</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) handlePageChange(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            All photos show real fuel extraction jobs. Equipment and van setup may vary.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div 
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{images[currentImageIndex].title}</h3>
                <p className="text-sm opacity-80">{images[currentImageIndex].alt}</p>
                <div className="mt-2 text-xs opacity-60">
                  {currentImageIndex + 1} of {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
