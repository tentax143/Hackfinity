import { motion } from "framer-motion";
import { Users, Crown, Star, Award, Code, Megaphone, Camera, Home, Gavel, Users2 } from "lucide-react";
import { 
  staffCoordinators, 
  neotricMembers, 
  eventCoordinators, 
  technicalTeam, 
  mediaTeam, 
  announcementTeam, 
  accommodationTeam, 
  judgingTeam, 
  panelMembers,
  type TeamMember, 
  type Coordinator 
} from "@/config/team";

export default function Team() {
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
      className="mb-16"
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
          <Icon className={`text-3xl ${color}`} />
          <h3 className="text-3xl md:text-4xl font-space font-bold text-warm">
            {title}
          </h3>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={`${member.name}-${index}`}
            className="group"
            variants={cardVariants}
            whileHover="hover"
            data-testid={`${title.toLowerCase().replace(/\s+/g, '-')}-${index}`}
          >
            <div className={`${bgColor} backdrop-blur-sm border ${borderColor} rounded-2xl p-6 text-center hover:${borderColor.replace('/20', '/40')} transition-all duration-300 h-full`}>
              {/* Avatar Placeholder */}
              <div className={`w-16 h-16 mx-auto mb-4 ${color.replace('text-', 'bg-gradient-to-br from-')} to-${color.replace('text-', '')}-dark rounded-full flex items-center justify-center text-lg font-bold text-space-dark`}>
                {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              
              <h4 className="text-sm font-semibold text-warm mb-1 line-clamp-2">
                {member.name}
              </h4>
              <p className={`${color} font-medium text-xs mb-2`}>
                {member.role}
              </p>
              {member.department && (
                <p className="text-cool text-xs">
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
    <section 
      id="team" 
      className="py-20 bg-gradient-to-b from-space-dark via-space-medium to-space-dark relative overflow-hidden"
      data-testid="team-section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golden/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyber-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-space font-bold mb-6 text-golden"
            variants={itemVariants}
            data-testid="team-title"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-xl text-cool max-w-3xl mx-auto"
            variants={itemVariants}
            data-testid="team-description"
          >
            The brilliant minds behind Hackfinity 1.0, dedicated to creating an 
            unforgettable hackathon experience
          </motion.p>
        </motion.div>

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

        {/* Media and Social Forum */}
        <TeamSection
          title="Media & Social Forum"
          members={mediaTeam}
          icon={Camera}
          color="text-hot-pink"
          bgColor="bg-space-light/30"
          borderColor="border-space-light/20"
        />

        {/* General Announcement */}
        <TeamSection
          title="General Announcement"
          members={announcementTeam}
          icon={Megaphone}
          color="text-yellow-400"
          bgColor="bg-space-light/30"
          borderColor="border-space-light/20"
        />

        {/* Accommodation Team */}
        <TeamSection
          title="Accommodation Team"
          members={accommodationTeam}
          icon={Home}
          color="text-cyber-blue"
          bgColor="bg-space-light/30"
          borderColor="border-space-light/20"
        />

        {/* Judging Assistant */}
        <TeamSection
          title="Judging Assistant"
          members={judgingTeam}
          icon={Gavel}
          color="text-golden"
          bgColor="bg-space-light/40"
          borderColor="border-space-light/25"
        />

        {/* Panel Members */}
        <TeamSection
          title="Panel Members (Round Screening)"
          members={panelMembers}
          icon={Star}
          color="text-neon-purple"
          bgColor="bg-space-light/35"
          borderColor="border-space-light/22"
        />

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
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
  );
}
