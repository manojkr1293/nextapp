"use client";
import Image from "next/image";
import student from "../../../public/images/boy.png";
import { FaLaptopCode, FaTools, FaDraftingCompass } from "react-icons/fa";
import { GiAtom } from "react-icons/gi";
import { SiElectron } from "react-icons/si";
import { PiMathOperationsBold, PiSigmaThin } from "react-icons/pi";
import { TbMathFunction, TbMathPi, TbMathAvg } from "react-icons/tb";
import { useState } from "react";
import TestimonialCarousel from "../component/TestimonialCarousel";
import { Header2 } from "../component/Header2";
import { Footer2 } from "../component/Footer2";
import { MobileCTA } from "../component/MobileCTA";
import { FeaturedItems } from "../component/FeaturedItems";

export default function Home() {
  const [itemsArray, setitemsArray] = useState([
    {
      icon: "📋",
      title: "Fulltests",
      desc: "Full-length mock tests based on the latest Engineering pattern.",
    },
    {
      icon: "🩺",
      title: "Subject Tests",
      desc: "Assertion & reason tests tailored for Engineering preparation.",
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
      <section className="relative bg-indigo-900 text-white px-4 sm:px-8 lg:px-24 py-16 overflow-hidden">
        {/* Floating Engineering Icons */}
        {/* Use hidden / block for responsive visibility */}
        <FaLaptopCode className="absolute bottom-10 right-1/4 text-cyan-300 text-4xl sm:text-3xl opacity-50 sm:opacity-60 animate-bounce z-0  sm:block" />
        <FaTools className="absolute top-44 sm:top-28 right-8 sm:right-16 text-orange-300 text-4xl sm:text-5xl opacity-40 sm:opacity-60 animate-spin-slow z-0  sm:block" />
        <TbMathAvg className="absolute top-1/2 sm:top-28 right-8 sm:right-1/4 text-orange-300  opacity-40 sm:opacity-60 animate-spin-slow z-0  sm:block" />
        <GiAtom className="absolute top-10 sm:top-16 left-1/4 text-yellow-300 text-4xl sm:text-5xl opacity-40 sm:opacity-50 animate-spin-slow z-0  sm:block" />
        <PiSigmaThin className="absolute bottom-10 sm:bottom-16 left-1/4 text-yellow-300 text-4xl sm:text-5xl opacity-40 sm:opacity-10 animate-pulse z-0  sm:block" />
        <SiElectron className="absolute bottom-36 sm:bottom-28 right-10 text-green-300 text-4xl sm:text-5xl opacity-10 sm:opacity-20 animate-pulse z-0  md:block" />
        <PiMathOperationsBold className="absolute sm:bottom-28 bottom-20  left-1/2 transform -translate-x-1/2 text-pink-300 text-4xl sm:text-5xl opacity-10 sm:opacity-20 animate-pulse z-0  sm:block" />
        <TbMathFunction className="absolute sm:top-28 top-2  left-1/2 transform -translate-x-1/2  text-2xl sm:text-3xl opacity-10 sm:opacity-10 animate-pulse z-0  sm:block" />
        <FaDraftingCompass className="absolute top-1/2 left-2 sm:left-6 transform -translate-y-1/2 text-red-400 text-4xl sm:text-5xl animate-pulse opacity-5 sm:opacity-10 z-0  sm:block" />
        <TbMathPi className="absolute bottom-8 left-6 sm:bottom-10 sm:left-32 text-4xl sm:text-2xl animate-bounce opacity-60 sm:opacity-70 z-0  sm:block" />

        {/* Main Content */}
        <div className="relative container mx-auto flex flex-col sm:flex-col-reverse md:flex-row items-center gap-10 z-10">
          {/* Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Conquer Engineering Exams with{" "}
              <span className="text-yellow-400">Clarity</span>
            </h2>
            <p className="text-md sm:text-lg lg:text-xl">
              Master Concepts, Ace JEE & Beyond
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium shadow-lg transition-all duration-300">
              Start Free Test
            </button>
          </div>

          {/* Student Image */}
          <div className="md:w-1/2 relative max-w-sm sm:max-w-md md:max-w-full">
            <Image
              src={student}
              alt="Engineering student"
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

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Final CTA */}

      {/* Mobile CTA Button */}
      <MobileCTA />

      {/* Footer */}
      <Footer2 />
    </main>
  );
}
