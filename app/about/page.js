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
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const achievements = [
    {
      stat: "5000+",
      label: "Happy Students",
      icon: Users,
      description: "Young minds nurtured through our programs",
    },
    {
      stat: "98%",
      label: "Parent Satisfaction",
      icon: Star,
      description: "Parents who recommend our bridge course",
    },
    {
      stat: "200+",
      label: "Learning Activities",
      icon: BookOpen,
      description: "Engaging educational activities",
    },
    {
      stat: "15+",
      label: "Expert Educators",
      icon: GraduationCap,
      description: "Dedicated teaching professionals",
    },
  ];

  const features = [
    {
      title: "Child-Centric Approach",
      description:
        "We design content keeping your child's developmental milestones in mind, ensuring personalized learning experiences.",
      icon: Heart,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
      borderColor: "border-yellow-200",
    },
    {
      title: "Engaging Content",
      description:
        "From animated videos to interactive activities, our materials spark joy and make learning a delightful adventure.",
      icon: Sparkles,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
      borderColor: "border-purple-200",
    },
    {
      title: "Experienced Educators",
      description:
        "Our team consists of education experts, storytellers, and animators dedicated to crafting the best learning experiences.",
      icon: Award,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-blue-50">
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
          <div className="text-center">
            <h1 className="text-5xl font-bold text-purple-600 mb-6 font-display">
              About OrKid Edutainment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building Bright Futures, One Child at a Time
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At OrKid Edutainment, we believe that every child deserves a
              strong foundation for lifelong learning. Our mission is to create
              engaging, high-quality educational content that inspires curiosity
              and builds essential skills in young learners. With our bridge
              course for kids aged 3-6, we aim to make the transition to primary
              education fun, smooth, and impactful.
            </p>
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-purple-100 text-purple-600">
              <Heart className="h-12 w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4">
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

      {/* Our Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              To empower young minds by combining cutting-edge technology with
              creative pedagogy, ensuring every child enjoys the journey of
              learning.
            </p>
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-purple-100 text-purple-600">
              <Lightbulb className="h-12 w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-16">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative transform transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`rounded-2xl p-8 ${feature.bgColor} border-2 ${feature.borderColor} shadow-lg`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`flex items-center justify-center h-16 w-16 rounded-full bg-white ${feature.iconColor} mb-6 shadow-md`}
                    >
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-pink-400 opacity-20" />
                <div className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-green-400 opacity-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              Ready to Start Your Child&apos;s Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our bridge course and give your child the foundation they
              need for academic success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
              >
                Discover Our Bridge Course
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 h-64 w-64 rounded-full bg-yellow-400 opacity-5" />
      <div className="absolute bottom-40 left-0 h-64 w-64 rounded-full bg-purple-400 opacity-5" />
    </div>
  );
};

export default AboutPage;
