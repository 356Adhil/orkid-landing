// src/components/TestimonialSection.js
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This course helped my preschooler transition seamlessly into primary school. The lessons were so fun and effective!",
    author: "Meera",
    relation: "Mom of Vihaan",
    bgColor: "from-yellow-100 to-yellow-50",
    accentColor: "text-yellow-600",
  },
  {
    quote:
      "The stories and games kept my daughter engaged while learning essential skills. A must-try!",
    author: "Ankit",
    relation: "Dad of Ria",
    bgColor: "from-purple-100 to-purple-50",
    accentColor: "text-purple-600",
  },
  {
    quote:
      "I saw my son's confidence grow as he mastered letters and numbers. Thank you, OrKid!",
    author: "Kavita",
    relation: "Mom of Aarush",
    bgColor: "from-blue-100 to-blue-50",
    accentColor: "text-blue-600",
  },
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
      {/* Decorative Background */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="stars"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M25,1 L31,18 L49,18 L34,29 L40,46 L25,35 L10,46 L16,29 L1,18 L19,18 L25,1Z"
                fill="#FFD700"
                transform="scale(0.3)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-12 font-display">
          What Parents Say About OrKid
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-purple-600" />
            </button>

            <div className="max-w-3xl mx-16">
              <div
                className={`bg-gradient-to-br ${testimonials[currentSlide].bgColor} rounded-3xl shadow-xl p-8 md:p-12 transform transition-all duration-500`}
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 -left-6 bg-white rounded-full p-4 shadow-lg">
                  <Quote
                    className={`h-8 w-8 ${testimonials[currentSlide].accentColor}`}
                  />
                </div>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 relative">
                  &quot;{testimonials[currentSlide].quote}&quot;
                </p>
                <div className="font-semibold">
                  <span
                    className={`${testimonials[currentSlide].accentColor} text-lg`}
                  >
                    {testimonials[currentSlide].author}
                  </span>
                  <span className="text-gray-600 text-lg">
                    {" "}
                    - {testimonials[currentSlide].relation}
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 h-8 w-8 rounded-full bg-pink-400 opacity-20" />
                <div className="absolute -top-4 -right-4 h-6 w-6 rounded-full bg-green-400 opacity-20" />
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-purple-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-8 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-purple-600 w-12"
                    : "bg-purple-200 hover:bg-purple-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
