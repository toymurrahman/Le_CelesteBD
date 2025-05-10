import { Mail, Phone, Facebook, Twitter, Instagram, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-8 border-t border-emerald-200 dark:border-emerald-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Le CelesteBD Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Le CelesteBD</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Savor the flavors of elegance. Le CelesteBD brings you a fine dining experience like no other.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors dark:hover:text-emerald-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors dark:hover:text-emerald-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors dark:hover:text-emerald-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">Home</Link></li>
              <li><Link to="/menu" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">Menu</Link></li>
              <li><Link to="/reservations" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">Reservations</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Gulshan Avenue<br />Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">+880 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">info@lecelestebd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Le CelesteBD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
