import React from "react";
import {
  Utensils,
  Building2,
  Users,
  Rocket,
  ShieldCheck,
  Gem,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import CoverForAll from "../../components/shared/CoverForAll";
import bannarImg from "../../assets/about/bannar-about.jpg";
import serve2Img from "../../assets/about/banner.jpg";
import serveImg from "../../assets/about/chef-service.jpg";
import { Link } from "react-router-dom";
import AllButtons from "../../components/shared/AllButtons";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <CoverForAll
        title={"LE CELESTEBD"}
        sub_title={
          "  A fine dining experience in the heart of Dhaka where flavor meets finesse."
        }
        img={bannarImg}
      />

      {/* Why Choose Us */}
      <div className="grid md:grid-cols-2 gap-10 items-center m-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Why Dine With Us?
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <Utensils className="text-emerald-600 mt-1" />
              <span>
                <strong>Signature Dishes:</strong> Fusion platters made with
                ethically sourced ingredients.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Building2 className="text-emerald-600 mt-1" />
              <span>
                <strong>Elegant Ambiance:</strong> A perfect blend of comfort
                and sophistication.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="text-emerald-600 mt-1" />
              <span>
                <strong>Warm Hospitality:</strong> Personalized service that
                makes every visit memorable.
              </span>
            </li>
          </ul>
          <Link to={"/menu"}>
            <AllButtons className="mt-6" text="Explore Menu" />
          </Link>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-xl transition-shadow">
          <img
            src={serve2Img}
            alt="Dining"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Mission / Values / Promise */}
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-lg transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          Our Mission, Values & Promise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Rocket className="mx-auto text-emerald-600 mb-2" size={32} />
            <h4 className="font-semibold text-lg">Mission</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Creating exquisite culinary journeys that leave lasting
              impressions.
            </p>
          </div>
          <div className="text-center">
            <Gem className="mx-auto text-emerald-600 mb-2" size={32} />
            <h4 className="font-semibold text-lg">Values</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Passion, quality, integrity, and innovation.
            </p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto text-emerald-600 mb-2" size={32} />
            <h4 className="font-semibold text-lg">Promise</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Serving with integrity — fresh, safe, and delightful meals.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-10 items-center m-6">
        <div className="rounded-lg overflow-hidden shadow-md dark:shadow-lg transition-shadow">
          <img
            src={serveImg}
            alt="Founder Story"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            How It All Started
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Le CelesteBd was born from a passion for food and hospitality. Our
            founder envisioned a space that blends world-class cuisine with
            Bangladeshi warmth and hospitality.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-24 py-16 items-center m-6">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            For reservations or inquiries, feel free to reach out.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-emerald-600 w-6 h-6 mt-1" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <a
                  href="mailto:hello@lecelestebd.com"
                  className="text-base text-gray-900 dark:text-gray-200 hover:underline"
                >
                  info@lecelestebd.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-emerald-600 w-6 h-6 mt-1" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <a
                  href="tel:+880123456789"
                  className="text-base text-gray-900 dark:text-gray-200 hover:underline"
                >
                  +880 1234 56789
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-emerald-600 w-6 h-6 mt-1" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="text-base text-gray-900 dark:text-gray-200">
                  123 Gulshan Avenue Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
          <Link to={"/reservation"} className="">
            <AllButtons className="mt-10" text="Book a Table" />
          </Link>
        </div>

        {/* Google Map */}
        <div className="w-full h-[300px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902359664899!2d90.39120471538523!3d23.750903494592175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85ac4d1531f%3A0x94785d9e2a8a18e2!2sDhaka!5e0!3m2!1sen!2sbd!4v1712812336563!5m2!1sen!2sbd"
            className="w-full h-full rounded-xl shadow-md dark:shadow-lg border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Le CelesteBd Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
