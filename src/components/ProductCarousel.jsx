import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Icon components
const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.8 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ChevronLeftIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

export default function ProductCarousel({ products }) {
  // Group products by model (MSL-5, MSL-7, etc.)
  const groupedProducts = products.reduce((acc, product) => {
    const model = product.model;
    if (!acc[model]) {
      acc[model] = [];
    }
    acc[model].push(product);
    return acc;
  }, {});

  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (model) => {
    const variants = groupedProducts[model];
    if (variants.length > 1) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [model]: ((prev[model] || 0) + 1) % variants.length
      }));
    }
  };

  const prevImage = (model) => {
    const variants = groupedProducts[model];
    if (variants.length > 1) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [model]: prev[model] === 0 ? variants.length - 1 : (prev[model] || 0) - 1
      }));
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {Object.entries(groupedProducts).map(([model, variants], index) => {
        const currentIndex = currentImageIndex[model] || 0;
        const currentProduct = variants[currentIndex];
        
        return (
          <motion.div
            key={model}
            initial={{ opacity: 0, y: 80, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.05, 
              y: -20,
              rotateY: 5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="group relative perspective-1000"
          >
            <Card className="relative h-full rounded-3xl border-0 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform-gpu">
              {/* Product Category Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="absolute top-6 left-6 z-10"
              >
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                  {currentProduct.tag}
                </div>
              </motion.div>

              {/* Favorite Button */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="absolute top-6 right-6 z-10 cursor-pointer"
              >
                <div className="rounded-full bg-white/80 backdrop-blur-sm p-3 shadow-lg hover:bg-red-50 transition-colors duration-300">
                  <StarIcon className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </div>
              </motion.div>

              <CardHeader className="relative p-8 pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                >
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {currentProduct.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Color:</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-sm font-medium">
                      {currentProduct.color}
                    </span>
                  </div>
                </motion.div>
              </CardHeader>

              <CardContent className="relative p-8 pt-2 space-y-6">
                {/* Enhanced Product Image with Carousel */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Animated Background */}
                  <motion.div 
                    animate={{ 
                      background: [
                        "linear-gradient(135deg, #dbeafe, #e0e7ff)",
                        "linear-gradient(135deg, #e0e7ff, #dbeafe)",
                        "linear-gradient(135deg, #dbeafe, #e0e7ff)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0"
                  ></motion.div>

                  {/* Carousel Container */}
                  <div className="relative h-full flex items-center justify-center p-4">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={`${currentProduct.model}-${currentProduct.color}`}
                        src={`${currentProduct.image}?t=${Date.now()}`} 
                        alt={`${currentProduct.name} - ${currentProduct.color}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-contain"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Carousel Navigation */}
                  {variants.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => prevImage(model)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 z-10"
                      >
                        <ChevronLeftIcon className="h-4 w-4 text-gray-700" />
                      </motion.button>

                      {/* Next Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => nextImage(model)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 z-10"
                      >
                        <ChevronRightIcon className="h-4 w-4 text-gray-700" />
                      </motion.button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                        {variants.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [model]: dotIndex }))}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              dotIndex === currentIndex 
                                ? 'bg-blue-600 scale-125' 
                                : 'bg-white/60 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full shadow-lg"
                  />
                  <motion.div 
                    animate={{ 
                      y: [0, 10, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full shadow-lg"
                  />
                </motion.div>

                {/* Product Specifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-gray-600 font-medium">Power</div>
                      <div className="text-gray-900 font-bold">{currentProduct.power}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-gray-600 font-medium">Warranty</div>
                      <div className="text-gray-900 font-bold">{currentProduct.warranty}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">pH Range:</span> {currentProduct.pH_range}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Max ORP:</span> {currentProduct.max_orp}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Plates:</span> {currentProduct.plates}
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                >
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    View Details
                  </button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
