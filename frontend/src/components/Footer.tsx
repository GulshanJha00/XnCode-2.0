import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-center items-center mb-6">
          <div className="text-3xl font-bold text-center text-white">
            <span className="text-purple-500">XnCode</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-white mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-500 flex items-center">
                  <span className="mr-2">🏠</span> Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-purple-500 flex items-center">
                  <span className="mr-2">🔧</span> Features
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-purple-500 flex items-center">
                  <span className="mr-2">📝</span> Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-purple-500 flex items-center">
                  <span className="mr-2">💸</span> Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-white mb-4">Resources</h3>
            <ul>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-purple-500 flex items-center">
                  <span className="mr-2">📚</span> Docs
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-purple-500 flex items-center">
                  <span className="mr-2">🔌</span> API
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-purple-500 flex items-center">
                  <span className="mr-2">🛠️</span> Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-white mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-2xl text-blue-500 hover:text-blue-400"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="text-2xl text-blue-400 hover:text-blue-300"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-2xl text-pink-500 hover:text-pink-400"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text-2xl text-blue-700 hover:text-blue-600"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 XnCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
