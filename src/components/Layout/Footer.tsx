
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="font-inter font-bold text-xl text-gray-900">StudyBridge</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-md">
              Your complete study abroad companion. From dream to departure, we're here to guide you through every step of your international education journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explore" className="text-gray-600 hover:text-primary-600">Explore Countries</Link></li>
              <li><Link to="/quiz" className="text-gray-600 hover:text-primary-600">Take Quiz</Link></li>
              <li><Link to="/tools" className="text-gray-600 hover:text-primary-600">Tools</Link></li>
              <li><Link to="/visa" className="text-gray-600 hover:text-primary-600">Visa Guide</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-600">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary-600">About Us</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2024 StudyBridge. All rights reserved. Made with ❤️ for students worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
