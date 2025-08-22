import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Medal, Star, Lightbulb, Users, Smartphone, Leaf } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

export default function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prizeCount = useAnimatedCounter(100000, isInView);

  const prizeCards = [
    {
      place: "1st Place",
      amount: "₹50,000",
      icon: Crown,
      color: "text-golden",
      gradient: "from-minimal-accent/10 to-minimal-accent/20",
      backGradient: "from-minimal-accent to-blue-600",
      benefits: ["₹50,000 Cash Prize", "Trophy & Certificate", "Internship Opportunity", "Mentorship Program"],
      testId: "first-place"
    },
    {
      place: "2nd Place",
      amount: "₹30,000",
      icon: Medal,
      color: "text-warm",
      gradient: "from-minimal-gray/10 to-minimal-gray/20",
      backGradient: "from-minimal-gray to-gray-500",
      benefits: ["₹30,000 Cash Prize", "Medal & Certificate", "Workshop Access", "Industry Connect"],
      testId: "second-place"
    },
    {
      place: "3rd Place",
      amount: "₹20,000",
      icon: Star,
      color: "text-golden-dark",
      gradient: "from-minimal-dark/10 to-minimal-dark/20",
      backGradient: "from-minimal-dark to-gray-800",
      benefits: ["₹20,000 Cash Prize", "Certificate", "Tech Merchandise", "Community Access"],
      testId: "third-place"
    }
  ];

  const specialCategories = [
    {
      title: "Best Innovation",
      description: "Most creative solution",
      icon: Lightbulb,
      color: "text-golden"
    },
    {
      title: "People's Choice",
      description: "Community favorite",
      icon: Users,
      color: "text-warm"
    },
    {
      title: "Best Mobile App",
      description: "Top mobile solution",
      icon: Smartphone,
      color: "text-golden-dark"
    },
    {
      title: "Social Impact",
      description: "For good cause",
      icon: Leaf,
      color: "text-golden"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.85, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 90
      }
    }
  };

  const cardVariants = {
    hidden: { rotateY: -120, opacity: 0, scale: 0.8 },
    visible: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 80
      }
    }
  };

  return (
    <section 
      id="prizes" 
      className="py-20 bg-space-dark"
      ref={ref}
      data-testid="prizes-section"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl font-space font-bold mb-6 text-golden"
            variants={itemVariants}
            data-testid="prizes-title"
          >
            Prize Pool
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-golden mx-auto mb-8"
            variants={itemVariants}
          />
          
          {/* Animated Counter */}
          <motion.div 
            className="text-6xl md:text-8xl font-space font-black text-golden mb-4 interstellar-gradient"
            variants={itemVariants}
            data-testid="prize-counter"
          >
            ₹{prizeCount.toLocaleString()}
          </motion.div>
          <motion.p 
            className="text-xl text-cool"
            variants={itemVariants}
            data-testid="prize-pool-label"
          >
            Total Prize Pool
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {prizeCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                className="flip-card h-64 perspective-1000"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                data-testid={`prize-card-${card.testId}`}
              >
                <motion.div 
                  className="flip-card-inner relative w-full h-full transition-transform duration-1000 ease-out transform-style-preserve-3d"
                  whileHover={{ 
                    rotateY: 180,
                    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
                  }}
                >
                  {/* Front */}
                  <div className={`flip-card-front absolute w-full h-full backface-hidden space-card flex flex-col items-center justify-center space-border rounded-xl space-shadow`}>
                    <IconComponent className={`text-6xl ${card.color} mb-4`} size={64} />
                    <h3 className={`text-3xl font-bold ${card.color} mb-2`}>{card.place}</h3>
                    <p className="text-2xl font-space font-bold text-golden">{card.amount}</p>
                  </div>
                  
                  {/* Back */}
                  <div className={`flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-golden flex flex-col items-center justify-center text-space-dark rounded-xl p-6`}>
                    <IconComponent className="text-6xl mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-4">Winner Package</h3>
                    <ul className="text-center space-y-2 text-sm">
                      {card.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Special Mentions */}
        <motion.div 
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-3xl font-bold text-warm mb-8"
            variants={itemVariants}
            data-testid="special-categories-title"
          >
            Special Categories
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {specialCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div 
                  key={index}
                  className="space-card p-6 rounded-lg space-border hover:scale-105 transition-transform duration-300 space-shadow"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  data-testid={`special-category-${index}`}
                >
                  <IconComponent 
                    className={`text-3xl ${category.color} mb-3 mx-auto`} 
                    size={32}
                  />
                  <h4 className={`font-bold ${category.color} mb-2`}>{category.title}</h4>
                  <p className="text-sm text-cool">{category.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
