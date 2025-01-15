// src/components/FeaturesSection.js
import { BookOpen, Video, Users } from "lucide-react";

const features = [
  {
    name: "Fun-Filled Animated Lessons",
    description:
      "Captivate your child's imagination with vibrant, engaging video lessons designed just for early learners.",
    icon: Video,
  },
  {
    name: "Hands-On Interactive Worksheets",
    description:
      "Boost retention and skill development with activities that make learning playtime.",
    icon: BookOpen,
  },
  {
    name: "Story-Based Learning Adventures",
    description:
      "Develop reading and language skills through delightful stories and phonics-focused activities.",
    icon: Users,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Our Bridge Course?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Designed with your child's development in mind
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
