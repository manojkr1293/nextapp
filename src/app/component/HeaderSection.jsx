"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header2 } from "./Header2";

const quotes = [
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
    subtext: "Keep practicing; every small effort adds up!",
  },
  {
    text: "The difference between who you are and who you want to be is what you do.",
    author: "Unknown",
    subtext: "Your future success depends on the efforts you make today!",
  },
  {
    text: "Practice does not make perfect. Practice makes progress.",
    author: "Unknown",
    subtext: "The more you practice, the closer you get to your goal!",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    subtext: "Time flies, but your dedication to practice will help you soar!",
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
    subtext: "Commit to the grind, and the results will speak for themselves!",
  },
  {
    text: "Success is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell",
    subtext: "Practice is where success begins—don’t skip the hard work!",
  },
  {
    text: "The more I practice, the luckier I get.",
    author: "Gary Player",
    subtext: "Luck is just the result of consistent practice!",
  },
  {
    text: "Don’t be afraid to fail. Be afraid not to try.",
    author: "Michael Jordan",
    subtext:
      "Keep practicing, and don’t fear mistakes—they’re part of the journey!",
  },
  {
    text: "Excellence is the gradual result of always striving to do better.",
    author: "Pat Riley",
    subtext: "Every day is an opportunity to practice and get better.",
  },
  {
    text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    author: "Marie Forleo",
    subtext: "Consistency in practice is the key to mastering any skill!",
  },
];

export default function HeaderSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden px-4 sm:px-6 md:px-10">
      <header className="absolute top-0 left-0 w-full px-4 sm:px-10 py-6 sm:py-10 flex items-center justify-between z-20">
        {/* Logo (Left Side) */}
        <Link href="/home">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            SankalpX
          </div>
        </Link>
        {/* Social Icons (Right Side) */}
        <div className="flex gap-4 sm:gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition"
          >
            <FaTwitter size={20} className="sm:size-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition"
          >
            <FaGithub size={20} className="sm:size-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition"
          >
            <FaLinkedin size={20} className="sm:size-5" />
          </a>
        </div>
      </header>

      {/* Background Gradients */}
      <div className="absolute w-[90%] sm:w-[755px] h-[650px] top-0 left-0 pointer-events-none animate-gradientShift" />
      <div className="absolute w-[90%] sm:w-[755px] h-[650px] top-0 right-0 pointer-events-none animate-greenGradient" />
      <div
        className="absolute pointer-events-auto animate-yellowRotate"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "0px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(252, 212, 137, 0.6) 0%, rgba(252, 212, 137, 0.298) 62.48%, rgba(252, 212, 137, 0) 100%)",
          opacity: 1,
          display: "block",
          width: "90%",
          maxWidth: "806px",
          height: "700px",
        }}
      />

      {/* Main Content */}
      <div className="absolute bottom-10 w-full flex flex-col items-center z-10 space-y-6 px-4 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug sm:leading-relaxed bg-clip-text text-transparent gradient-heading">
                "{quotes[index].text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl text-base sm:text-lg font-semibold hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>

      <style jsx>{`
        .gradient-heading {
          line-height: 1.4;
          letter-spacing: 1px;
          text-align: center;
          background: linear-gradient(
            45deg,
            #ff8a00,
            #e52e71,
            #044bea,
            #7a00ff
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 300%;
          animation: gradient-text 8s ease infinite;
        }

        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
