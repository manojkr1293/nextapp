import { FaBook, FaClipboardCheck, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

// Step Card Component
function StepCard({ icon, title, description, gradient }) {
  return (
    <motion.div
      className="relative flex flex-col items-center bg-white/30 p-8 rounded-2xl shadow-xl backdrop-blur-xl border border-white/50 text-center w-72 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${gradient} text-white text-2xl font-bold rounded-full shadow-md`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mt-5 text-gray-800 drop-shadow-md">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </motion.div>
  );
}

export default function SuccessFlow() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-5 py-10 bg-gradient-to-br from-white via-gray-100 to-white text-gray-900 overflow-hidden">
      <motion.h2
        className="text-5xl font-extrabold mb-10 leading-tight bg-gradient-to-r from-[#DF45A5] to-[#9534E8] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Your Roadmap to Exam Success
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-2xl text-gray-600 max-w-7xl mx-auto "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Follow a structured approach to build confidence and master your exams.
      </motion.p>

      {/* Animated SVG Lines */}
      <svg
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none"
        fill="none"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6600" />
            <stop offset="100%" stopColor="#FF3300" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#1E90FF" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF66CC" />
            <stop offset="100%" stopColor="#FF33CC" />
          </linearGradient>
        </defs>

        <path
          d="M460 700 C 460 600, 720 400, 720 320"
          stroke="url(#lineGradient1)"
          strokeWidth="3"
          strokeDasharray="500"
          strokeDashoffset="500"
          className="path-pulse"
        />
        <path
          d="M720 700 C 700 600, 720 400, 720 320"
          stroke="url(#lineGradient2)"
          strokeWidth="3"
          strokeDasharray="500"
          strokeDashoffset="500"
          className="path-pulse"
        />
        <path
          d="M980 700 C 980 600, 720 400, 720 320"
          stroke="url(#lineGradient3)"
          strokeWidth="3"
          strokeDasharray="500"
          strokeDashoffset="500"
          className="path-pulse"
        />
      </svg>

      {/* Trophy Section */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="p-5 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-red-400 shadow-2xl mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://i.ibb.co/kVZ3CN6/trophy.png"
            alt="trophy"
            className="w-24 drop-shadow-[0_0_30px_rgba(255,195,0,0.6)]"
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-[#DF45A5] to-[#9534E8] bg-clip-text text-transparent mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Success
        </motion.h1>
      </div>

      {/* Step Cards */}
      {/* Step Cards Section */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          <StepCard
            icon={<FaBook />}
            title="Learn"
            description="Build strong fundamentals with expert-led content."
            gradient="from-blue-500 to-indigo-600"
          />
          <StepCard
            icon={<FaClipboardCheck />}
            title="Practice"
            description="Test yourself with exam-level questions & quizzes."
            gradient="from-purple-500 to-pink-500"
          />
          <StepCard
            icon={<FaChartLine />}
            title="Improve"
            description="Identify weaknesses and refine your strategies."
            gradient="from-orange-500 to-red-500"
          />
        </div>
      </div>

      {/* CSS for Line Animation */}
      <style>
        {`
          @keyframes pulseAnimation {
            0% {
              stroke-dashoffset: 500;
            }
            100% {
              stroke-dashoffset: -500;
            }
          }

          .path-pulse {
            animation: pulseAnimation 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
