"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "SPACE",
    subtitle: "Free Lesson created in collaboration with",
    partner: "NASA",
    cta: "EXPLORE SPACE",
    bgColor: "from-blue-900 to-purple-900",
    // mainImage: "/images/astronaut-kid.png",
    characterImage: "/images/astronaut-kid.png",
    secondaryImage: "/images/ufo-character.png",
  },
  {
    id: 2,
    title: "ANIMALS",
    subtitle: "Learn about wildlife with",
    partner: "National Geographic",
    cta: "DISCOVER ANIMALS",
    bgColor: "from-green-800 to-emerald-900",
    // mainImage: "/images/safari-kid.png",
    characterImage: "/images/lion-character.png",
    secondaryImage: "/images/monkey-character.png",
  },
  {
    id: 3,
    title: "MUSIC",
    subtitle: "Create and learn music with",
    partner: "Disney Music",
    cta: "START PLAYING",
    bgColor: "from-purple-800 to-pink-900",
    // mainImage: "/images/music-kid.png",
    characterImage: "/images/musical-panda.png",
    secondaryImage: "/images/dancing-notes.png",
  },
  {
    id: 4,
    title: "OCEAN",
    subtitle: "Explore ocean life with",
    partner: "Discovery Kids",
    cta: "DIVE IN",
    bgColor: "from-cyan-900 to-blue-900",
    // mainImage: "/images/diving-kid.png",
    characterImage: "/images/dolphin-character.png",
    secondaryImage: "/images/fish-group.png",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden h-screen min-h-[700px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} transition-colors duration-500`}
        >
          <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-50" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-6 relative z-10 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white">
                {slides[currentSlide].title}
              </h1>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-white/90">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-3xl md:text-4xl font-display text-white">
                  {slides[currentSlide].partner}
                </p>
              </div>
              <div className="space-y-8">
                <button className="btn bg-red-500 hover:bg-red-600 text-white text-xl py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200">
                  {slides[currentSlide].cta}
                </button>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link
                    href="https://apps.apple.com"
                    target="_blank"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/images/app-store-badge.png"
                      alt="Download on App Store"
                      width={160}
                      height={48}
                      className="w-auto"
                    />
                  </Link>
                  <Link
                    href="https://play.google.com"
                    target="_blank"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Get it on Google Play"
                      width={160}
                      height={48}
                      className="w-auto"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right content - Images */}
          <div className="relative h-[500px] hidden lg:block">
            {slides[currentSlide].mainImage && (
              <motion.div
                key={`main-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={slides[currentSlide].mainImage}
                  alt="Main Scene"
                  width={300}
                  height={300}
                  className="object-contain z-10"
                />
              </motion.div>
            )}

            {/* Floating Character (Right - Top) */}
            <motion.div
              key={`char1-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              }}
              className="absolute top-4 right-8"
            >
              <Image
                src={slides[currentSlide].characterImage}
                alt="Character"
                width={160}
                height={160}
                className="rounded-full bg-white p-2 shadow-xl"
              />
            </motion.div>

            {/* Floating Character (Left - Bottom) */}
            <motion.div
              key={`char2-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, 20, 0],
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
              }}
              className="absolute bottom-8 left-8"
            >
              <Image
                src={slides[currentSlide].secondaryImage}
                alt="Secondary Character"
                width={120}
                height={120}
                className="rounded-full bg-white p-2 shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V85C360 120 720 10 1440 85V120H0Z"
            className="fill-white"
            fillOpacity="0.3"
          />
          <path
            d="M0 120V95C280 120 720 20 1440 95V120H0Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
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

export default HeroSection;
