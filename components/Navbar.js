"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Users, Star, Sparkles } from "lucide-react";

const navigation = [
  { 
    name: "Magic Journey", 
    href: "/about", 
    icon: Star,
    color: "text-yellow-500",
    hoverColor: "hover:text-yellow-600",
    bgColor: "hover:bg-yellow-50"
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      {/* Playful Wavy Border */}
      <div className="h-2 w-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
                    animate-gradient-x" />

      <div className="bg-white relative overflow-hidden">
        {/* Floating Bubbles Background */}
        <div className="absolute inset-0 bg-opacity-10">
          <div className="absolute top-0 left-1/4 w-8 h-8 rounded-full bg-blue-200 
                       animate-float opacity-20" />
          <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-pink-200 
                       animate-float-delayed opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-purple-200 
                       animate-float-slow opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between h-20">
            {/* Logo with bounce effect */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="flex items-center transform hover:scale-110 transition-transform 
                         duration-300 hover:rotate-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative">
                  <Image
                    src="/images/Asset.png"
                    alt="OrKid Logo"
                    width={120}
                    height={40}
                    className="h-12 w-auto"
                    priority
                  />
                  {isHovering && (
                    <Sparkles 
                      className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 
                               animate-bounce" 
                    />
                  )}
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full 
                           ${item.color} ${item.hoverColor} ${item.bgColor}
                           transition-all duration-300 transform hover:scale-110
                           hover:-rotate-2 font-comic`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-bold">{item.name}</span>
                </Link>
              ))}

              {/* Fun CTA Button */}
              <button
                className="relative group px-8 py-3 rounded-full bg-gradient-to-r 
                         from-purple-400 to-pink-400 text-white font-bold
                         transform hover:scale-110 transition-all duration-300
                         hover:rotate-2 shadow-lg hover:shadow-xl
                         animate-pulse-slow"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Start Adventure!</span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                             from-purple-500 to-pink-500 opacity-0 
                             group-hover:opacity-100 transition-opacity 
                             duration-300" />
              </button>
            </div>

            {/* Mobile menu button with bounce */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-full hover:bg-purple-50 transition-all
                         text-purple-500 hover:text-purple-600 transform 
                         hover:scale-110 duration-300"
              >
                {isOpen ? (
                  <X className="h-6 w-6 animate-bounce" />
                ) : (
                  <Menu className="h-6 w-6 animate-bounce" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation with playful animations */}
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white border-t border-purple-100 
                       shadow-lg animate-slideDown">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl
                           ${item.color} ${item.hoverColor} ${item.bgColor}
                           transition-all duration-300 transform hover:scale-105`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-bold">{item.name}</span>
                </Link>
              ))}
              <div className="pt-2">
                <button
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r 
                           from-purple-400 to-pink-400 text-white font-bold
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg hover:shadow-xl animate-pulse-slow"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>Start Adventure!</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}