import { motion } from "framer-motion";
import { Fade, Zoom } from "react-awesome-reveal";
import {
  FiTruck,
  FiShield,
  FiCreditCard,
  FiHeadphones,
  FiRefreshCw,
  FiGift,
} from "react-icons/fi";

const features = [
  {
    icon: FiTruck,
    title: "Free Shipping",
    description:
      "Free shipping on all orders over $50. Fast and reliable delivery to your doorstep.",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: FiShield,
    title: "Secure Payment",
    description:
      "Your payment information is encrypted and secure. Shop with complete peace of mind.",
    color: "bg-green-500/15 text-green-500",
  },
  {
    icon: FiRefreshCw,
    title: "Easy Returns",
    description:
      "Not satisfied? Return within 30 days for a full refund. No questions asked.",
    color: "bg-orange-500/15 text-orange-500",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    description:
      "Our dedicated team is here to help you around the clock. Get instant assistance.",
    color: "bg-purple-500/15 text-purple-500",
  },
  {
    icon: FiCreditCard,
    title: "Flexible Payment",
    description:
      "Multiple payment options including cards, digital wallets, and more.",
    color: "bg-red-500/15 text-red-500",
  },
  {
    icon: FiGift,
    title: "Rewards Program",
    description:
      "Earn points on every purchase and redeem them for exclusive discounts.",
    color: "bg-yellow-500/15 text-yellow-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-base-100/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container-buynest relative z-10 container mx-auto">
        {/* Header */}
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mt-2">
              Shopping Made Better
            </h2>

            <p className="text-accent mt-4 max-w-2xl mx-auto">
              We focus on quality, reliability, and customer satisfaction to
              deliver a seamless shopping experience.
            </p>
          </div>
        </Fade>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Zoom key={feature.title} delay={index * 100} triggerOnce>
              <motion.div
                whileHover={{ y: -8, scale: 1.03, }}
                className="bg-white border border-secondary/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon size={28} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-secondary mb-3">
                  {feature.title}
                </h3>

                <p className="text-accent leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;