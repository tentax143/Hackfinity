import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
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

  const statsVariants = {
    hidden: { scale: 0.7, opacity: 0, rotateY: -30 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-space-medium"
      ref={ref}
      data-testid="about-section"
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
            data-testid="about-title"
          >
            About Hackfinity 1.0
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-golden mx-auto mb-8"
            variants={itemVariants}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-3xl font-bold text-warm mb-4"
              variants={itemVariants}
              data-testid="about-subtitle"
            >
              The Ultimate Coding Challenge
            </motion.h3>
            
            <motion.p 
              className="text-lg leading-relaxed text-cool"
              variants={itemVariants}
              data-testid="about-description-1"
            >
              Step into the future of innovation at Hackfinity 1.0, where brilliant minds converge to create 
              groundbreaking solutions. This isn't just a hackathon—it's a cyberpunk journey through the 
              digital frontier.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-cool"
              variants={itemVariants}
              data-testid="about-description-2"
            >
              Join <span className="text-warm font-semibold">205+ developers</span>, compete for 
              <span className="text-golden font-semibold"> ₹30,000</span> in prizes, and connect with 
              industry leaders in an immersive 24-hour experience.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="text-center p-4 space-card rounded-lg space-border hover:scale-105 transition-all duration-300 space-shadow"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                data-testid="stats-participants"
              >
                <div className="text-3xl font-bold text-golden mb-2">205+</div>
                <div className="text-sm text-cool">Participants</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-4 space-card rounded-lg space-border hover:scale-105 transition-all duration-300 space-shadow"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                data-testid="stats-duration"
              >
                <div className="text-3xl font-bold text-warm mb-2">24hrs</div>
                <div className="text-sm text-cool">Non-stop Coding</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src="/abt.jpg" 
              alt="Hackathon participants coding together in a futuristic environment" 
              className="rounded-xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
              data-testid="about-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 to-transparent rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
