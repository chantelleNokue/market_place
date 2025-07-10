import React, { useState } from "react";
import { ArrowLeft, ShoppingCart, Heart, Star, Minus, Plus, Shield, Truck, RefreshCw } from "lucide-react";

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Button Component
const Button = ({ children, className, variant = "primary", ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
    secondary: "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 transform hover:scale-105 active:scale-95",
    outline: "border-2 border-purple-500 text-purple-500 hover:bg-purple-50 transform hover:scale-105 active:scale-95"
  };
  
  return (
    <button
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

// Product Details Component
const ProductDetails = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data for demonstration
  const mockProduct = product || {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    unit: "piece",
    amount: 25,
    description: "Experience premium audio quality with these wireless headphones featuring noise cancellation, 30-hour battery life, and crystal-clear sound reproduction.",
    picture: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
  };

  // Mock additional images for the product
  const productImages = [
    mockProduct.picture,
    mockProduct.picture,
    mockProduct.picture,
    mockProduct.picture
  ];

  const colors = ["Blue", "Black", "Grey", "Red"];
  const sizes = ["S", "M", "L", "XL"];

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, Math.min(mockProduct.amount, prev + change)));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Added to cart:", {
      product: mockProduct.id,
      quantity,
      selectedSize,
      selectedColor
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200">
          <Button
            variant="secondary"
            onClick={onClose}
            className="px-4 py-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-zinc-800">Product Details</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-square">
                <img
                  src={productImages[selectedImage]}
                  alt={mockProduct.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={cn(
                    "absolute top-4 right-4 p-3 rounded-full transition-all duration-300 hover:scale-110",
                    isWishlisted ? "bg-red-500 text-white" : "bg-white/90 text-zinc-600 hover:bg-white"
                  )}
                >
                  <Heart className={cn("w-5 h-5", isWishlisted && "fill-current")} />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative overflow-hidden rounded-lg aspect-square border-2 transition-all duration-300 hover:scale-105",
                      selectedImage === index ? "border-purple-500 shadow-lg" : "border-zinc-200"
                    )}
                  >
                    <img
                      src={img}
                      alt={`${mockProduct.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <h2 className="text-3xl font-bold text-zinc-800 mb-2">{mockProduct.title}</h2>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("w-4 h-4", i < 4 ? "fill-yellow-400 text-yellow-400" : "text-zinc-300")} />
                    ))}
                  </div>
                  <span className="text-sm text-zinc-600">(4.2) • 156 reviews</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-zinc-800">${mockProduct.price}</span>
                <span className="text-lg text-zinc-500">per {mockProduct.unit}</span>
                <div className={cn(
                  "px-3 py-1 rounded-full text-sm font-semibold",
                  mockProduct.amount > 30 ? "bg-green-100 text-green-800" :
                  mockProduct.amount > 10 ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                )}>
                  {mockProduct.amount} in stock
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-2">Description</h3>
                <p className="text-zinc-600 leading-relaxed">{mockProduct.description}</p>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-3">Color</h3>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105",
                        selectedColor === color
                          ? "border-purple-500 bg-purple-50 text-purple-600"
                          : "border-zinc-200 hover:border-zinc-300"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-3">Size</h3>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-12 h-12 rounded-lg border-2 transition-all duration-300 hover:scale-105 flex items-center justify-center font-semibold",
                        selectedSize === size
                          ? "border-purple-500 bg-purple-50 text-purple-600"
                          : "border-zinc-200 hover:border-zinc-300"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-zinc-200 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-zinc-100 transition-colors duration-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-3 font-semibold text-zinc-800 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-zinc-100 transition-colors duration-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-zinc-600">
                    {mockProduct.amount} available
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="px-6"
                >
                  Buy Now
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-zinc-200">
                <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Truck className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-800">Free Shipping</h4>
                    <p className="text-sm text-zinc-600">Orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <RefreshCw className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-800">Easy Returns</h4>
                    <p className="text-sm text-zinc-600">30-day policy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-800">Warranty</h4>
                    <p className="text-sm text-zinc-600">2 years coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;