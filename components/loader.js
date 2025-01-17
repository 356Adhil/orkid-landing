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
    <div className="fixed inset-0 bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100 z-50 flex items-center justify-center">
      <div className="text-center space-y-6 p-8 rounded-3xl">
        {/* Bouncy Letters */}
        <div className="flex items-baseline justify-center">
          {["O", "r", "k", "i", "d"].map((letter, index) => (
            <div key={index} className="px-1">
              <span
                className={`inline-block text-7xl font-bold tracking-wide animate-letter-bounce`}
                style={{
                  color: getColor(index),
                  animationDelay: `${index * 100}ms`,
                  transform: `rotate(${index % 2 ? 4 : -4}deg)`,
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getColor = (index) => {
  const colors = [
    "#FF6B6B", // Coral
    "#4ECDC4", // Turquoise
    "#FFD93D", // Sunny Yellow
    "#6C5CE7", // Purple
    "#FF8F56", // Orange
  ];
  return colors[index];
};

export default LoaderComponent;
