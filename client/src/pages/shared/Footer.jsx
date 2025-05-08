import { Mail, Phone, Facebook, Twitter, Instagram, MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // Remove if not using React Router
import logo from "../../../public/logo.png"; // Use `/logo.png` if using Create React App

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t border-emerald-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Le CelesteBD Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-emerald-700">Le CelesteBD</span>
            </div>
            <p className="text-gray-600 mb-4">
              Savor the flavors of elegance. Le CelesteBD brings you a fine dining experience like no other.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-emerald-600">Home</Link></li>
              <li><Link to="/menu" className="text-gray-600 hover:text-emerald-600">Menu</Link></li>
              <li><Link to="/reservations" className="text-gray-600 hover:text-emerald-600">Reservations</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-emerald-600">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-600 hover:text-emerald-600">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-emerald-600">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Gulshan Avenue<br />Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600">+880 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600">info@lecelestebd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Le CelesteBD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
