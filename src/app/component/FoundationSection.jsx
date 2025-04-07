import { motion } from "framer-motion";
import { FaBook, FaClipboardCheck, FaChartLine } from "react-icons/fa";
import React from "react";
import AnimatedSvg from "./AnimatedSvg";

const FoundationSection = () => {
  return (
    <section
      className="relative py-20 mt-20 bg-gradient-to-t from-purple-500 to-white
        overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center  text-center">
          {/* Success Badge */}
          <motion.h2
            className="text-5xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Roadmap to Exam Success
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-24 mt-7 opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Follow a structured approach to build confidence and master your
            exams.
          </motion.p>
          <AnimatedSvg />
          <div
            className="flex flex-col items-center p-2 border-2  rounded-3xl bg-opacity-30 backdrop-blur-lg shadow-lg"
            style={{
              borderImage:
                "linear-gradient(45deg, #FFD700, #FF6347, #8A2BE2) 1",
            }}
          >
            <motion.img
              src="https://i.ibb.co/kVZ3CN6/trophy.png"
              alt="trophy"
              className="w-24 drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <h1 className="text-4xl font-black text-yellow-300 drop-shadow-lg mt-3">
              Success
            </h1>
          </div>
        </div>

        {/* Step Cards */}
        <div className="flex flex-wrap justify-center gap-10 mt-16">
          <StepCard
            icon={<FaBook />}
            step="1"
            title="Learn"
            description="Build strong fundamentals with expert-led content."
            gradient="from-blue-500 to-indigo-600"
          />

          <StepCard
            icon={<FaClipboardCheck />}
            step="2"
            title="Practice"
            description="Test yourself with exam-level questions & quizzes."
            gradient="from-purple-500 to-pink-500"
          />

          <StepCard
            icon={<FaChartLine />}
            step="3"
            title="Improve"
            description="Identify weaknesses and refine your strategies."
            gradient="from-orange-500 to-red-500"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;

// Step Card Component
function StepCard({ icon, step, title, description, gradient }) {
  return (
    <motion.div
      className="relative flex flex-col items-center bg-white bg-opacity-10 p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-gray-200 text-center max-w-xs transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${gradient} text-white text-3xl font-bold rounded-full shadow-md`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mt-5 text-white drop-shadow-lg">
        {title}
      </h3>
      <p className="text-gray-300 text-md mt-2">{description}</p>
    </motion.div>
  );
}
