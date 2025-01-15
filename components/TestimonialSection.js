// src/components/TestimonialSection.js
"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "This course helped my preschooler transition seamlessly into primary school. The lessons were so fun and effective!",
    author: "Meera",
    relation: "Mom of Vihaan",
  },
  {
    quote:
      "The stories and games kept my daughter engaged while learning essential skills. A must-try!",
    author: "Ankit",
    relation: "Dad of Ria",
  },
  {
    quote:
      "I saw my son's confidence grow as he mastered letters and numbers. Thank you, OrKid!",
    author: "Kavita",
    relation: "Mom of Aarush",
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
    <div className="bg-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Parents Love Our Bridge Course
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="max-w-3xl mx-12">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <p className="text-xl md:text-2xl text-gray-600 italic mb-6">
                  "{testimonials[currentSlide].quote}"
                </p>
                <div className="font-semibold">
                  <span className="text-indigo-600">
                    {testimonials[currentSlide].author}
                  </span>
                  <span className="text-gray-500">
                    {" "}
                    - {testimonials[currentSlide].relation}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentSlide ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
