import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const loadingMessages = [
  "Reviewing available sessions",
  "Checking for schedule conflicts",
  "Organizing your best plan",
  "Preparing your schedule"
];

const courseNodes = [
  { id: 1, color: "#CFE8FF", delay: 0, x: -150, y: -80 },
  { id: 2, color: "#DDF6E8", delay: 0.3, x: -50, y: -40 },
  { id: 3, color: "#A9D6FF", delay: 0.6, x: 50, y: -40 },
  { id: 4, color: "#C7E8D0", delay: 0.9, x: 150, y: -80 },
];

export function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showConnections, setShowConnections] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Cycle through messages
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    // Show connections after first node appears
    setTimeout(() => setShowConnections(true), 1000);

    // Navigate to recommendations after loading completes
    const timeout = setTimeout(() => {
      navigate("/recommendations");
    }, 9000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#F8FCFF] to-white flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Subtle background shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-[#CFE8FF] rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#DDF6E8] rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#A9D6FF] to-[#C7E8D0] rounded-xl flex items-center justify-center shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 12L7 8L12 13L21 4" stroke="#2E4A62" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12V20H3V12" stroke="#2E4A62" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-[#2E4A62]">CourseFlow</span>
        </motion.div>

        {/* Animation Area */}
        <div className="relative w-[500px] h-[300px] mx-auto mb-16">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
            {showConnections && (
              <>
                {/* Line 1 to 2 */}
                <motion.path
                  d="M 150 140 L 225 160"
                  stroke="#A9D6FF"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                
                {/* Line 2 to 3 */}
                <motion.path
                  d="M 275 160 L 325 160"
                  stroke="#C7E8D0"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                
                {/* Line 3 to 4 */}
                <motion.path
                  d="M 375 160 L 425 140"
                  stroke="#A9D6FF"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                />
              </>
            )}
          </svg>

          {/* Course Nodes */}
          {courseNodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: 0,
                y: 0
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: node.x,
                y: node.y
              }}
              transition={{
                duration: 0.6,
                delay: node.delay,
                ease: "easeOut"
              }}
            >
              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-lg opacity-40"
                style={{ backgroundColor: node.color }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: "easeInOut"
                }}
              />
              
              {/* Card */}
              <div 
                className="relative w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center"
                style={{ backgroundColor: node.color }}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <motion.div
                    className="w-8 h-1 rounded-full"
                    style={{ backgroundColor: node.color }}
                    animate={{
                      width: ["32px", "20px", "32px"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: node.delay,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>

              {/* Checkmark after animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: node.delay + 1.5, duration: 0.3 }}
              >
                <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path 
                      d="M3 7L6 10L11 4" 
                      stroke={node.color} 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Central connecting circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-[#A9D6FF] to-[#C7E8D0] rounded-full shadow-md" />
          </motion.div>
        </div>

        {/* Loading Messages */}
        <div className="h-16 flex items-center justify-center">
          {loadingMessages.map((message, index) => (
            <motion.p
              key={index}
              className="absolute text-xl text-[#2E4A62]/80 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: messageIndex === index ? 1 : 0,
                y: messageIndex === index ? 0 : 10
              }}
              transition={{ duration: 0.5 }}
            >
              {message}
            </motion.p>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {loadingMessages.map((_, index) => (
            <motion.div
              key={index}
              className="h-2 rounded-full"
              initial={{ width: 8, backgroundColor: "#CFE8FF" }}
              animate={{
                width: messageIndex >= index ? 32 : 8,
                backgroundColor: messageIndex >= index ? "#A9D6FF" : "#CFE8FF"
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Subtle hint text */}
        <motion.p
          className="text-sm text-[#2E4A62]/40 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Creating your personalized schedule...
        </motion.p>
      </div>
    </div>
  );
}
