import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Clock, 
  Users, 
  Calendar, 
  MapPin, 
  Award, 
  FileText, 
  Code, 
  Presentation, 
  Trophy, 
  Phone, 
  Mail, 
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

export default function GuidelinesPage() {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const contactInfo = [
    {
      name: "S. Harish (III-A technical -II)",
      phone: "+91 8015206937",
      role: "Technical Coordinator"
    },
    {
      name: "Delight Cherubino I (III-A admin& Finance)",
      phone: "+91 8220789878",
      role: "Admin & Finance"
    },
    {
      name: "R. Sanjay (III-A event management)",
      phone: "+91 8220159478",
      role: "Event Management"
    },
    {
      name: "Mr. P. Vetrivel (staff coordinators)",
      phone: "+91 9600211610",
      role: "Staff Coordinator"
    }
  ];

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
            className="text-6xl md:text-8xl font-space font-black mb-6 text-golden interstellar-gradient"
            variants={itemVariants}
          >
            HACKFINITY 1.0
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl font-space font-bold mb-8 text-warm"
            variants={itemVariants}
          >
            Guidelines & Rules
          </motion.h2>
          <motion.p 
            className="text-xl text-cool mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Everything you need to know about participating in our 24-hour hackathon. 
            Read carefully to ensure a smooth and successful experience.
          </motion.p>
          
          {/* Back to Home Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a 
              href="/"
              className="inline-flex items-center gap-2 bg-space-light/20 backdrop-blur-sm border border-golden/20 text-golden px-6 py-3 rounded-lg font-semibold hover:bg-space-light/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} />
              Back to Home
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Guidelines Content */}
      <section className="py-20 bg-gradient-to-b from-space-dark via-space-medium to-space-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div
            ref={ref}
            className="max-w-6xl mx-auto space-y-16"
          >
            {/* Event Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-card p-8 rounded-xl space-border space-shadow bg-gradient-to-br from-space-light/10 to-space-medium/10 border border-space-light/20"
            >
              <motion.h3 
                className="text-3xl font-space font-bold text-golden mb-6 flex items-center gap-3"
                variants={itemVariants}
              >
                <Info size={32} />
                Event Details
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-golden" size={24} />
                  <div>
                    <p className="font-semibold text-warm">Duration</p>
                    <p className="text-cool">24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-golden" size={24} />
                  <div>
                    <p className="font-semibold text-warm">Date & Time</p>
                    <p className="text-cool">06-10-2025 (Monday) – 07-10-2025 (Tuesday)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-golden" size={24} />
                  <div>
                    <p className="font-semibold text-warm">Location</p>
                    <p className="text-cool">Ramco Institute of Technology</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-golden" size={24} />
                  <div>
                    <p className="font-semibold text-warm">Team Size</p>
                    <p className="text-cool">4 members per team</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-golden" size={24} />
                  <div>
                    <p className="font-semibold text-warm">Prize Pool</p>
                    <p className="text-cool">₹30,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="text-golden" size={24} />
                  <div>
                    <p className="font-semibold text-warm">Dress Code</p>
                    <p className="text-cool">Formals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rules and Guidelines */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-card p-8 rounded-xl space-border space-shadow bg-gradient-to-br from-space-light/10 to-space-medium/10 border border-space-light/20"
            >
              <motion.h3 
                className="text-3xl font-space font-bold text-golden mb-6 flex items-center gap-3"
                variants={itemVariants}
              >
                <CheckCircle size={32} />
                Rules and Guidelines
              </motion.h3>
              
              <div className="space-y-8">
                {/* Team Formation */}
                <div>
                  <h4 className="text-xl font-semibold text-warm mb-4">1. Team Formation</h4>
                  <ul className="space-y-2 text-cool">
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Teams must consist of 4 members
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      All team members must be students from the same college
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Cross-college teams are not allowed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Changes to team members are strictly not allowed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Solo participants are not allowed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Students can bring their own standee representing their theme and college (optional)
                    </li>
                  </ul>
                </div>

                {/* Project Requirements */}
                <div>
                  <h4 className="text-xl font-semibold text-warm mb-4">2. Project Requirements</h4>
                  <ul className="space-y-2 text-cool">
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Projects must be developed from scratch during the hackathon
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Pre-existing code or projects are not allowed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Open-source libraries, frameworks, and APIs are permitted
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      Projects must align with the hackathon's theme
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-golden mt-1">•</span>
                      All submissions must include working prototype, source code, and presentation
                    </li>
                  </ul>
                </div>

                {/* Competition Rounds */}
                <div>
                  <h4 className="text-xl font-semibold text-warm mb-4">3. Competition Rounds</h4>
                  <div className="space-y-4">
                    <div className="bg-space-light/10 p-4 rounded-lg">
                      <h5 className="font-semibold text-golden mb-2">Round 1: Evaluation & Online Presentation</h5>
                      <p className="text-cool text-sm">Teams submit brief proposal and present ideas online. Includes idea submission, evaluation, and online presentation.</p>
                      <p className="text-cool text-sm mt-2"><strong>Deadline:</strong> 25-08-2025 to 05-09-2025</p>
                      <p className="text-cool text-sm"><strong>Online Presentation:</strong> 20-09-2025 to 25-09-2025</p>
                      <p className="text-cool text-sm"><strong>Results:</strong> 26-09-2025</p>
                    </div>
                                         <div className="bg-space-light/10 p-4 rounded-lg">
                       <h5 className="font-semibold text-golden mb-2">Round 2: On-Campus Hackathon</h5>
                       <p className="text-cool text-sm">Top 10 teams participate in 24-hour hackathon at Ramco Institute of Technology. 5 minutes demo + Q&A.</p>
                       <p className="text-cool text-sm mt-2"><strong>Venue:</strong> Ramco Institute of Technology</p>
                       <p className="text-cool text-sm"><strong>Duration:</strong> 24 hours (Oct 6-7, 2025)</p>
                     </div>
                  </div>
                </div>

                {/* Judging Criteria */}
                <div>
                  <h4 className="text-xl font-semibold text-warm mb-4">4. Judging Criteria</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-space-light/10 p-4 rounded-lg">
                      <h5 className="font-semibold text-golden">Innovation (30%)</h5>
                      <p className="text-cool text-sm">Originality and creativity of the idea</p>
                    </div>
                    <div className="bg-space-light/10 p-4 rounded-lg">
                      <h5 className="font-semibold text-golden">Functionality (30%)</h5>
                      <p className="text-cool text-sm">How well the prototype works and addresses the problem</p>
                    </div>
                    <div className="bg-space-light/10 p-4 rounded-lg">
                      <h5 className="font-semibold text-golden">Technical Complexity (30%)</h5>
                      <p className="text-cool text-sm">Depth and sophistication of the solution</p>
                    </div>
                    <div className="bg-space-light/10 p-4 rounded-lg">
                      <h5 className="font-semibold text-golden">Presentation (10%)</h5>
                      <p className="text-cool text-sm">Clarity and effectiveness of the demo or pitch</p>
                    </div>
                  </div>
                </div>

                {/* Prizes */}
                <div>
                  <h4 className="text-xl font-semibold text-warm mb-4">5. Prizes</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
                      <h5 className="font-semibold text-yellow-400">🥇 First Prize</h5>
                      <p className="text-cool text-lg font-bold">₹20,000 + Internship</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 p-4 rounded-lg border border-gray-500/30">
                      <h5 className="font-semibold text-gray-400">🥈 Second Prize</h5>
                      <p className="text-cool text-lg font-bold">₹10,000 + Internship</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-4 rounded-lg border border-orange-500/30">
                      <h5 className="font-semibold text-orange-400">🏆 Special Awards</h5>
                      <p className="text-cool text-sm">Best Design, Most Impactful Solution, and more</p>
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <h4 className="text-xl font-semibold text-warm mb-4">6. Event Schedule (06-10-2025 – 07-10-2025)</h4>
                  <div className="bg-space-light/10 p-6 rounded-lg">
                    <div className="space-y-3 text-cool">
                      <div className="flex justify-between items-center">
                        <span>10:00 AM</span>
                        <span className="font-semibold text-golden">Opening Ceremony</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>11:00 AM – 12:00 PM</span>
                        <span className="font-semibold text-golden">First Screening (Round 1)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>12:00 PM – 12:30 PM</span>
                        <span className="font-semibold text-golden">Lunch</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>12:30 PM – 05:00 PM</span>
                        <span className="font-semibold text-golden">Prototype Development</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>05:30 PM – 07:00 PM</span>
                        <span className="font-semibold text-golden">Prototype Development (Round 2)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>07:00 PM – 07:00 AM</span>
                        <span className="font-semibold text-golden">Finalist Submissions & Preparations</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>09:00 AM – 10:30 AM</span>
                        <span className="font-semibold text-golden">Finalist Presentations (Round 3)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>11:00 AM</span>
                        <span className="font-semibold text-golden">Awards Ceremony</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notes */}
                <div>
                  <h4 className="text-xl font-semibold text-warm mb-4">7. Important Notes</h4>
                  <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-red-400 mt-1" size={20} />
                      <div className="space-y-2 text-cool">
                        <p><strong className="text-red-400">Finalist Fee:</strong> Top 15 teams must pay ₹500 per team for final round participation</p>
                        <p><strong className="text-red-400">Required Documents:</strong> College ID and official OD permission letter on college letterhead</p>
                        <p><strong className="text-red-400">Accommodation:</strong> Available at ₹100 per head (contact organizers in advance)</p>
                        <p><strong className="text-red-400">GPU Systems:</strong> Will be provided for training purposes (submit requirements in advance)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-card p-8 rounded-xl space-border space-shadow bg-gradient-to-br from-space-light/10 to-space-medium/10 border border-space-light/20"
            >
              <motion.h3 
                className="text-3xl font-space font-bold text-golden mb-6 flex items-center gap-3"
                variants={itemVariants}
              >
                <Phone size={32} />
                Contact Information
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="bg-space-light/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-warm mb-2">{contact.name}</h4>
                    <p className="text-cool text-sm mb-1">{contact.role}</p>
                    <p className="text-golden font-semibold">{contact.phone}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
