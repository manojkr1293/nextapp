"use client";
import Image from "next/image";
import student from "../../../public/images/boy.png";
import { FaStethoscope, FaMicroscope, FaDna } from "react-icons/fa";
import { IoMdPulse } from "react-icons/io";
import { BiAtom } from "react-icons/bi";
import { GiHeartOrgan, GiSkeleton, GiKidneys, GiBrain } from "react-icons/gi";
import { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCarousel from "../component/TestimonialCarousel";
import { Header2 } from "../component/Header2";
import { Footer2 } from "../component/Footer2";
import { MobileCTA } from "../component/MobileCTA";
import { FeaturedItems } from "../component/FeaturedItems";
const MotionStethoscope = motion(FaStethoscope);

export default function Home() {
  const [itemsArray, setitemsArray] = useState([
    {
      icon: "📋",
      title: "NEET UG Fulltests",
      desc: "Full-length mock tests based on the latest NEET pattern.",
    },
    {
      icon: "🩺",
      title: "AIIMS-Type Tests",
      desc: "Assertion & reason tests tailored for AIIMS preparation.",
    },
    {
      icon: "📖",
      title: "NCERT Tests",
      desc: "Chapter-wise tests aligned with the NCERT syllabus.",
    },
  ]);
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <Header2 />

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white px-4 sm:px-8 lg:px-24 py-16 overflow-hidden">
        {/* Floating Icons */}
        <MotionStethoscope
          className="absolute top-6 left-4 sm:top-10 sm:left-10 text-blue-300 text-3xl sm:text-5xl opacity-60 z-0"
          initial={{ rotate: -20 }}
          animate={{ rotate: 20 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <FaMicroscope className="absolute top-32 left-1/4 text-green-300 text-2xl sm:text-5xl opacity-70 animate-bounce z-0" />
        <FaDna className="absolute top-16 right-24 text-purple-300 text-4xl sm:text-5xl animate-spin-slow opacity-50 z-0" />
        <IoMdPulse className="absolute bottom-8 right-20 text-red-600 text-3xl sm:text-6xl animate-bounce  opacity-80 z-0" />
        <GiHeartOrgan className="absolute top-1/2 left-4 transform -translate-y-1/2 text-red-500 text-4xl sm:text-6xl animate-pulse opacity-80 z-0" />
        <BiAtom className="absolute bottom-28 sm:bottom-1/4 right-6 text-yellow-300 text-4xl sm:text-5xl animate-spin-slow opacity-60 z-0" />
        <GiKidneys className="absolute md:bottom-24 left-1/2 transform -translate-x-1/2 text-cyan-300 text-2xl sm:text-5xl sm:bottom-28 animate-heartbeat opacity-60 z-0" />
        <GiBrain className="absolute bottom-16 left-5 sm:left-1/4 text-pink-400 text-4xl sm:text-5xl animate-bounce opacity-70 z-0" />
        <GiSkeleton className="absolute hidden sm:block top-20 left-1/2 text-indigo-300 text-4xl sm:text-5xl animate-pulse opacity-80 z-0" />

        {/* Main Content */}
        <div className="relative container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 z-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Achieve NEET with{" "}
              <span className="text-green-400">Confidence</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              Your 700+ Dream Starts Here
            </p>
            <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium shadow-lg transition-all duration-300">
              Start Free Test
            </button>
          </div>

          {/* Student Image */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src={student}
              alt="Student studying"
              className="w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Test Types */}
      <FeaturedItems
        sectionTitle="Practice Makes Perfect"
        itemsArray={itemsArray}
      />

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div className="space-y-8">
              {[
                {
                  icon: "📊",
                  title: "Performance Analysis",
                  desc: "AI-driven insights to track your progress and identify weak areas.",
                },
                {
                  icon: "📝",
                  title: "Detailed Solutions",
                  desc: "Step-by-step solutions to deepen understanding of each concept.",
                },
                {
                  icon: "📈",
                  title: "Difficulty Levels",
                  desc: "Practice with questions ranging from easy to advanced.",
                },
                {
                  icon: "💻",
                  title: "Realistic Interface",
                  desc: "Simulated environment that mirrors the actual exam setup.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-5">
                  <div className="text-4xl">{icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-1">
                      {title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
              <div className="pt-6">
                <span className="inline-block bg-green-600 text-white text-sm font-medium px-6 py-2 rounded-full shadow-md">
                  ✅ Trusted by 20,000+ NEET Aspirants
                </span>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-white shadow-2xl rounded-3xl p-10 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>✔️ AI Insights</li>
                  <li>✔️ Mock Test Reports</li>
                  <li>✔️ Accuracy Tracking</li>
                  <li>✔️ AI Insights</li>
                  <li>✔️ Mock Test Reports</li>
                  <li>✔️ Accuracy Tracking</li>
                  <li>✔️ AI Insights</li>
                  <li>✔️ Mock Test Reports</li>
                  <li>✔️ Accuracy Tracking</li>
                </ul>
                <div className="absolute top-0 right-0 mt-3 mr-3 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                  ₹45
                </div>
                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition duration-200">
                    $3.05 · Start Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      {/* Testimonials */}

      {/* Final CTA */}

      {/* Mobile CTA Button */}
      <MobileCTA />

      {/* Footer */}
      <Footer2 />
    </main>
  );
}
