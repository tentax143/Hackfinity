import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { timelineEvents, getTimelineProgress, getCurrentEvent, isEventCompleted, TimelineEvent } from "@/config/timeline";

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [progress, setProgress] = useState(0);
  const [currentEvent, setCurrentEvent] = useState<TimelineEvent | null>(null);

  // Update progress and current event every minute
  useEffect(() => {
    const updateTimeline = () => {
      setProgress(getTimelineProgress(timelineEvents));
      setCurrentEvent(getCurrentEvent(timelineEvents));
    };
    
    updateTimeline(); // Initial update
    const interval = setInterval(updateTimeline, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

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
      width: `${progress}%`,
      opacity: 1,
      transition: {
        duration: 2,
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
            className="w-24 h-1 bg-golden mx-auto mb-4"
            variants={itemVariants}
          />
          
          {/* Progress Indicator */}
          <motion.div 
            className="max-w-md mx-auto mb-8"
            variants={itemVariants}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-cool">Event Progress</span>
              <span className="text-sm font-semibold text-golden">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-space-light rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-golden to-golden-dark h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-minimal-gray mt-2">
              {progress === 0 && "Registration opens Aug 25"}
              {progress > 0 && progress < 100 && currentEvent && `Currently: ${currentEvent.title}`}
              {progress === 100 && "Event completed"}
            </p>
          </motion.div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
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
                className="grid grid-cols-8 gap-2 relative mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {timelineEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  const isCurrent = currentEvent?.title === event.title;
                  const isCompleted = isEventCompleted(event);
                  
                  return (
                    <motion.div
                      key={index}
                      className="text-center group"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      data-testid={`timeline-item-${index}`}
                    >
                      <motion.div 
                        className={`w-6 h-6 ${event.bgColor} rounded-full mx-auto mb-4 border-4 border-dark-bg shadow-lg group-hover:scale-125 transition-transform duration-300 cyber-glow ${
                          isCurrent ? 'ring-4 ring-golden ring-opacity-50 animate-pulse' : ''
                        }`}
                        whileHover={{ scale: 1.25 }}
                      />
                      <motion.div 
                        className={`space-card p-4 rounded-lg space-border transition-all duration-300 ease-out group-hover:scale-105 space-shadow ${
                          isCurrent ? 'ring-2 ring-golden bg-gradient-to-br from-space-light/20 to-space-medium/20' : ''
                        } ${isCompleted ? 'opacity-75' : ''}`}
                        whileHover={{ 
                          scale: 1.08,
                          y: -4
                        }}
                      >
                        <IconComponent className={`mx-auto mb-2 ${event.color}`} size={24} />
                        <h4 className={`font-bold ${event.color} mb-2`} data-testid={`timeline-title-${index}`}>
                          {event.title}
                          {isCurrent && <span className="ml-2 text-xs bg-golden text-space-dark px-2 py-1 rounded-full">LIVE</span>}
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
          
          {/* Tablet Timeline */}
          <div className="hidden md:block lg:hidden">
            <motion.div 
              className="grid grid-cols-4 gap-4"
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
                    data-testid={`tablet-timeline-item-${index}`}
                  >
                    <motion.div 
                      className={`w-6 h-6 ${event.bgColor} rounded-full mx-auto mb-4 border-4 border-dark-bg shadow-lg group-hover:scale-125 transition-transform duration-300 cyber-glow`}
                      whileHover={{ scale: 1.25 }}
                    />
                    <motion.div 
                      className="space-card p-3 rounded-lg space-border transition-all duration-300 ease-out group-hover:scale-105 space-shadow"
                      whileHover={{ 
                        scale: 1.08,
                        y: -4
                      }}
                    >
                      <IconComponent className={`mx-auto mb-2 ${event.color}`} size={20} />
                      <h4 className={`font-bold text-sm ${event.color} mb-1`} data-testid={`tablet-timeline-title-${index}`}>
                        {event.title}
                      </h4>
                      <p className="text-xs text-cool" data-testid={`tablet-timeline-description-${index}`}>
                        {event.description}
                      </p>
                      <p className="text-xs text-minimal-gray mt-1" data-testid={`tablet-timeline-date-${index}`}>
                        {event.date}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
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
