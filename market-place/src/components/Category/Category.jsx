import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import ProductDetails from "./ProductDetails";

// Context for mouse enter state
const MouseEnterContext = createContext(undefined);

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// 3D Card Container Component
export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };
  
  const handleMouseEnter = (e) => {
    setIsMouseEntered(true);
  };
  
  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-4 flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// Card Body Component
export const CardBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-auto w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

// Card Item Component
export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();
  
  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);
  
  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };
  
  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Hook to use mouse enter context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// Button Component
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// Heading Component
const Heading = ({ highlight, heading }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          {highlight}
        </span>{" "}
        {heading}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
    </div>
  );
};

// Product data
const category = [
  {
    id: 'prod001',
    title: 'Organic Whole Wheat Bread',
    description: 'Freshly baked, wholesome bread made with 100% organic whole wheat flour. Perfect for sandwiches or toast.',
    picture: 'https://media.istockphoto.com/id/1223423223/photo/wholegrain-and-seeds-sliced-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=evsZ9jGvQk57zoyVelmRVe1VyzK_gjSjZ0Ho8ls9x0w=',
    amount: 50,
    price: 3.99,
    unit: 'loaf',
  },
  {
    id: 'prod002',
    title: 'Premium Arabica Coffee Beans',
    description: 'Medium roast, single-origin Arabica beans from Colombia. Rich aroma and smooth finish.',
    picture: 'https://images.unsplash.com/photo-1651352374151-edeb3ad19573?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amount: 20,
    price: 12.50,
    unit: '250g',
  },
  {
    id: 'prod003',
    title: 'Handcrafted Ceramic Mug',
    description: 'Unique, hand-painted ceramic mug. Ideal for your morning coffee or tea. Microwave and dishwasher safe.',
    picture: 'https://media.istockphoto.com/id/1357351337/photo/handcrafted-white-ceramic-cups-and-rose.webp?a=1&b=1&s=612x612&w=0&k=20&c=LPKjkaTMxnt5QtfK2JkVKUChJzQGU7TdTCKVM1Lfd6w=',
    amount: 15,
    price: 8.75,
    unit: 'unit',
  },
  {
    id: 'prod004',
    title: 'Natural Lavender Essential Oil',
    description: '100% pure therapeutic grade lavender essential oil. Perfect for aromatherapy and relaxation.',
    picture: 'https://m.media-amazon.com/images/I/71ILJz+gvNL.jpg',
    amount: 30,
    price: 9.99,
    unit: '10ml',
  },
  {
    id: 'prod005',
    title: 'Wireless Bluetooth Headphones',
    description: 'Comfortable over-ear headphones with crystal clear sound and long-lasting battery life. Built-in mic for calls.',
    picture: 'https://havitsmart.com/cdn/shop/files/havit-wireless-headphones-i62-bluetoothhavit-business-724215_700x700.jpg?v=1749802182',
    amount: 10,
    price: 49.99,
    unit: 'unit',
  },
  {
    id: 'prod006',
    title: 'Fresh Organic Apples (Fuji)',
    description: 'Crisp, sweet, and juicy organic Fuji apples. Locally sourced from sustainable farms.',
    picture: 'https://freshby4roots.com/cdn/shop/files/Fuji-apples-organic.jpg?v=1738950504&width=480',
    amount: 100,
    price: 1.20,
    unit: 'unit',
  },
  {
    id: 'prod007',
    title: 'Artisanal Dark Chocolate Bar',
    description: '70% cacao dark chocolate, handcrafted with ethically sourced beans. Rich and intense flavor.',
    picture: 'https://driftlesschocolates.com/cdn/shop/files/Artisan-Dark-sq_1100x.jpg?v=1720556793',
    amount: 40,
    price: 4.50,
    unit: '100g',
  },
  {
    id: 'prod008',
    title: 'Reusable Stainless Steel Water Bottle',
    description: 'Eco-friendly and durable water bottle, perfect for staying hydrated on the go. Keeps drinks cold for 24 hours.',
    picture: 'https://m.media-amazon.com/images/I/71wFyZlg58L.jpg',
    amount: 25,
    price: 15.00,
    unit: 'unit',
  },
  {
    id: 'prod009',
    title: 'Gourmet Olive Oil (Extra Virgin)',
    description: 'Cold-pressed extra virgin olive oil from ancient olive groves in Greece. Fruity and peppery notes.',
    picture: 'https://www.spartagourmet.com/wp-content/uploads/2019/01/Extra-Virgin-Olive-Oil-1lt.png',
    amount: 18,
    price: 22.00,
    unit: '500ml',
  },
  {
    id: 'prod010',
    title: 'Portable Power Bank (10000mAh)',
    description: 'High-capacity power bank for charging smartphones and tablets multiple times. Compact and lightweight design.',
    picture: 'https://m.media-amazon.com/images/I/51kKKVocuAL._AC_SL1000_.jpg',
    amount: 12,
    price: 29.99,
    unit: 'unit',
  },
  {
    id: 'prod011',
    title: 'Organic Honey (Wildflower)',
    description: 'Pure, raw, unfiltered wildflower honey. Harvested from local bee farms. Great for teas or as a natural sweetener.',
    picture: 'https://picsum.photos/id/1069/400/300',
    amount: 35,
    price: 9.50,
    unit: '250g',
  },
  {
    id: 'prod012',
    title: 'Ergonomic Office Chair',
    description: 'High-back mesh office chair with adjustable lumbar support and armrests. Designed for long hours of comfort.',
    picture: 'https://m.media-amazon.com/images/I/61yCrA89CiL._AC_SL1500_.jpg',
    amount: 5,
    price: 189.00,
    unit: 'unit',
  },
];

