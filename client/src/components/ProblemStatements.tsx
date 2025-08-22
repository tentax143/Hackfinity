import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Network, Workflow, Zap, Infinity } from "lucide-react";

export default function ProblemStatements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problemTracks = [
    {
      title: "Smart Education – Using AI to Implement Education",
      description: "Reimagining learning with AI-powered tools that make education smarter, personalized, and accessible for all.",
      icon: Brain,
      color: "text-golden",
      gradient: "from-golden/10 to-golden/20",
      borderColor: "border-golden/30"
    },
    {
      title: "World of Computation – Distributed Inference Solutions", 
      description: "Harness the power of distributed systems to push the boundaries of computation and large-scale AI.",
      icon: Network,
      color: "text-warm",
      gradient: "from-warm/10 to-warm/20",
      borderColor: "border-warm/30"
    },
    {
      title: "Autonomous Workflow – n8n and Similar Automation",
      description: "Design self-running workflows that cut complexity and bring true automation to everyday challenges.",
      icon: Workflow,
      color: "text-cool",
      gradient: "from-cool/10 to-cool/20", 
      borderColor: "border-cool/30"
    },
    {
      title: "7th Sense – Drones and Robots that Extend Human Abilities",
      description: "Build machines that grant humans new senses, from drones that see the unseen to robots that feel the unspoken.",
      icon: Zap,
      color: "text-golden-dark",
      gradient: "from-golden-dark/10 to-golden-dark/20",
      borderColor: "border-golden-dark/30"
    },
    {
      title: "Beyond Limits – Open Innovation Track",
      description: "Break boundaries with ideas that defy categories—your creativity, your rules, no limits.",
      icon: Infinity,
      color: "text-golden",
      gradient: "from-golden/20 to-warm/20",
      borderColor: "border-golden/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="problems" 
      className="py-20 bg-space-dark"
      ref={ref}
      data-testid="problem-statements-section"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl font-space font-bold mb-6 text-golden interstellar-gradient"
            variants={itemVariants}
            data-testid="problem-statements-title"
          >
            Problem Statements
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-golden mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-cool max-w-3xl mx-auto"
            variants={itemVariants}
            data-testid="problem-statements-subtitle"
          >
            Choose your challenge and reshape the future with innovative solutions across these cutting-edge domains.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problemTracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <motion.div
                key={index}
                className={`space-card p-8 rounded-xl space-border space-shadow hover:scale-105 transition-all duration-300 bg-gradient-to-br ${track.gradient} border ${track.borderColor}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                data-testid={`problem-track-${index}`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-space-medium ${track.color} glow-golden`}>
                    <IconComponent size={28} />
                  </div>
                </div>
                
                <h3 
                  className={`text-xl font-space font-bold mb-4 ${track.color}`}
                  data-testid={`problem-track-title-${index}`}
                >
                  {track.title}
                </h3>
                
                <div className="flex items-start space-x-2 mb-4">
                  <span className="text-golden text-lg">👉</span>
                  <p 
                    className="text-cool leading-relaxed"
                    data-testid={`problem-track-description-${index}`}
                  >
                    "{track.description}"
                  </p>
                </div>
                
                <motion.div 
                  className="mt-6 pt-4 border-t border-space-light"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cool opacity-80">
                      Track {index + 1}
                    </span>
                    <motion.div 
                      className={`w-2 h-2 bg-golden rounded-full`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: -1,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-warm text-lg mb-8"
            whileHover={{ scale: 1.02 }}
          >
            Ready to tackle one of these challenges?
          </motion.p>
          <motion.button
            className="bg-golden text-space-dark px-8 py-4 rounded-lg font-space font-semibold hover:bg-golden-dark transition-all duration-300 glow-golden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px hsla(42, 100%, 55%, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            data-testid="register-problem-button"
          >
            Choose Your Track & Register
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}