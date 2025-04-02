import { motion } from "framer-motion";
import {
  FaBook,
  FaClipboardCheck,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";
const Roadmap = () => {
  return (
    <>
      <section className="relative mt-20 py-16 bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          {/* Title */}
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
            className="text-lg max-w-3xl mx-auto mb-12 opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Follow a structured approach to build confidence and master your
            exams.
          </motion.p>

          {/* Stepper Flow with Connected Paths */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Step 1 - Learn */}
            <StepCard
              icon={<FaBook />}
              step="1"
              title="Learn"
              description="Build strong fundamentals with expert-led content."
              bgColor="bg-blue-600"
            />
            <ArrowAnimation />

            {/* Step 2 - Practice */}
            <StepCard
              icon={<FaClipboardCheck />}
              step="2"
              title="Practice"
              description="Test yourself with exam-level questions & quizzes."
              bgColor="bg-purple-600"
            />
            <ArrowAnimation />

            {/* Step 3 - Improve */}
            <StepCard
              icon={<FaChartLine />}
              step="3"
              title="Improve"
              description="Identify weaknesses and refine your strategies."
              bgColor="bg-orange-600"
            />
            <ArrowAnimation />

            {/* Step 4 - Succeed */}
            <StepCard
              icon={<FaTrophy />}
              step="4"
              title="Succeed"
              description="Achieve top results and reach your goals."
              bgColor="bg-green-600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;

// Step Card Component
function StepCard({ icon, step, title, description, bgColor }) {
  return (
    <motion.div
      className="relative flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`w-16 h-16 flex items-center justify-center ${bgColor} text-white text-3xl font-bold rounded-full shadow-md`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mt-4">{title}</h3>
      <p className="text-gray-600 text-sm max-w-xs text-center">
        {description}
      </p>
    </motion.div>
  );
}

// Animated Arrow Component
function ArrowAnimation() {
  return (
    <motion.div
      className="hidden md:block text-gray-500 text-4xl"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      animate={{ y: [0, -5, 0], transition: { duration: 1, repeat: Infinity } }}
    >
      →
    </motion.div>
  );
}
