import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Bell, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Set target date for hackathon (January 25, 2025)
  const targetDate = new Date('2025-01-25T00:00:00').getTime();
  const timeLeft = useCountdown(targetDate);

  const socialLinks = [
    { icon: Twitter, color: "text-cyber-blue", name: "Twitter" },
    { icon: Instagram, color: "text-neon-purple", name: "Instagram" },
    { icon: Linkedin, color: "text-hot-pink", name: "LinkedIn" },
    { icon: Youtube, color: "text-cyber-teal", name: "YouTube" }
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
    hidden: { y: 70, opacity: 0, scale: 0.9, filter: "blur(3px)" },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.3,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 85
      }
    }
  };

  const counterVariants = {
    hidden: { scale: 0.7, opacity: 0, rotateY: 45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.1,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="community" 
      className="py-20 bg-space-medium"
      ref={ref}
      data-testid="community-section"
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
            data-testid="community-title"
          >
            Join Our Community
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-golden mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-cool max-w-2xl mx-auto"
            variants={itemVariants}
            data-testid="community-description"
          >
            Connect with fellow hackers, get updates, and start networking before the event
          </motion.p>
        </motion.div>
        
        {/* Countdown Timer */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-8 text-warm"
            variants={itemVariants}
            data-testid="countdown-title"
          >
            Hackathon Starts In
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            variants={containerVariants}
          >
            {[
              { label: 'Days', value: timeLeft.days, color: 'text-golden', testId: 'countdown-days' },
              { label: 'Hours', value: timeLeft.hours, color: 'text-warm', testId: 'countdown-hours' },
              { label: 'Minutes', value: timeLeft.minutes, color: 'text-golden', testId: 'countdown-minutes' },
              { label: 'Seconds', value: timeLeft.seconds, color: 'text-warm', testId: 'countdown-seconds' }
            ].map((time, index) => (
              <motion.div 
                key={time.label}
                className="space-card p-6 rounded-xl space-border hover:scale-105 transition-all duration-300 ease-out space-shadow"
                variants={counterVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                }}
                data-testid={time.testId}
              >
                <motion.div 
                  className={`text-4xl font-space font-bold ${time.color}`}
                  animate={{ 
                    textShadow: [
                      "0 0 10px currentColor",
                      "0 0 25px currentColor, 0 0 35px currentColor",
                      "0 0 15px currentColor, 0 0 40px currentColor",
                      "0 0 10px currentColor"
                    ],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: -1,
                    ease: [0.4, 0, 0.6, 1]
                  }}
                >
                  {String(time.value).padStart(2, '0')}
                </motion.div>
                <div className="text-sm text-cool mt-2">{time.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Community Actions */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Discord Community */}
          <motion.div 
            className="space-card p-8 rounded-xl space-border text-center hover:scale-105 transition-all duration-300 group space-shadow"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)" 
            }}
            data-testid="discord-community"
          >
            <div>
              <MessageCircle className="mx-auto text-6xl text-golden mb-6 group-hover:scale-110 transition-transform duration-300" size={64} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-warm">Join Our Discord</h3>
            <p className="text-cool mb-6">
              Connect with 1000+ developers, get real-time updates, find teammates, and engage in pre-hackathon discussions.
            </p>
            <motion.button 
              className="bg-golden text-space-dark px-8 py-3 rounded-lg font-semibold hover:bg-golden-dark transition-colors duration-300 glow-golden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="discord-join-button"
            >
              Join Discord Server
            </motion.button>
          </motion.div>
          
          {/* Newsletter Signup */}
          <motion.div 
            className="space-card p-8 rounded-xl space-border text-center hover:scale-105 transition-all duration-300 group space-shadow"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(255, 0, 110, 0.3)" 
            }}
            data-testid="newsletter-signup"
          >
            <div>
              <Bell className="mx-auto text-6xl text-golden mb-6 group-hover:scale-110 transition-transform duration-300" size={64} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-warm">Stay Updated</h3>
            <p className="text-cool mb-6">
              Get exclusive updates about workshops, mentorship sessions, and important announcements directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-dark-bg border-neon-purple/30 text-white placeholder-gray-400 focus:border-neon-purple"
                data-testid="email-input"
              />
              <Button 
                className="bg-gradient-to-r from-hot-pink to-neon-purple hover:scale-105 transition-transform duration-300"
                data-testid="subscribe-button"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Social Media Links */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-cyber-teal"
            variants={itemVariants}
            data-testid="social-links-title"
          >
            Follow Us
          </motion.h3>
          <motion.div 
            className="flex justify-center space-x-8"
            variants={containerVariants}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a 
                  key={index}
                  href="#"
                  className={`text-4xl ${social.color} hover:scale-125 transition-all duration-300 cyber-glow`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.3,
                    transition: { duration: 0.6 }
                  }}
                  data-testid={`social-link-${social.name.toLowerCase()}`}
                >
                  <IconComponent size={48} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
