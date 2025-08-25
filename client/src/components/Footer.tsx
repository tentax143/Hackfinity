import { motion } from "framer-motion";
import { Github, MessageCircle, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const linkSections = [
    {
      title: "Quick Links",
      color: "text-warm",
      links: [
        { name: "About", href: "#about" },
        { name: "Timeline", href: "#timeline" },
        { name: "Prizes", href: "#prizes" },
        { name: "Sponsors", href: "#sponsors" }
      ]
    },
    {
      title: "Resources",
      color: "text-cool",
      links: [
        { name: "Rules & Guidelines", href: "#" },
        
        { name: "FAQs", href: "#" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, text: "hackfinityrit@gmail.com" },
    { icon: Phone, text: "+91 8220789878" },
    { icon: MapPin, text: "Ramco Institute of Technology" }
  ];

  const socialIcons = [
    { icon: Github, name: "GitHub" },
    { icon: MessageCircle, name: "Discord" }, 
    { icon: Twitter, name: "Twitter" }
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer 
      className="bg-space-medium border-t border-space-light py-12"
      data-testid="footer"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} data-testid="footer-brand">
            <motion.div 
              className="text-3xl font-space font-bold text-golden mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Hackfinity<span className="text-golden"> 1.0</span>
            </motion.div>
            <p className="text-cool mb-4">
              The ultimate National Level hackathon experience. 24 hours of innovation, collaboration, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-xl hover:text-golden transition-colors duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      color: "#00D4FF"
                    }}
                    data-testid={`footer-social-${social.name.toLowerCase()}`}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          
          {/* Quick Links and Resources */}
          {linkSections.map((section, sectionIndex) => (
            <motion.div 
              key={sectionIndex}
              variants={itemVariants}
              data-testid={`footer-section-${section.title.toLowerCase().replace(' ', '-')}`}
            >
              <h4 className={`text-xl font-bold ${section.color} mb-4`}>{section.title}</h4>
              <ul className="space-y-2 text-cool">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a 
                      href={link.href} 
                      className="hover:text-warm transition-colors duration-300"
                      whileHover={{ x: 5, color: "#D1C4A9" }}
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/[^\w]/g, '-')}`}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Contact */}
          <motion.div 
            variants={itemVariants}
            data-testid="footer-contact"
          >
            <h4 className="text-xl font-bold text-hot-pink mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-contact-${index}`}
                  >
                    <IconComponent className="mr-2" size={16} />
                    {contact.text}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-testid="footer-bottom"
        >
          <p>&copy; 2024 Hackfinity. All rights reserved. Made with <span className="text-hot-pink">❤</span> for the developer community.</p>
        </motion.div>
      </div>
    </footer>
  );
}
