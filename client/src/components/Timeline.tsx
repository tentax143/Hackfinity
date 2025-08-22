import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Code, Trophy, Award } from "lucide-react";

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timelineEvents = [
    {
      date: "Dec 15",
      title: "Registrations Open",
      description: "Sign up begins",
      icon: Calendar,
      color: "text-golden",
      bgColor: "bg-golden"
    },
    {
      date: "Jan 10",
      title: "Shortlisting",
      description: "Team selection",
      icon: Users,
      color: "text-warm",
      bgColor: "bg-warm"
    },
    {
      date: "Jan 25",
      title: "Hackathon Begins",
      description: "48hrs of coding",
      icon: Code,
      color: "text-cool",
      bgColor: "bg-cool"
    },
    {
      date: "Jan 27",
      title: "Demo Day",
      description: "Present solutions",
      icon: Trophy,
      color: "text-golden",
      bgColor: "bg-golden"
    },
    {
      date: "Jan 28",
      title: "Prize Ceremony",
      description: "Winners announced",
      icon: Award,
      color: "text-warm",
      bgColor: "bg-warm"
    }
  ];

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
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 120
      }
    }
  };

  const lineVariants = {
    hidden: { width: "0%", opacity: 0.5 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 3,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.8
      }
    }
  };

  return (
    <section 
      id="timeline" 
      className="py-20 bg-space-dark"
      ref={ref}
      data-testid="timeline-section"
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
            data-testid="timeline-title"
          >
            Event Timeline
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-golden mx-auto mb-8"
            variants={itemVariants}
          />
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <motion.div 
              className="relative mb-8"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Timeline Line */}
              <div className="h-1 bg-space-light relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-golden"
                  variants={lineVariants}
                />
              </div>
              
              {/* Timeline Items */}
              <motion.div 
                className="grid grid-cols-5 gap-4 relative mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {timelineEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center group"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      data-testid={`timeline-item-${index}`}
                    >
                      <motion.div 
                        className={`w-6 h-6 ${event.bgColor} rounded-full mx-auto mb-4 border-4 border-dark-bg shadow-lg group-hover:scale-125 transition-transform duration-300 cyber-glow`}
                        whileHover={{ scale: 1.25 }}
                      />
                      <motion.div 
                        className="space-card p-4 rounded-lg space-border transition-all duration-300 ease-out group-hover:scale-105 space-shadow"
                        whileHover={{ 
                          scale: 1.08,
                          y: -4
                        }}
                      >
                        <IconComponent className={`mx-auto mb-2 ${event.color}`} size={24} />
                        <h4 className={`font-bold ${event.color} mb-2`} data-testid={`timeline-title-${index}`}>
                          {event.title}
                        </h4>
                        <p className="text-sm text-cool" data-testid={`timeline-description-${index}`}>
                          {event.description}
                        </p>
                        <p className="text-xs text-minimal-gray mt-1" data-testid={`timeline-date-${index}`}>
                          {event.date}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Mobile Timeline */}
          <motion.div 
            className="md:hidden space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:scale-105 transition-transform duration-300 minimal-border minimal-shadow"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  data-testid={`mobile-timeline-item-${index}`}
                >
                  <div className={`w-4 h-4 ${event.bgColor} rounded-full flex-shrink-0`} />
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <IconComponent className={`${event.color}`} size={16} />
                      <h4 className={`font-bold ${event.color}`}>
                        {event.date} - {event.title}
                      </h4>
                    </div>
                    <p className="text-sm text-minimal-gray">{event.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
