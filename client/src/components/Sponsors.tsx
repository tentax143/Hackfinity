import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { titleSponsors, goldSponsors } from "../config/sponsors";

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { y: 50, opacity: 0, scale: 0.9, filter: "blur(2px)" },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 110
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.7, opacity: 0, rotateX: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 90
      }
    }
  };

  return (
    <section 
      id="sponsors" 
      className="py-20 bg-dark-bg"
      ref={ref}
      data-testid="sponsors-section"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl font-cyber font-bold mb-6 text-cyber-teal cyber-glow"
            variants={itemVariants}
            data-testid="sponsors-title"
          >
            Our Sponsors
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyber-teal to-cyber-blue mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
            data-testid="sponsors-description"
          >
            Powered by industry leaders who believe in innovation
          </motion.p>
        </motion.div>
        
        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {/* Title Sponsors */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-bold text-center mb-8 text-yellow-400"
              variants={itemVariants}
              data-testid="title-sponsors-label"
            >
              Title Sponsors
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
              variants={containerVariants}
            >
              {titleSponsors.map((sponsor, index) => (
                <motion.div 
                  key={index}
                  className="bg-darker-purple p-8 rounded-xl neon-border hover:scale-105 transition-all duration-700 ease-out group hover:bg-yellow-400/10"
                  variants={logoVariants}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -6,
                    boxShadow: "0 15px 35px rgba(255, 212, 0, 0.4)",
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  }}
                  data-testid={`title-sponsor-${index}`}
                >
                  {sponsor.website ? (
                    <a 
                      href={sponsor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img 
                        src={sponsor.image}
                        alt={sponsor.alt}
                        className="w-full h-20 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                      />
                    </a>
                  ) : (
                    <img 
                      src={sponsor.image}
                      alt={sponsor.alt}
                      className="w-full h-20 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Gold Sponsors */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-bold text-center mb-8 text-cyber-blue"
              variants={itemVariants}
              data-testid="gold-sponsors-label"
            >
              Gold Sponsors
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {goldSponsors.map((sponsor, index) => (
                <motion.div 
                  key={index}
                  className="bg-darker-purple p-6 rounded-xl neon-border hover:scale-105 transition-all duration-300 group hover:bg-cyber-blue/10"
                  variants={logoVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)" 
                  }}
                  data-testid={`gold-sponsor-${index}`}
                >
                  {sponsor.website ? (
                    <a 
                      href={sponsor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img 
                        src={sponsor.image}
                        alt={sponsor.alt}
                        className="w-full h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                      />
                    </a>
                  ) : (
                    <img 
                      src={sponsor.image}
                      alt={sponsor.alt}
                      className="w-full h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          


          {/* Meet Our Team Button */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.a 
              href="/team"
              className="inline-flex items-center gap-2 bg-golden text-space-dark px-8 py-4 rounded-lg text-xl font-semibold hover:bg-golden-dark transition-all duration-300 glow-golden space-shadow"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(157, 78, 221, 0.8), 0 0 40px rgba(157, 78, 221, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Meet Our Team
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
