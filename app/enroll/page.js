"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Users,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Baby,
  Calendar,
  Mail,
  Phone,
  User,
  Star,
} from "lucide-react";

const EnrollPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    email: "",
    phone: "",
    preferredTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Move to next step or submit form
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log("Form submitted:", formData);
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Expertly designed program covering essential early learning skills",
    },
    {
      icon: Users,
      title: "Small Group Sessions",
      description: "Personalized attention in interactive small groups",
    },
    {
      icon: Star,
      title: "Expert Teachers",
      description:
        "Experienced educators dedicated to early childhood development",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="2" fill="#FFD700" />
                <circle cx="20" cy="20" r="3" fill="#9B59B6" />
                <circle cx="38" cy="38" r="2" fill="#3498DB" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-600 mb-4 font-display">
              Start Your Child&apos;s Learning Adventure!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Give your 3-6-year-old the tools to succeed in school and beyond
              with our specially designed bridge course. Fun, interactive, and
              educational!
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <div
                    className={`flex items-center justify-center h-10 w-10 rounded-full 
                    ${
                      step >= item
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step > item ? <CheckCircle className="h-6 w-6" /> : item}
                  </div>
                  {item < 3 && (
                    <div
                      className={`h-1 w-24 mx-2 ${
                        step > item ? "bg-purple-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between max-w-2xl mx-auto mt-2 text-sm text-gray-600">
              <span>Student Info</span>
              <span>Parent Details</span>
              <span>Payment</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div>
                    <label
                      htmlFor="childName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Child&apos;s Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Baby className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="childAge"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Child&apos;s Age
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Age</option>
                      <option value="3">3 years</option>
                      <option value="4">4 years</option>
                      <option value="5">5 years</option>
                      <option value="6">6 years</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Preferred Class Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Time Slot</option>
                        <option value="morning">Morning (9 AM - 11 AM)</option>
                        <option value="afternoon">
                          Afternoon (2 PM - 4 PM)
                        </option>
                        <option value="evening">Evening (5 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Parent&apos;s Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-600 mb-4">
                      Enrollment Summary
                    </h3>
                    <div className="space-y-3">
                      <p>
                        <span className="font-medium">Child&apos;s Name:</span>{" "}
                        {formData.childName}
                      </p>
                      <p>
                        <span className="font-medium">Age:</span>{" "}
                        {formData.childAge} years
                      </p>
                      <p>
                        <span className="font-medium">Preferred Time:</span>{" "}
                        {formData.preferredTime}
                      </p>
                      <p>
                        <span className="font-medium">Parent&apos;s Name:</span>{" "}
                        {formData.parentName}
                      </p>
                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        {formData.email}
                      </p>
                      <p>
                        <span className="font-medium">Phone:</span>{" "}
                        {formData.phone}
                      </p>
                    </div>
                  </div>

                  {/* Payment Section Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-purple-600 mb-2">
                      Secure & Easy Payments
                    </h3>
                    <p className="text-gray-600">
                      Enjoy a hassle-free and secure payment process for
                      enrolling your child in our courses.
                    </p>
                  </div>

                  {/* Steps to Complete Payment */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4">
                      Steps to Complete Payment:
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Select your desired course",
                        'Click on "Proceed to Payment"',
                        "Choose your preferred payment method",
                        "Complete the transaction and receive confirmation instantly",
                      ].map((step, index) => (
                        <div key={index} className="flex items-start">
                          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mr-3">
                            {index + 1}
                          </span>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">
                      Select Payment Method
                    </h4>
                    <div className="grid gap-4">
                      <label className="relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-purple-500 bg-white">
                        <input
                          type="radio"
                          name="payment"
                          className="h-4 w-4 text-purple-600"
                        />
                        <div className="ml-4">
                          <span className="block font-medium">
                            Debit/Credit Cards
                          </span>
                          <span className="text-sm text-gray-500">
                            Pay securely using your card
                          </span>
                        </div>
                      </label>

                      <label className="relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-purple-500 bg-white">
                        <input
                          type="radio"
                          name="payment"
                          className="h-4 w-4 text-purple-600"
                        />
                        <div className="ml-4">
                          <span className="block font-medium">
                            UPI Payments
                          </span>
                          <span className="text-sm text-gray-500">
                            Google Pay, PhonePe, Paytm, etc.
                          </span>
                        </div>
                      </label>

                      <label className="relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-purple-500 bg-white">
                        <input
                          type="radio"
                          name="payment"
                          className="h-4 w-4 text-purple-600"
                        />
                        <div className="ml-4">
                          <span className="block font-medium">Net Banking</span>
                          <span className="text-sm text-gray-500">
                            All major banks supported
                          </span>
                        </div>
                      </label>

                      <label className="relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-purple-500 bg-white">
                        <input
                          type="radio"
                          name="payment"
                          className="h-4 w-4 text-purple-600"
                        />
                        <div className="ml-4">
                          <span className="block font-medium">Wallets</span>
                          <span className="text-sm text-gray-500">
                            Paytm, Google Pay, etc.
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Security Assurance */}
                  <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg mt-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-purple-800">
                        Your information is protected with industry-standard
                        encryption to ensure secure transactions.
                      </p>
                    </div>
                  </div>

                  {/* Terms and Agreement */}
                  <div className="mt-6 text-sm text-gray-600">
                    By proceeding, you agree to our terms of service and privacy
                    policy.
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 ml-auto"
                >
                  {step === 3 ? "Proceed to Payment" : "Continue"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-600">
              What Your Child Will Get
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-4">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 h-64 w-64 rounded-full bg-yellow-400 opacity-5" />
      <div className="absolute bottom-40 left-0 h-64 w-64 rounded-full bg-purple-400 opacity-5" />
    </div>
  );
};

export default EnrollPage;
