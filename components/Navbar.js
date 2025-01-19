"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Users, Star, Sparkles, Cloud } from "lucide-react";

const navigation = [
  {
    name: "Magic Journey",
    href: "/about",
    icon: Star,
    color: "text-yellow-500",
    hoverColor: "hover:text-yellow-600",
    bgColor: "hover:bg-yellow-50",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      {/* Rainbow Border */}
      <div className="h-2 w-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient-x" />

      <div className="bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="flex items-center transform hover:scale-110 transition-transform duration-300 hover:rotate-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative">
                  <Image
                    src="/images/Asset.png"
                    alt="OrKid Logo"
                    width={100}
                    height={35}
                    className="h-10 w-auto md:h-12 md:w-auto"
                    priority
                  />
                  {isHovering && (
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
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

              <button className="relative group px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold transform hover:scale-110 transition-all duration-300 hover:rotate-2 shadow-lg hover:shadow-xl animate-pulse-slow">
                <Link href="/enroll">
                  <span className="relative z-10 flex items-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>Start Adventure!</span>
                  </span>
                </Link>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 text-white transform hover:rotate-180 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 rounded-full animate-spin-slow opacity-50" />
                <div className="relative">
                  {isOpen ? (
                    <X className="h-6 w-6 animate-wiggle" />
                  ) : (
                    <Menu className="h-6 w-6 animate-wiggle" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Fun Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-gradient-to-b from-blue-50 to-purple-50 z-50">
            <div className="relative h-full overflow-hidden">
              {/* Floating Clouds */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Cloud className="absolute top-4 left-4 w-16 h-16 text-white animate-float opacity-60" />
                <Cloud className="absolute top-20 right-8 w-12 h-12 text-white animate-float-delayed opacity-60" />
                <Cloud className="absolute bottom-20 left-8 w-14 h-14 text-white animate-float-slow opacity-60" />

                {/* Fun Shapes */}
                <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-yellow-200 rounded-full animate-bounce-slow opacity-40" />
                <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-pink-200 rotate-45 animate-spin-slow opacity-40" />
                <div className="absolute bottom-1/4 left-1/2 w-10 h-10 bg-purple-200 rounded-lg animate-pulse opacity-40" />
              </div>

              {/* Navigation Content */}
              <div className="relative h-full flex flex-col px-6 py-8 space-y-6">
                {/* Navigation Items */}
                <div className="space-y-4">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group block"
                    >
                      <div className="relative overflow-hidden bg-white rounded-2xl p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-2">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex items-center space-x-4">
                          {/* Icon Container */}
                          <div className="flex-shrink-0 p-3 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl transform group-hover:rotate-12 transition-transform duration-300">
                            <item.icon className="h-6 w-6 text-yellow-600" />
                          </div>

                          {/* Text */}
                          <div>
                            <span className="block text-lg font-bold text-gray-800">
                              {item.name}
                            </span>
                            <span className="text-sm text-gray-600">
                              Join the adventure!
                            </span>
                          </div>

                          {/* Sparkle Effect */}
                          <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Fun CTA Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 p-1 transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative bg-white rounded-xl p-4">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-30" />
                          <Star className="h-8 w-8 text-yellow-500 relative z-10" />
                        </div>
                        <Link href="/enroll">
                          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Start Adventure!
                          </span>
                        </Link>
                      </div>

                      {/* Rainbow Trail */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 transform translate-y-1/2" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
