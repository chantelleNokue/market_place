import React, { useState, useEffect } from "react";
import { ShoppingCart, Star, Users, Package, Truck, Shield, Search, Store, Clock } from "lucide-react";

// Mock components for the UI effects (replace with your actual imports)
const TextGenerateEffect = ({ words, className, duration, filter }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText(words.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, duration * 10);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, words, duration]);

  return <p className={className}>{displayedText}</p>;
};

const ShinyText = ({ children, className }) => (
  <span className={`text-blue-600 animate-pulse ${className}`}>
    {children}
  </span>
);

const Magnet = ({ children, padding, disabled, magnetStrength }) => (
  <div className="hover:scale-105 transition-transform duration-300 ease-out">
    {children}
  </div>
);

const Button = ({ content, className, ...props }) => (
  <button
    className={`px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 ${className}`}
    {...props}
  >
    {content}
  </button>
);

const Hero = () => {
  const [currentStats, setCurrentStats] = useState({ products: 0, customers: 0, vendors: 0 });
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  
  const finalStats = { products: 100000, customers: 250000, vendors: 15000 };
  const words = `Discover anything you need from trusted sellers worldwide. Whether you're looking for electronics, fashion, home goods, books, or unique handmade items, our marketplace connects you with thousands of verified vendors. Search, compare, and order with confidence.`;

  const features = [
    { icon: Package, text: "100,000+ Products", delay: 0 },
    { icon: Users, text: "250,000+ Happy Customers", delay: 200 },
    { icon: Store, text: "15,000+ Trusted Sellers", delay: 400 },
    { icon: Shield, text: "Buyer Protection", delay: 600 },
    { icon: Search, text: "Smart Search", delay: 800 },
    { icon: Clock, text: "24/7 Support", delay: 1000 }
  ];

  const floatingElements = [
    { emoji: "📱", x: "10%", y: "20%", delay: 0 },
    { emoji: "👕", x: "80%", y: "15%", delay: 500 },
    { emoji: "🎧", x: "15%", y: "70%", delay: 1000 },
    { emoji: "📚", x: "85%", y: "60%", delay: 1500 },
    { emoji: "🏠", x: "5%", y: "40%", delay: 2000 },
    { emoji: "⌚", x: "90%", y: "35%", delay: 2500 }
  ];

  // Animated counter effect
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        if (step <= steps) {
          setCurrentStats({
            products: Math.floor((finalStats.products * step) / steps),
            customers: Math.floor((finalStats.customers * step) / steps),
            vendors: Math.floor((finalStats.vendors * step) / steps)
          });
          step++;
        } else {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const timeout = setTimeout(animateStats, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Stagger feature animations
  useEffect(() => {
    features.forEach((feature, index) => {
      setTimeout(() => {
        setVisibleFeatures(prev => [...prev, index]);
      }, feature.delay);
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-blue-50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Product Elements */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute text-4xl animate-bounce"
            style={{
              left: element.x,
              top: element.y,
              animationDelay: `${element.delay}ms`,
              animationDuration: "3s"
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35">
        {/* Hero Content */}
        <div className="flex-1 space-y-8">
          <Magnet padding={20} disabled={false} magnetStrength={50}>
            <span className="inline-block bg-blue-100 text-blue-600 text-lg px-6 py-3 rounded-full border border-blue-300 shadow-lg animate-bounce">
              🛍️ Your Ultimate Marketplace
            </span>
          </Magnet>

          <Magnet padding={20} disabled={false} magnetStrength={50}>
            <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-5 animate-fade-in">
              <span className="block">Find Anything</span>
              <ShinyText>Buy from Anyone</ShinyText>
              <span className="block">Anywhere</span>
            </h1>
          </Magnet>

          <Magnet padding={20} disabled={false} magnetStrength={50}>
            <TextGenerateEffect
              duration={2}
              filter={false}
              words={words}
              className="text-zinc-600 md:text-lg text-md max-w-[600px] mt-5 mb-10 leading-relaxed"
            />
          </Magnet>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 my-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 animate-pulse">
                {currentStats.products.toLocaleString()}+
              </div>
              <div className="text-sm text-zinc-600">Products</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 animate-pulse">
                {currentStats.customers.toLocaleString()}+
              </div>
              <div className="text-sm text-zinc-600">Customers</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 animate-pulse">
                {currentStats.vendors.toLocaleString()}+
              </div>
              <div className="text-sm text-zinc-600">Sellers</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Magnet padding={20} disabled={false} magnetStrength={50}>
              <Button 
                content={
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Start Searching
                  </div>
                }
                className="animate-pulse"
              />
            </Magnet>
            <Magnet padding={20} disabled={false} magnetStrength={50}>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Browse Categories
              </button>
            </Magnet>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg bg-white/70 backdrop-blur-sm border border-blue-200 shadow-sm transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-blue-50 ${
                    visibleFeatures.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Icon className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-zinc-700">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative">
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
              alt="Online Marketplace Shopping" 
              className="w-full h-auto rounded-2xl shadow-2xl animate-float"
            />
            
            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-200">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">4.8 Rating</span>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-green-500 text-white p-4 rounded-xl shadow-lg animate-bounce delay-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-semibold">Secure Orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;