import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { FiShoppingCart, FiHeart, FiStar, FiEye } from "react-icons/fi";

const categories = ["All", "Electronics", "Fashion", "Home", "Beauty"];

const products = [
  {
    id: 1,
    name: "Smart Home Speaker",
    category: "Electronics",
    image: "/products/alexa.jpg",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 456,
    sold: 1250,
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    category: "Fashion",
    image: "/products/sunglass.jpg",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 289,
    sold: 890,
  },
  {
    id: 3,
    name: "Scented Candle Set",
    category: "Home",
    image: "/products/candle.jpg",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.9,
    reviews: 567,
    sold: 2100,
  },
  {
    id: 4,
    name: "Luxury Face Cream",
    category: "Beauty",
    image: "/products/cream.jpg",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 345,
    sold: 780,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Electronics",
    image: "/products/keyboard.jpg",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.9,
    reviews: 892,
    sold: 1560,
  },
  {
    id: 6,
    name: "Canvas Sneakers",
    category: "Fashion",
    image: "/products/shoe.jpg",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 423,
    sold: 1890,
  },
  {
    id: 7,
    name: "Indoor Plant Collection",
    category: "Home",
    image: "/products/tree.jpg",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 234,
    sold: 670,
  },
  {
    id: 8,
    name: "Anti-Aging Serum",
    category: "Beauty",
    image: "/products/serum.jpg",
    price: 94.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 678,
    sold: 1340,
  },
];

const OurProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="md:py-20 pb-10 bg-base-100 md:px-10 px-5">
      <div className="container mx-auto">
        {/* Header */}
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Collection
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2">
              Our Products
            </h2>

            <p className="text-accent mt-4 max-w-2xl mx-auto">
              Explore our curated selection of quality products designed to meet
              your everyday needs.
            </p>
          </div>
        </Fade>

        {/* Category Tabs */}
        <Fade direction="up"  triggerOnce>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-base-100 shadow-md"
                    : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </Fade>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                
                whileHover={{ y: -8 }}
                className="bg-base-100 border border-secondary/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-secondary/40 opacity-0 hover:opacity-100 transition-all flex items-center justify-center gap-3">
                    {[FiShoppingCart, FiEye].map((Icon, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-base-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-base-100 transition-colors"
                      >
                        <Icon size={20} />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {product.category}
                  </span>

                  <h3 className="font-semibold text-secondary mt-1 mb-2 line-clamp-1 hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <FiStar className="text-primary" size={14} />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-sm text-accent">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <Fade direction="up" delay={300} triggerOnce>
          <div className="text-center mt-12">
            <button className="bg-primary text-base-100 px-8 py-4 rounded-full font-medium hover:bg-secondary transition-colors">
              View All Products
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default OurProductsSection;
