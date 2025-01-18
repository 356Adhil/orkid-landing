"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const banners = {
  desktop: [
    {
      id: 1,
      image: "/images/Website-banner1.png",
      alt: "Learning Meets Play Banner",
    },
    {
      id: 2,
      image: "/images/Website-banner2.png",
      alt: "OrKid Edutainment Banner",
    },
  ],
  mobile: [
    {
      id: 1,
      image: "/images/mobile-banner-01.png",
      alt: "Learning Meets Play Banner Mobile",
    },
    {
      id: 2,
      image: "/images/mobile-banner-02.png",
      alt: "OrKid Edutainment Banner Mobile",
    },
  ],
};

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentBanners = isMobile ? banners.mobile : banners.desktop;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentBanners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentBanners.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % currentBanners.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(
      (prev) => (prev - 1 + currentBanners.length) % currentBanners.length
    );
  };

  // Don't render anything during SSR
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isMobile ? "h-[400px]" : "h-[600px]"
      }`}
    >
      <div className="absolute inset-0">
        {currentBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes={isMobile ? "300px" : "100vw"}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className={`${isMobile ? "w-4 h-4" : "w-6 h-6"}`} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className={`${isMobile ? "w-4 h-4" : "w-6 h-6"}`} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {currentBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
