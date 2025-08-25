import { motion } from "framer-motion";
import { Users, Crown, Award, Code, Users2, ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { 
  staffCoordinators, 
  neotricMembers, 
  eventCoordinators, 
  technicalTeam, 
  type TeamMember, 
  type Coordinator 
} from "@/config/team";

export default function TeamPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const TeamSection = ({ 
    title, 
    members, 
    icon: Icon, 
    color, 
    bgColor, 
    borderColor 
  }: {
    title: string;
    members: TeamMember[];
    icon: any;
    color: string;
    bgColor: string;
    borderColor: string;
  }) => (
    <motion.div
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <Icon className={`text-4xl ${color}`} />
          <h3 className="text-4xl md:text-5xl font-space font-bold text-warm">
            {title}
          </h3>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={`${member.name}-${index}`}
            className="group"
            variants={cardVariants}
            whileHover="hover"
            data-testid={`${title.toLowerCase().replace(/\s+/g, '-')}-${index}`}
          >
            <div className={`${bgColor} backdrop-blur-sm border ${borderColor} rounded-2xl p-8 text-center hover:${borderColor.replace('/20', '/40')} transition-all duration-300 h-full`}>
              {/* Avatar Placeholder */}
              <div className={`w-20 h-20 mx-auto mb-6 ${color.replace('text-', 'bg-gradient-to-br from-')} to-${color.replace('text-', '')}-dark rounded-full flex items-center justify-center text-xl font-bold text-space-dark`}>
                {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              
              <h4 className="text-lg font-semibold text-warm mb-2 line-clamp-2">
                {member.name}
              </h4>
              <p className={`${color} font-medium text-sm mb-3`}>
                {member.role}
              </p>
              {member.department && (
                <p className="text-cool text-sm">
                  {member.department}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-space">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden">
        <ParticleBackground />
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 text-9xl font-mono text-minimal-gray/5"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 30, 
              repeat: -1, 
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
              repeat: -1, 
              ease: "linear",
              delay: -10
            }}
          >
            ∞
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="text-center z-10 px-4 max-w-6xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-space font-black mb-6 text-golden interstellar-gradient relative z-10"
            variants={itemVariants}
          >
            OUR TEAM
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-cool max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Meet the brilliant minds behind <span className="text-golden font-semibold">Hackfinity 1.0</span>
          </motion.p>
          
          {/* Back to Home Button */}
          <motion.div variants={itemVariants}>
            <motion.a 
              href="/"
              className="inline-flex items-center gap-2 bg-golden text-space-dark px-8 py-4 rounded-lg text-xl font-semibold hover:bg-golden-dark transition-all duration-300 glow-golden space-shadow"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(157, 78, 221, 0.8), 0 0 40px rgba(157, 78, 221, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="inline-block" size={20} />
              Back to Home
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Sections */}
      <section className="py-20 bg-gradient-to-b from-space-dark via-space-medium to-space-dark relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-golden/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyber-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Staff Coordinators */}
          <TeamSection
            title="Staff Coordinators"
            members={staffCoordinators}
            icon={Crown}
            color="text-golden"
            bgColor="bg-space-light/50"
            borderColor="border-space-light/30"
          />

          {/* Neotric AI Association */}
          <TeamSection
            title="Neotric AI Association"
            members={neotricMembers}
            icon={Users2}
            color="text-neon-purple"
            bgColor="bg-space-light/40"
            borderColor="border-space-light/25"
          />

          {/* Event Coordinators */}
          <TeamSection
            title="Event Coordinators"
            members={eventCoordinators}
            icon={Users}
            color="text-cyber-blue"
            bgColor="bg-space-light/30"
            borderColor="border-space-light/20"
          />

          {/* Technical Team */}
          <TeamSection
            title="Technical Team"
            members={technicalTeam}
            icon={Code}
            color="text-cyber-teal"
            bgColor="bg-space-light/35"
            borderColor="border-space-light/22"
          />





          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-space-light/20 backdrop-blur-sm border border-golden/20 rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Award className="text-3xl text-golden" />
              <div>
                <h4 className="text-xl font-semibold text-warm mb-2">
                  Want to Join Our Team?
                </h4>
                <p className="text-cool mb-4">
                  We're always looking for passionate individuals to help organize amazing events
                </p>
                <motion.button
                  className="bg-golden text-space-dark px-6 py-3 rounded-lg font-semibold hover:bg-golden-dark transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