// Main Category Component
const Category = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    console.log("Added to cart:", product.id);
    // Add to cart logic here
  };

  const renderCards = category?.map((card) => {
    return (
      <div key={card.id} className="w-full" onClick={() => handleViewDetails(card)}>
        <CardContainer className="inter-var">
          <CardBody className="bg-zinc-100 backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] border-purple-200/[0.3] w-full sm:w-[350px] h-auto rounded-xl p-6 border shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:bg-purple-50/30">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-100/30 to-blue-50/50 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-300/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>
            
            {/* Product Image */}
            <CardItem translateZ="50" className="w-full mt-4">
              <div className="relative overflow-hidden rounded-xl group-hover/card:shadow-xl">
                <img
                  src={card.picture}
                  alt={card.title}
                  className="h-60 w-full object-cover rounded-xl transform transition-all duration-500 group-hover/card:scale-110 group-hover/card:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick Action Buttons */}
                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleAddToCart(card, e)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5 text-purple-600" />
                  </button>
                  <button
                    onClick={() => handleViewDetails(card)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg"
                  >
                    <Eye className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              </div>
            </CardItem>
            
            {/* Stock Badge */}
            <CardItem
              translateZ="60"
              className="absolute top-4 right-4 z-10"
            >
              <div className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold transform transition-all duration-300 hover:scale-110 animate-bounce",
                card.amount > 30 ? "bg-green-100 text-green-800 shadow-green-200" :
                card.amount > 10 ? "bg-yellow-100 text-yellow-800 shadow-yellow-200" :
                "bg-red-100 text-red-800 shadow-red-200"
              )}>
                {card.amount} in stock
              </div>
            </CardItem>
            
            {/* Product Title */}
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-zinc-700 mt-6 relative z-10 group-hover/card:text-zinc-800 transition-colors duration-300"
            >
              {card.title}
            </CardItem>
            
            {/* Product Description */}
            <CardItem
              as="p"
              translateZ="60"
              className="text-zinc-600 text-sm max-w-sm mt-2 leading-relaxed relative z-10 group-hover/card:text-zinc-700 transition-colors duration-300"
            >
              {card.description}
            </CardItem>
            
            {/* Price Section */}
            <CardItem translateZ="70" className="mt-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-zinc-800 group-hover/card:text-zinc-900 transition-colors duration-300">
                    ${card.price}
                  </span>
                  <span className="text-sm text-zinc-500 group-hover/card:text-zinc-600 transition-colors duration-300">
                    per {card.unit}
                  </span>
                </div>
              </div>
            </CardItem>
            
            {/* Action Buttons */}
            <CardItem translateZ="80" className="mt-6 w-full relative z-10">
              <div className="flex gap-3">
                <Button 
                  onClick={() => handleViewDetails(card)}
                  className="flex-1 justify-center flex items-center transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover/card:scale-105"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button
                  onClick={(e) => handleAddToCart(card, e)}
                  className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group-hover/card:scale-105"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    );
  });
  
  return (
    <>
      <section className="min-h-screen py-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Heading highlight="Shop" heading="by Category" />
          
          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {renderCards}
          </div>  
        </div>
      </section>

       {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Category;