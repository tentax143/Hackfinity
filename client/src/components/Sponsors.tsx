import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, MessageCircle, Slack, Twitter, Youtube, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const titleSponsors = [
    {
      name: "Major Technology Company",
      image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100",
      alt: "Major technology company logo"
    },
    {
      name: "Innovation Startup",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100",
      alt: "Innovation startup logo"
    }
  ];

  const goldSponsors = [
    {
      name: "Software Development Company",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=75",
      alt: "Software development company logo"
    },
    {
      name: "Cloud Services Provider",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=75",
      alt: "Cloud services provider logo"
    },
    {
      name: "AI Company",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=75",
      alt: "Artificial intelligence company logo"
    }
  ];

  const communityPartners = [
    { icon: Github, color: "text-neon-purple", name: "GitHub" },
    { icon: MessageCircle, color: "text-cyber-blue", name: "Discord" },
    { icon: Slack, color: "text-hot-pink", name: "Slack" },
    { icon: Twitter, color: "text-cyber-teal", name: "Twitter" }
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
                  <img 
                    src={sponsor.image}
                    alt={sponsor.alt}
                    className="w-full h-20 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
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
                  <img 
                    src={sponsor.image}
                    alt={sponsor.alt}
                    className="w-full h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Community Partners */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-bold text-center mb-8 text-neon-purple"
              variants={itemVariants}
              data-testid="community-partners-label"
            >
              Community Partners
            </motion.h3>
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 opacity-75"
              variants={containerVariants}
            >
              {communityPartners.map((partner, index) => {
                const IconComponent = partner.icon;
                return (
                  <motion.div 
                    key={index}
                    className={`text-6xl ${partner.color} hover:scale-110 transition-transform duration-300 cursor-pointer cyber-glow`}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    data-testid={`community-partner-${partner.name.toLowerCase()}`}
                  >
                    <IconComponent size={64} />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
