"use client";

import React from "react";
import {
  Heart,
  Star,
  Users,
  Award,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Sparkles,
  Rocket,
  SmilePlus,
  Stars,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const achievements = [
    {
      stat: "5000+",
      label: "Happy Friends",
      icon: SmilePlus,
      description: "Awesome kids just like you who love learning with us!",
    },
    {
      stat: "98%",
      label: "Happy Parents",
      icon: Star,
      description:
        "Grown-ups who think our learning adventures are super cool!",
    },
    {
      stat: "200+",
      label: "Fun Activities",
      icon: PartyPopper,
      description: "Games, stories, and magical learning moments",
    },
    {
      stat: "15+",
      label: "Learning Heroes",
      icon: Rocket,
      description: "Amazing teachers ready for adventure!",
    },
  ];

  const features = [
    {
      title: "Your Adventure, Your Way!",
      description:
        "Just like how every superhero has special powers, every child learns differently. We make sure your learning journey is perfect for YOU!",
      icon: Stars,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
      borderColor: "border-yellow-200",
    },
    {
      title: "Magic Learning Time",
      description:
        "Get ready for videos full of wonder, games that make you smile, and activities that feel like playing with your best friends!",
      icon: Sparkles,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
      borderColor: "border-purple-200",
    },
    {
      title: "Super Teacher Squad",
      description:
        "Our teachers are like friendly wizards who know how to make learning feel like a fantastic party!",
      icon: Award,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50">
        <div className="absolute inset-0" style={{ opacity: 0.15 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="fun-shapes"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="5" fill="#FFD700" />
                <path d="M40,5 L45,15 L35,15 Z" fill="#FF69B4" />
                <rect
                  x="5"
                  y="35"
                  width="10"
                  height="10"
                  rx="2"
                  fill="#4CAF50"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fun-shapes)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-purple-600 mb-6 font-display animate-[float_6s_ease-in-out_infinite]">
              Welcome to OrKid&apos;s Magical Learning World! 🌈
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Where Learning Feels Like a Super Fun Adventure! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              Who Are We? We&apos;re Your Learning Buddies! 🤗
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Hi there, friend! We&apos;re like a team of fun-loving explorers
              who love to make learning feel like the most exciting adventure
              ever! Whether you&apos;re 3, 4, 5, or 6 years old, we&apos;re here
              to be your companions on this magical journey of discovery. Think
              of us as your friendly guides in the amazing world of learning! 🚀
            </p>
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-purple-100 text-purple-600 transition-transform duration-1000 hover:scale-110">
              <Heart className="h-12 w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-700 ease-in-out hover:scale-105 hover:rotate-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4 transition-transform duration-1000 hover:scale-110">
                    <item.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {item.stat}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {item.label}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Dream Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              Our Big Dream! 🌟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We dream of a world where every kid like you can learn while
              having the MOST fun ever! It&apos;s like having a magical
              playground where games make you smarter and stories make you
              wiser! How cool is that? 🎮 📚
            </p>
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-purple-100 text-purple-600 transition-transform duration-1000 hover:rotate-180">
              <Lightbulb className="h-12 w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-16">
            Why Kids Love Our Learning Adventures! 🎪
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative transform transition-all duration-700 ease-in-out hover:scale-105 hover:translate-y-[-5px]"
              >
                <div
                  className={`rounded-2xl p-8 ${feature.bgColor} border-2 ${feature.borderColor} shadow-lg`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`flex items-center justify-center h-16 w-16 rounded-full bg-white ${feature.iconColor} mb-6 shadow-md transition-transform duration-1000 hover:scale-110`}
                    >
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-pink-400 opacity-20 animate-[float_4s_ease-in-out_infinite]" />
                <div className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-green-400 opacity-20 animate-[float_4s_ease-in-out_infinite_0.5s]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              Ready For The Most Amazing Learning Adventure? 🎢
            </h2>
            <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Jump in and let&apos;s start this fantastic journey together! 🌈
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-xl font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-xl md:px-10 transform transition-all duration-500 ease-in-out hover:scale-105 hover:translate-y-[-2px]"
              >
                Start Your Adventure! 🚀
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-xl font-medium rounded-full text-purple-600 bg-white hover:bg-purple-50 md:py-4 md:text-xl md:px-10 transform transition-all duration-500 ease-in-out hover:scale-105 hover:translate-y-[-2px]"
              >
                Say Hi! 👋
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="absolute top-40 right-0 h-64 w-64 rounded-full bg-yellow-400 opacity-5 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-0 h-64 w-64 rounded-full bg-purple-400 opacity-5 animate-[float_8s_ease-in-out_infinite_1s]" />
    </div>
  );
};

export default AboutPage;
