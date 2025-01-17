"use client";
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Users } from "lucide-react";
import Button from "@/components/ui/Button";

const navigation = [{ name: "About Us", href: "/about", icon: Users }];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      {/* Rainbow Border */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500" />

      <div className="bg-white shadow-lg relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#FFD700" opacity="0.1" />
                <circle cx="10" cy="10" r="1" fill="#9B59B6" opacity="0.1" />
                <circle cx="18" cy="18" r="1" fill="#3498DB" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="flex items-center transform hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/images/Asset.png"
                  alt="OrKid Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full 
                           text-purple-600 hover:text-purple-700 
                           hover:bg-purple-50 transition-all duration-200
                           transform hover:scale-105"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}

              {/* CTA Button */}
              <Button
                href="/enroll"
                variant="accent"
                size="md"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 
                         hover:to-pink-600 text-white rounded-full px-8 py-3
                         transform hover:scale-105 transition-all duration-200
                         shadow-md hover:shadow-lg"
              >
                Start Learning
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-purple-50 transition-colors
                         text-purple-600 hover:text-purple-700"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white border-t border-purple-100 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl
                           text-purple-600 hover:text-purple-700
                           hover:bg-purple-50 transition-all duration-200"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  href="/enroll"
                  variant="accent"
                  size="md"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 
                           hover:from-purple-600 hover:to-pink-600 text-white 
                           rounded-xl py-3 shadow-md hover:shadow-lg
                           transition-all duration-200"
                >
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
