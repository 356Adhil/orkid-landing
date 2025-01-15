// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, BookOpen, Gamepad2, Users } from "lucide-react";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Activities", href: "/activities", icon: BookOpen },
  { name: "Games", href: "/games", icon: Gamepad2 },
  { name: "About Us", href: "/about", icon: Users },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-display text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                OrKid
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 pl-10 pr-4 py-2 rounded-full border-2 border-neutral-200 focus:border-primary focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
            </div>

            {/* Navigation Links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-neutral-600 hover:text-primary transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* CTA Button */}
            <Button href="/enroll" variant="accent" size="md">
              Start Learning
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-neutral-50"
            >
              <Search className="h-6 w-6 text-neutral-600" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-neutral-50"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-neutral-600" />
              ) : (
                <Menu className="h-6 w-6 text-neutral-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-primary"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button
                href="/enroll"
                variant="accent"
                size="md"
                className="w-full"
              >
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
