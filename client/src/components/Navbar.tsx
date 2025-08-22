import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.08,
      y: -2,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
      isScrolled ? 'bg-space-dark/95 backdrop-blur-md border-b border-space-light' : 'bg-transparent'
    }`} data-testid="navbar">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-space font-bold text-warm"
            whileHover={{ scale: 1.05 }}
            data-testid="brand-logo"
          >
            Hackfinity<span className="text-golden"> 1.0</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Timeline', 'Prizes', 'Sponsors', 'Community'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group transition-all duration-500 ease-out"
                variants={linkVariants}
                whileHover="hover"
                data-testid={`nav-link-${item.toLowerCase()}`}
              >
                <span className={`${
                  item === 'Home' ? 'text-golden hover:text-golden' :
                  'text-cool hover:text-warm'
                }`}>
                  {item}
                </span>
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                  item === 'Home' ? 'bg-golden' :
                  'bg-golden'
                }`}></span>
              </motion.a>
            ))}
          </div>
          
          {/* Register Button */}
          <div className="hidden md:block">
            <motion.button 
              className="bg-golden text-space-dark px-6 py-2 rounded-lg font-semibold hover:bg-golden-dark transition-colors duration-300 glow-golden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="register-button-desktop"
            >
              Register on Unstop
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMenu}
              className="flex flex-col space-y-1 cursor-pointer"
              whileTap={{ scale: 0.95 }}
              data-testid="mobile-menu-button"
            >
              <motion.span
                className={`w-6 h-0.5 bg-cyber-blue transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
                style={{ boxShadow: '0 0 5px #00D4FF' }}
              />
              <motion.span
                className={`w-6 h-0.5 bg-cyber-blue transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ boxShadow: '0 0 5px #00D4FF' }}
              />
              <motion.span
                className={`w-6 h-0.5 bg-cyber-blue transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
                style={{ boxShadow: '0 0 5px #00D4FF' }}
              />
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-dark-bg/95 backdrop-blur-lg z-40 md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              data-testid="mobile-menu"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                {['Home', 'About', 'Timeline', 'Prizes', 'Sponsors', 'Community'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors duration-300 ${
                      item === 'Home' ? 'text-cyber-blue hover:text-cyber-blue' :
                      item === 'About' ? 'text-white hover:text-neon-purple' :
                      item === 'Timeline' ? 'text-white hover:text-cyber-teal' :
                      item === 'Prizes' ? 'text-white hover:text-hot-pink' :
                      item === 'Sponsors' ? 'text-white hover:text-yellow-400' :
                      'text-white hover:text-cyber-blue'
                    }`}
                    onClick={toggleMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    data-testid={`mobile-nav-link-${item.toLowerCase()}`}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  className="bg-gradient-to-r from-neon-purple to-hot-pink px-8 py-3 rounded-full font-semibold mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="register-button-mobile"
                >
                  Register on Unstop
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
