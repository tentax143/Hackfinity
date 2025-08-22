import { motion } from "framer-motion";
import { ChevronDown, Rocket } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9, filter: "blur(4px)" },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden"
      data-testid="hero-section"
    >
      <ParticleBackground />
      
      
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 text-9xl font-mono text-minimal-gray/5"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          ∞
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 text-6xl font-mono text-minimal-dark/5"
          animate={{ 
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            delay: -10
          }}
        >
          ∞
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <motion.div 
        className="text-center z-10 px-4 max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-space font-black mb-6 text-golden interstellar-gradient relative z-10"
          variants={itemVariants}
          data-testid="hero-title"
        >
          HACKFINITY
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-space font-bold mb-4 text-golden animate-slide-up"
          variants={itemVariants}
          data-testid="hero-year"
        >
          1.0
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-cool max-w-3xl mx-auto"
          variants={itemVariants}
          data-testid="hero-description"
        >
          <span className="text-golden font-semibold">48 Hours</span> of Pure Innovation • 
          <span className="text-warm font-semibold"> ₹1,00,000</span> Prize Pool • 
          <span className="text-golden font-semibold"> Unlimited</span> Possibilities
        </motion.p>
        
        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button 
            className="bg-golden text-space-dark px-12 py-4 rounded-lg text-xl font-semibold hover:bg-golden-dark transition-all duration-300 glow-golden space-shadow"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(157, 78, 221, 0.8), 0 0 40px rgba(157, 78, 221, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            data-testid="hero-cta-button"
          >
            <Rocket className="inline-block mr-2" size={20} />
            Register on Unstop
          </motion.button>
        </motion.div>
        
        {/* Scroll Arrow */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 12, 0],
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1]
          }}
          data-testid="scroll-arrow"
        >
          <ChevronDown className="text-3xl text-cyber-blue cyber-glow" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
