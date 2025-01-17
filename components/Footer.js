import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Top Curved Border */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-br from-green-50 to-blue-50">
        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 w-full h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            className="fill-green-200"
          />
        </svg>
      </div>

      <div className="bg-green-200 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Brand Section */}
            <div className="md:col-span-4">
              <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform duration-300 h-full">
                <h3 className="text-2xl font-bold text-purple-600 font-display mb-4">
                  OrKid Edutainment
                </h3>
                <p className="text-gray-600 mb-6">
                  Building bright futures, one child at a time through fun and
                  interactive learning.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 hover:bg-yellow-200 transition-colors"
                  >
                    <span className="text-2xl">✨</span>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 hover:bg-blue-200 transition-colors"
                  >
                    <span className="text-2xl">🎨</span>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-200 transition-colors"
                  >
                    <span className="text-2xl">🎮</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <h4 className="text-xl font-display font-bold text-purple-600 mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {["About Us", "Features", "Contact"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors group"
                      >
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h4 className="text-xl font-display font-bold text-purple-600 mb-6">
                  Contact Us
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-600 text-sm break-all">
                      orkidedutainment@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-600 text-sm">+916238990887</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <h4 className="text-xl font-display font-bold text-purple-600 mb-6">
                  Stay Updated
                </h4>
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 rounded-xl bg-purple-50 border-2 border-purple-100 
                               text-gray-600 placeholder-gray-400 focus:outline-none focus:border-purple-300
                               transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-3 p-2 bg-purple-500 text-white rounded-lg
                               hover:bg-purple-600 transition-colors"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-16 text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} OrKid Edutainment. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
