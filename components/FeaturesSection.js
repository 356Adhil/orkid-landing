import { BookOpen, Video, Users } from "lucide-react";

const features = [
  {
    name: "Fun-Filled Lessons",
    description:
      "Captivate your child's imagination with vibrant, engaging video lessons designed just for early learners.",
    icon: Video,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    borderColor: "border-yellow-200",
  },
  {
    name: "Hands-On Interactive Worksheets",
    description:
      "Boost retention and skill development with activities that make learning playtime.",
    icon: BookOpen,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    borderColor: "border-purple-200",
  },
  {
    name: "Story-Based Learning Adventures",
    description:
      "Develop reading and language skills through delightful stories and phonics-focused activities.",
    icon: Users,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    borderColor: "border-blue-200",
  },
];

const FeaturesSection = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Playful Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#FFD700" />
                <circle cx="20" cy="20" r="3" fill="#9B59B6" />
                <circle cx="38" cy="38" r="2" fill="#3498DB" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-purple-600 sm:text-5xl font-display">
            Why Choose Our Bridge Course?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Designed with your child&apos;s development in mind
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative transform transition-all duration-300 hover:scale-105"
              >
                <div className={`rounded-2xl p-8 ${feature.bgColor} border-2 ${feature.borderColor} shadow-lg`}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`flex items-center justify-center h-20 w-20 rounded-full bg-white ${feature.iconColor} mb-6 shadow-md`}>
                      <feature.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-pink-400 opacity-20" />
                <div className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-green-400 opacity-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;