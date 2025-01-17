"use client";
import { useState, useEffect } from "react";

const LoaderComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Bouncing Letters */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          {["O", "r", "K", "i", "d"].map((letter, index) => (
            <span
              key={index}
              className="text-4xl font-fredoka font-bold animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                color: getLetterColor(index),
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full animate-pulse"
              style={{
                backgroundColor: getLoadingDotColor(index),
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper functions for colors
const getLetterColor = (index) => {
  const colors = [
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#FFD93D", // Yellow
    "#6C5CE7", // Purple
    "#FF8F56", // Orange
  ];
  return colors[index];
};

const getLoadingDotColor = (index) => {
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D"];
  return colors[index];
};

export default LoaderComponent;
