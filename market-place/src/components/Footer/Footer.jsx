import React, { useState, useEffect } from "react";
import { 
  ShoppingCart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Store,
  Shield,
  CreditCard,
  Truck,
  Headphones,
  Star,
  Heart,
  ArrowRight,
  Eye
} from "lucide-react";

const Footer = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [emailFocused, setEmailFocused] = useState(false);

  const quickLinks = [
    { name: "Browse Categories", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Seller Registration", href: "#" },
    { name: "Buyer Protection", href: "#" },
    { name: "Mobile App", href: "#" },
    { name: "Gift Cards", href: "#" }
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Order Tracking", href: "#" },
    { name: "Returns & Refunds", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Report a Problem", href: "#" }
  ];

  const company = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Investor Relations", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Blog", href: "#" }
  ];

  const legal = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Seller Agreement", href: "#" },
    { name: "Dispute Resolution", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" }
  ];

  const paymentMethods = [
    { name: "Visa", logo: "💳" },
    { name: "Mastercard", logo: "💳" },
    { name: "PayPal", logo: "💰" },
    { name: "Apple Pay", logo: "📱" },
    { name: "Google Pay", logo: "🔔" }
  ];

  const features = [
    { icon: Shield, text: "Secure Shopping", desc: "SSL encryption & buyer protection" },
    { icon: Truck, text: "Fast Delivery", desc: "Same-day & next-day options" },
    { icon: Headphones, text: "24/7 Support", desc: "Round-the-clock customer service" },
    { icon: Star, text: "Quality Guaranteed", desc: "Verified sellers & products" }
  ];

  // Animation for sections appearing
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSections(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Simulate sections appearing with timeouts
    setTimeout(() => setVisibleSections([0]), 200);
    setTimeout(() => setVisibleSections(prev => [...prev, 1]), 400);
    setTimeout(() => setVisibleSections(prev => [...prev, 2]), 600);
    setTimeout(() => setVisibleSections(prev => [...prev, 3]), 800);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-white">
      {/* Features Section */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 text-gray-700 transform transition-all duration-700 hover:scale-105 ${
                    visibleSections.includes(0) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 animate-pulse">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{feature.text}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className={`text-center mb-8 transform transition-all duration-700 ${
              visibleSections.includes(1) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 animate-bounce">Stay in the Loop</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the latest deals, new product launches, and exclusive offers delivered to your inbox.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto transform transition-all duration-700 delay-200 ${
              visibleSections.includes(1) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex-1 relative">
              <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                emailFocused ? 'text-orange-500' : 'text-gray-400'
              }`} />
              <input
                type="email"
                placeholder="Enter your email"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
              />
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/25 animate-pulse">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Company Info */}
            <div 
              className={`md:col-span-2 transform transition-all duration-700 ${
                visibleSections.includes(2) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 animate-pulse">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  MarketPlace
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your trusted marketplace connecting buyers with sellers worldwide. 
                Discover quality products, secure transactions, and exceptional service.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>123 Commerce Street, Business District</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>support@marketplace.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div 
              className={`transform transition-all duration-700 delay-100 ${
                visibleSections.includes(2) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:pl-2 transform flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div 
              className={`transform transition-all duration-700 delay-200 ${
                visibleSections.includes(2) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Support</h3>
              <ul className="space-y-3">
                {support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:pl-2 transform flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div 
              className={`transform transition-all duration-700 delay-300 ${
                visibleSections.includes(2) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Company</h3>
              <ul className="space-y-3">
                {company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-blue-500 transition-all duration-300 hover:pl-2 transform flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div 
              className={`transform transition-all duration-700 delay-400 ${
                visibleSections.includes(2) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Legal</h3>
              <ul className="space-y-3">
                {legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-blue-500 transition-all duration-300 hover:pl-2 transform flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div 
            className={`flex flex-col md:flex-row justify-between items-center gap-6 transform transition-all duration-700 ${
              visibleSections.includes(3) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Copyright */}
            <div className="text-gray-600 text-center md:text-left">
              <p className="mb-2">© 2025 MarketPlace. All rights reserved.</p>
              <p className="text-sm">Empowering global commerce, one transaction at a time.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-white rounded-full border border-gray-200 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 transform hover:scale-110 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-sm">We accept:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="p-2 bg-white rounded border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                    title={method.name}
                  >
                    <span className="text-lg">{method.logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Made with Love */}
      <div className="bg-white py-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> for better shopping experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;