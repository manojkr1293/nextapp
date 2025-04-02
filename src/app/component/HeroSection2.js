import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
    subtext: "Keep practicing; every small effort adds up!"
  },
  {
    text: "The difference between who you are and who you want to be is what you do.",
    author: "Unknown",
    subtext: "Your future success depends on the efforts you make today!"
  },
  {
    text: "Practice does not make perfect. Practice makes progress.",
    author: "Unknown",
    subtext: "The more you practice, the closer you get to your goal!"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    subtext: "Time flies, but your dedication to practice will help you soar!"
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
    subtext: "Commit to the grind, and the results will speak for themselves!"
  },
  {
    text: "Success is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell",
    subtext: "Practice is where success begins—don’t skip the hard work!"
  },
  {
    text: "The more I practice, the luckier I get.",
    author: "Gary Player",
    subtext: "Luck is just the result of consistent practice!"
  },
  {
    text: "Don’t be afraid to fail. Be afraid not to try.",
    author: "Michael Jordan",
    subtext: "Keep practicing, and don’t fear mistakes—they’re part of the journey!"
  },
  {
    text: "Excellence is the gradual result of always striving to do better.",
    author: "Pat Riley",
    subtext: "Every day is an opportunity to practice and get better."
  },
  {
    text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    author: "Marie Forleo",
    subtext: "Consistency in practice is the key to mastering any skill!"
  }
];

export default function HeroSection2() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-white px-4 text-center">
      <div className="max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#DF45A5] to-[#9534E8] bg-clip-text text-transparent"
          >
            "{quotes[index].text}"
          </motion.div>
        </AnimatePresence>
       
      </div>
    </div>
  );
}
