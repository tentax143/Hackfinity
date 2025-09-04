import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Cpu, Zap, Plane, Rocket, ArrowLeft, ChevronDown } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

export default function ProblemStatementsPage() {
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

  const problemStatements = [
    {
      id: 1,
      title: "Smart Education",
      icon: BookOpen,
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-600/20",
      borderColor: "border-cyan-500/30",
      problems: [
        {
          id: "1.1",
          title: "Hero Tutor Bot",
          problem: "Students often don't know what to study next given their performance history. Faculty struggle to provide 1:1 personalized recommendations.",
          goal: "Build a tutor bot that analyzes student assessment scores and progress against a course syllabus. Recommends next module/lesson with justifications (e.g., revisit weak areas like recursion before advancing).",
          howItWorks: "Import scores, use LLM to identify strengths/weaknesses. Example: Suggest path based on quiz performance.",
          data: "Create simulated meaningful assessment scores."
        },
        {
          id: "1.2",
          title: "Dynamic Adaptive Learning Path",
          problem: "Students have diverse learning needs. A fixed course sequence frustrates advanced learners (too slow) and weaker learners (too fast).",
          goal: "Generates personalized learning paths based on pre-assessments/quizzes. Skips fundamentals for advanced students, adds remedial content for weak ones. Updates path after each test.",
          howItWorks: "High scorer skips basics; low scorer gets extra 'Loops 101'. Use Gemini for reasoning/path customization."
        },
        {
          id: "1.3",
          title: "The Socratic Tutor Bot",
          problem: "Students often rely on direct answers from search or AI tools, which can hinder deep learning and critical thinking. Instructors want students to internalize concepts by reasoning through them, identifying misconceptions, and building understanding step by step. A conversational system is needed that avoids spoon-feeding answers and instead uses Socratic questioning grounded in uploaded PDFs to guide students to their own conclusions.",
          goal: "Conversational AI using Socratic questioning (no direct answers) grounded in uploaded PDFs. Probes understanding, adapts to misconceptions, logs sessions for instructors. Includes instructor analytics, guardrails for graded content.",
          core: "Define question taxonomies, use retrieval-augmented prompts.",
          howItWorks: "Ingest/tag content, initiate dialogue, use question policy (diagnostic, scaffolded), ground in materials.",
          example: "Guided questions on sorting stability."
        },
        {
          id: "1.4",
          title: "Code Content Generator",
          problem: "Learners need high-quality, structured explanations of coding problems (from URL/PDF/text). Includes conceptual breakdown, naive-to-optimal strategies, pseudocode, worked examples, complexity, pitfalls, follow-ups.",
          goal: "Generates structured explanations for coding problems.",
          outputFormat: "Overview, concepts, strategies, etc.",
          quality: "Align pseudocode with steps, verify constraints.",
          howItWorks: "From URL (e.g., LeetCode) or pasted text, summarizes problem, constraints, edge cases, strategies (brute to optimal), pseudocode, complexity, related problems."
        },
        {
          id: "1.5",
          title: "Problem Page Explainer",
          problem: "From URL (e.g., LeetCode) or pasted text, summarizes problem, constraints, edge cases, strategies (brute to optimal), pseudocode, complexity, related problems.",
          goal: "Parses/normalizes content personalizes by level.",
          compliance: "Respect TOS, use paste fallback, cache fetches.",
          howItWorks: "Parses/normalizes content, personalizes by level."
        }
      ]
    },
    {
      id: 2,
      title: "World of Computation",
      icon: Cpu,
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-indigo-600/20",
      borderColor: "border-purple-500/30",
      problems: [
        {
          id: "2.1",
          title: "Real-Time Optimisation Engine",
          problem: "In distributed computing environments, resource allocation across nodes is often inefficient, leading to bottlenecks, underutilization, and failures in processing tasks. Traditional methods lack dynamic adaptation to real-time changes in workload or node availability.",
          goal: "Build a real-time optimization engine that handles distributed computation and resource allocation, managing processes across computer nodes using AI and algorithms to ensure efficiency, fault tolerance, and optimal performance.",
          howItWorks: "Monitor node resources (CPU, memory, network) in real-time and ingest workload data (e.g., tasks, priorities). Use AI models to analyze current distribution and predict optimal allocation, considering factors like load balancing and energy efficiency. Distribute processes dynamically across nodes, rerouting tasks if conditions change (e.g., node overload or failure). Provide explanations for optimizations (e.g., 'Task rerouted to Node 3 due to 20% lower latency'). Log and visualize resource usage for administrators to review and refine.",
          exampleScenario: "A cluster of 10 nodes running data processing jobs experiences a spike in demand. The engine reallocates resources, prioritizing critical tasks and scaling down non-essential ones, reducing overall completion time by 30%.",
          suggestedTech: "Backend for real-time monitoring and AI orchestration (e.g., using frameworks like Ray or Dask for distribution). AI/ML for optimization (e.g., reinforcement learning with TensorFlow or PyTorch). Databases for state management and vector search for pattern matching in logs."
        },
        {
          id: "2.2",
          title: "Parallel Scheduler",
          problem: "Scheduling processes in distributed systems, especially for ML model training or inference, is challenging due to variable workloads and node failures. Systems often lack seamless failover, leading to downtime and inefficient resource use.",
          goal: "Develop a parallel scheduler that optimizes scheduling and distribution of processes like ML models across nodes, ensuring fault tolerance where if a task fails on one node, another seamlessly handles it.",
          howItWorks: "Ingest scheduling requests for processes (e.g., ML training jobs, batch processing) with priorities and dependencies. Analyze system state using algorithms to distribute tasks optimally, considering node capabilities and current loads. Implement failover mechanisms: Monitor task progress; if failure detected (e.g., timeout or crash), migrate to another node with minimal data loss. Update schedules dynamically based on real-time metrics and provide status dashboards. Handle edge cases like network partitions or sudden resource spikes with graceful degradation.",
          exampleScenario: "During ML model training on Node A, a hardware failure occurs. The scheduler detects it, transfers checkpointed state to Node B, and resumes training without restarting from scratch, saving hours of computation.",
          suggestedTech: "Backend for scheduling and orchestration (e.g., Kubernetes or Apache Airflow extensions). ML for predictive scheduling (e.g., scikit-learn or custom neural networks). Databases for task queues and state persistence, with vector DB for similarity-based failover node selection."
        },
        {
          id: "2.3",
          title: "Thread Analysis and Node Security",
          problem: "In networked distributed systems, managing threads across multiple nodes from a central head node is prone to inefficiencies, vulnerabilities, and breaches. Cyber security threats like unauthorized access or data leaks can compromise the entire cluster, and traditional monitoring lacks integrated AI-driven analysis.",
          goal: "Create a system with a head node that oversees all systems through the network, using optimized methods to manage and optimize threads while performing comprehensive security checkups and analysis across the distribution. Emphasize cyber security as a major role, including threat detection and response.",
          howItWorks: "Establish a head node that connects and monitors all other nodes via secure network protocols. Analyze threads in real-time: Optimize allocation, detect bottlenecks (e.g., deadlocks), and balance loads using AI algorithms. Perform security scans: Continuous checks for vulnerabilities, malware, unauthorized access, and anomalies (e.g., unusual data flows). Integrate cyber security features: Use encryption, intrusion detection, and automated responses (e.g., isolate compromised nodes). Provide dashboards for thread performance and security reports, with alerts for critical issues. Handle edge cases like network failures by falling back to local node security modes.",
          exampleScenario: "A suspicious thread on Node 5 shows anomalous behavior (e.g., high network outbound). The head node detects it via AI anomaly detection, quarantines the node, scans for malware, and redistributes threads to maintain system integrity without downtime.",
          suggestedTech: "Backend for network management and thread orchestration (e.g., using ZeroMQ or gRPC for communication). AI/ML for thread optimization and security analysis (e.g., anomaly detection with Isolation Forest or deep learning models). Security tools integration (e.g., open-source like Suricata for IDS, or blockchain for secure logs). Databases for logging threats and thread states, with vector search for pattern-based threat hunting."
        }
      ]
    },
    {
      id: 3,
      title: "Autonomous Workflow – n8n and Similar Automation",
      icon: Zap,
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 to-orange-600/20",
      borderColor: "border-yellow-500/30",
      problems: [
        {
          id: "3.1",
          title: "Office Automation",
          problem: "Maintaining an office environment without human intervention is challenging, especially for network stability, electricity/power management, and work monitoring. Manual oversight leads to inefficiencies, outages, and security risks in data handling.",
          goal: "Build an autonomous system for a manless office that manages network, electricity mains, power optimization, and work monitoring using machine learning, with secure data transfer via blockchain.",
          howItWorks: "Monitor office systems (network devices, power usage, sensors) in real-time via IoT integrations. Use ML models to predict and optimize power consumption (e.g., dim lights or shut down idle devices) and network bandwidth allocation. Automate work monitoring: Track tasks, employee productivity (anonymized), and anomalies using computer vision or log analysis. Secure all data transfers (e.g., sensor data, reports) using blockchain for immutable, tamper-proof logging and transactions. Provide automated responses to issues (e.g., reroute power during outages) and dashboards for remote oversight. Handle edge cases like power failures with backup protocols and ML-based recovery.",
          exampleScenario: "In an unmanned office, a power surge is predicted via ML from usage patterns. The system automatically switches to backups, optimizes network for critical tasks, and logs the event on blockchain for audit.",
          suggestedTech: "Automation workflows (e.g., n8n or Zapier-like for orchestration). ML for prediction (e.g., time-series forecasting with Prophet or LSTM models). Blockchain for data security (e.g., Ethereum or Hyperledger). IoT integrations for sensors and monitoring."
        },
        {
          id: "3.2",
          title: "Call Center Management",
          problem: "Call centers handle high volumes of queries but suffer from delays, inconsistent responses, and insecure data handling. Human agents are prone to errors, and integration across channels (calls, emails) is lacking.",
          goal: "Develop an autonomous call center management system that auto-responds to calls, generates LLM-based summaries and mail responses, handles query resolution, and ensures secured data transfer using blockchain methods.",
          howItWorks: "Ingest incoming calls/queries via voice-to-text or direct input. Use LLM to analyze queries, generate responses, and summarize interactions (e.g., key points from a call). Automate follow-ups: Send email responses or resolve queries directly if possible (e.g., FAQ-based). Secure data transfers: Use blockchain for logging interactions, ensuring privacy and immutability (e.g., encrypted transaction ledgers). Escalate complex queries to human agents with pre-generated summaries. Monitor performance with metrics like resolution time and provide iterative improvements via ML feedback loops.",
          exampleInteraction: "Caller: 'Issue with my account balance.' System: Analyzes via LLM, responds verbally, summarizes in email, logs securely on blockchain. If unresolved, escalates with context.",
          suggestedTech: "Automation for workflows (e.g., n8n integrations with Twilio for calls). LLM for response generation (e.g., open models like Llama or GPT variants). Blockchain for secure transfers (e.g., Solana for fast transactions). ML for query classification and sentiment analysis."
        },
        {
          id: "3.3",
          title: "Collaborative Work Space Assistant",
          problem: "Remote and hybrid teams lack seamless, intelligent assistance for collaborative workspaces, leading to disjointed communication, task tracking, and resource sharing. Existing tools are often siloed and not proactive.",
          goal: "Build a collaborative workspace assistant that automates task assignment, real-time collaboration, document sharing, and intelligent suggestions using AI, with full automation for workflows.",
          howItWorks: "Integrate with workspace tools to monitor projects, chats, and documents. Use AI to automate task creation, assignment based on skills/availability, and progress tracking. Facilitate real-time collaboration: Auto-suggest edits, summarize discussions, and resolve conflicts. Provide proactive assistance (e.g., remind deadlines, suggest resources via search). Secure and log all interactions with audit trails. Handle edge cases like user conflicts with AI-mediated resolutions.",
          exampleScenario: "Team discussing a project: Assistant summarizes key points, assigns subtasks, shares relevant docs, and schedules follow-ups automatically.",
          suggestedTech: "Automation frameworks (e.g., n8n for workflows, integrated with Slack or Microsoft Teams). AI/LLM for suggestions and summarization (e.g., fine-tuned models for context awareness). Databases for state and collaboration history."
        },
        {
          id: "3.4",
          title: "Automated Material Property Detection",
          problem: "In industries like manufacturing, logistics, and quality control, accurately measuring material properties such as height, weight, dimensions, density, and composition is essential but often relies on manual processes that are time-consuming, prone to human error, inconsistent, and inefficient for high-volume operations. Lack of real-time integration with inventory systems leads to delays, inaccuracies in reporting, and potential security issues in data handling across supply chains.",
          goal: "Develop an autonomous material property detection system that uses AI and computer vision (CV) to automatically detect and measure properties like height, weight, and others (e.g., volume, surface defects, material type), generates LLM-based summaries and reports, ensures secure data logging via blockchain, and integrates with downstream workflows for query resolution or alerts.",
          howItWorks: "Ingest visual data from cameras or sensors via CV for real-time scanning. Use AI/CV models to detect and measure properties (e.g., object detection for height/dimensions, integration with digital scales for weight). Employ LLM to analyze results, generate summaries, and automate responses (e.g., report generation or FAQ-based resolutions for anomalies). Secure data transfers: Leverage blockchain for immutable logging of measurements and audits, ensuring privacy and tamper-proof records. Escalate anomalies (e.g., defects) to human experts with pre-generated AI summaries. Monitor system performance with metrics like accuracy rate and processing time, improving via ML feedback loops for model retraining.",
          exampleInteraction: "Operator scans a material package. System: Uses CV to detect height (e.g., 50 cm), estimates weight via integrated sensors or AI inference, identifies other properties like material type (e.g., metal alloy), generates a verbal or email summary, logs data securely on blockchain. If a defect is detected, escalates with contextual report.",
          suggestedTech: "CV for detection (e.g., OpenCV or TensorFlow Object Detection for dimension measurement). AI/ML for property analysis (e.g., models like YOLO for real-time detection, scikit-learn for classification). LLM for summarization (e.g., open models like Llama or GPT variants). Blockchain for secure logging (e.g., Ethereum for immutable records). Automation workflows (e.g., n8n integrations with hardware APIs like Raspberry Pi cameras)."
        }
      ]
    },
    {
      id: 4,
      title: "7th Sense – Drones and Robots that Extend Human Abilities",
      icon: Plane,
      color: "text-green-400",
      gradient: "from-green-500/20 to-emerald-600/20",
      borderColor: "border-green-500/30",
      problems: [
        {
          id: "4.1",
          title: "Drone Optimization",
          problem: "Drones in disaster management are vulnerable to physical and external disruptions like noise, jammers, wind, or weak networks, reducing their effectiveness in critical scenarios.",
          goal: "Develop an optimized drone system that is silenced (low noise), resistant to physical/external conditions (e.g., jammers, network issues), tailored for disaster management with autonomous navigation and data collection.",
          howItWorks: "Equip drones with sensors for environmental monitoring (e.g., wind, signal strength). Use AI to optimize flight paths, counter jammers (e.g., frequency hopping), and maintain silence via propeller designs or algorithms. Handle network disruptions: Fall back to offline modes, store-and-forward data, or mesh networking with other drones. Collect and analyze disaster data (e.g., imagery, heat maps) in real-time for response teams. Provide logs and visualizations of missions with AI-generated insights.",
          exampleScenario: "In a jammed disaster zone, the drone switches frequencies, navigates autonomously, collects survivor data silently, and relays via secure channels once network stabilizes.",
          suggestedTech: "AI for path optimization (e.g., reinforcement learning with ROS). Hardware/software for resistance (e.g., anti-jamming algorithms, quiet propulsion). CV/ML for data analysis (e.g., OpenCV integrated with edge computing)."
        },
        {
          id: "4.2",
          title: "Robotic Services",
          problem: "Warehouse logistics and environment management are labor-intensive, error-prone, and lack integrated AI assistance for optimization and user interaction.",
          goal: "Build robotic services for AI-driven logistics management in warehouses, including environment management (e.g., inventory, safety), with an AI assistant and personal app for control.",
          howItWorks: "Deploy robots for tasks like inventory scanning, picking, and sorting using sensors and CV. Use AI to optimize logistics (e.g., predict stock needs, route planning) and manage environment (e.g., temperature control, hazard detection). Integrate an AI assistant for voice/text queries and a personal app for users to monitor/control (e.g., real-time status). Handle failures with redundancy (e.g., robot handoffs). Secure data with encryption and provide analytics dashboards.",
          exampleScenario: "Robot detects low stock, optimizes restocking path, alerts via app, and adjusts warehouse lighting for energy efficiency.",
          suggestedTech: "Robotics frameworks (e.g., ROS for navigation). AI/ML for logistics (e.g., graph algorithms for routing, predictive models). App development (e.g., Flutter for cross-platform personal app)."
        },
        {
          id: "4.3",
          title: "Personal Mental Health Assistant like a Counsellor",
          problem: "Mental health support is often inaccessible, lacking real-time, personalized interaction. Traditional methods don't integrate multi-modal analysis for proactive care.",
          goal: "Create a pet-like robotic assistant using AI agents for real-time sentiment analysis, counselling via LLM/ML algorithms, and CV integration to extend human emotional support.",
          howItWorks: "Use CV and sensors to detect user sentiment (e.g., facial expressions, voice tone). AI agents analyze data with LLM for contextual understanding and generate responses (e.g., empathetic dialogue, suggestions). Provide counselling sessions: Track mood over time, offer exercises, or escalate to professionals. Pet-like form factor for companionship (e.g., responsive movements). Ensure privacy with local processing and secure data storage.",
          exampleInteraction: "User shows stress via face; assistant: 'You seem tense. Let's talk about it or try a breathing exercise?' Analyzes response and adapts.",
          suggestedTech: "AI agents/LLM for dialogue (e.g., Rasa or custom agents). ML/CV for sentiment (e.g., DeepFace for analysis). Robotics for physical interaction (e.g., Arduino-based pet form)."
        },
        {
          id: "4.4",
          title: "Disaster Management and Response Robots and Autonomous Systems",
          problem: "Disaster response involves multiple departments with poor coordination, leading to delays and inefficiencies in rescue and recovery.",
          goal: "Develop robots and autonomous systems that connect all departments (e.g., fire, medical, police) to enhance integrity, coordination, and response effectiveness.",
          howItWorks: "Deploy robots/drones for on-site data collection (e.g., mapping, victim detection). Use autonomous systems to integrate data across departments via a central platform. AI analyzes data for real-time decisions (e.g., prioritize areas), shares insights securely. Facilitate hand-holding: Automated alerts, shared dashboards, and collaborative planning. Handle disruptions with offline capabilities and redundancy.",
          exampleScenario: "In a flood, robots map affected areas, connect fire/medical teams, AI suggests routes, enhancing unified response.",
          suggestedTech: "Autonomous frameworks (e.g., ROS for robots). AI for coordination (e.g., multi-agent systems). Integration platforms (e.g., MQTT for inter-department comms)."
        }
      ]
    },
    {
      id: 5,
      title: "Beyond Limits – Open Innovation Track",
      icon: Rocket,
      color: "text-pink-400",
      gradient: "from-pink-500/20 to-rose-600/20",
      borderColor: "border-pink-500/30",
      description: "This track encourages unrestricted innovation using the latest tech, open stacks, and languages. Participants can propose or adapt problems from above or create new ones, focusing on breakthroughs in AI, robotics, computation, or automation. Use emerging tools like edge AI (e.g., TensorFlow Lite), Web3 for decentralization, or quantum-inspired algorithms where applicable, but without fixed stacks—emphasize creativity and impact. Submissions should demonstrate novel applications, scalability, and ethical considerations."
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
            Problem Statements
          </motion.h2>
          <motion.p 
            className="text-xl text-cool mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Explore our comprehensive problem statements across 5 innovative tracks. 
            Each challenge is designed to push the boundaries of technology and creativity.
          </motion.p>
          
                     {/* Back to Home Button */}
           <motion.div
             variants={itemVariants}
             className="flex justify-center gap-4 mb-8"
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
             
             <motion.a 
               href="https://docs.google.com/document/d/1oRDPZynRAVALbAM-7Sf8nXBT8k4NIz3ZNF79t6YeXu8/edit?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-cyber-teal/20 backdrop-blur-sm border border-cyber-teal/20 text-cyber-teal px-6 py-3 rounded-lg font-semibold hover:bg-cyber-teal/30 transition-all duration-300"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <BookOpen size={20} />
               Detailed & Additional Statements
             </motion.a>
           </motion.div>

           {/* Scroll Down Indicator */}
           <motion.div
             variants={itemVariants}
             className="flex justify-center"
           >
             <motion.div
               className="flex flex-col items-center text-golden"
               animate={{
                 y: [0, 10, 0],
               }}
               transition={{
                 duration: 2,
                 repeat: -1,
                 ease: "easeInOut"
               }}
             >
               <span className="text-sm font-semibold mb-2">Scroll Down</span>
               <motion.div
                 animate={{
                   y: [0, 5, 0],
                 }}
                 transition={{
                   duration: 1.5,
                   repeat: -1,
                   ease: "easeInOut",
                   delay: 0.5
                 }}
               >
                 <ChevronDown size={24} className="text-golden" />
               </motion.div>
             </motion.div>
           </motion.div>
         </motion.div>
       </section>

      {/* Problem Statements Content */}
      <section className="py-20 bg-gradient-to-b from-space-dark via-space-medium to-space-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div
            ref={ref}
            className="space-y-20"
          >
            {problemStatements.map((track, trackIndex) => (
              <div
                key={track.id}
                className="mb-20"
              >
                {/* Track Header */}
                <div 
                  className={`text-center mb-12 p-8 rounded-2xl bg-gradient-to-r ${track.gradient} border ${track.borderColor}`}
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-space-medium ${track.color} glow-golden`}>
                      <track.icon size={40} />
                    </div>
                    <h2 className={`text-4xl font-space font-bold ${track.color}`}>
                      {track.title}
                    </h2>
                  </div>
                  {track.description && (
                    <p className="text-cool text-lg max-w-4xl mx-auto leading-relaxed">
                      {track.description}
                    </p>
                  )}
                </div>

                {/* Problem Statements */}
                {track.problems && (
                  <div className="space-y-8">
                    {track.problems.map((problem, problemIndex) => (
                      <div
                        key={problem.id}
                        className="space-card p-8 rounded-xl space-border space-shadow bg-gradient-to-br from-space-light/10 to-space-medium/10 border border-space-light/20"
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center w-12 h-12 bg-golden text-space-dark rounded-lg font-bold text-lg">
                              {problem.id}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-space font-bold text-golden mb-4">
                              {problem.title}
                            </h3>
                            
                            {/* Problem */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-warm mb-2">Problem:</h4>
                              <p className="text-cool leading-relaxed">{problem.problem}</p>
                            </div>

                            {/* Goal */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-warm mb-2">Goal:</h4>
                              <p className="text-cool leading-relaxed">{problem.goal}</p>
                            </div>

                            {/* How it Works */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-warm mb-2">How it Works:</h4>
                              <p className="text-cool leading-relaxed">{problem.howItWorks}</p>
                            </div>

                            {/* Additional Fields */}
                            {'data' in problem && problem.data && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Data:</h4>
                                <p className="text-cool leading-relaxed">{problem.data}</p>
                              </div>
                            )}

                            {'core' in problem && problem.core && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Core:</h4>
                                <p className="text-cool leading-relaxed">{problem.core}</p>
                              </div>
                            )}

                            {'outputFormat' in problem && problem.outputFormat && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Output Format:</h4>
                                <p className="text-cool leading-relaxed">{problem.outputFormat}</p>
                              </div>
                            )}

                            {'quality' in problem && problem.quality && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Quality:</h4>
                                <p className="text-cool leading-relaxed">{problem.quality}</p>
                              </div>
                            )}

                            {'compliance' in problem && problem.compliance && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Compliance:</h4>
                                <p className="text-cool leading-relaxed">{problem.compliance}</p>
                              </div>
                            )}

                            {'example' in problem && problem.example && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Example:</h4>
                                <p className="text-cool leading-relaxed">{problem.example}</p>
                              </div>
                            )}

                            {'exampleScenario' in problem && problem.exampleScenario && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Example Scenario:</h4>
                                <p className="text-cool leading-relaxed">{problem.exampleScenario}</p>
                              </div>
                            )}

                            {'exampleInteraction' in problem && problem.exampleInteraction && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Example Interaction:</h4>
                                <p className="text-cool leading-relaxed">{problem.exampleInteraction}</p>
                              </div>
                            )}

                            {'suggestedTech' in problem && problem.suggestedTech && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-warm mb-2">Suggested Tech (Open Innovation):</h4>
                                <p className="text-cool leading-relaxed">{problem.suggestedTech}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
