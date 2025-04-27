"use client";

import Image from "next/image";
import student from "../../../public/images/boy.png";
import { FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { MdQuiz } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header2 } from "../component/Header2";

export default function Home() {
  const [itemsArray] = useState([
    {
      icon: "📝",
      title: "Full CUET Tests",
      desc: "Simulate real exam experience with full-length mock tests designed by experts.",
    },
    {
      icon: "📚",
      title: "Domain Practice",
      desc: "Focused practice for Economics, Business, Biology, and other major subjects.",
    },
    {
      icon: "🧠",
      title: "Aptitude Mastery",
      desc: "Strengthen English, Reasoning, GK, and Quant through topic-based quizzes.",
    },
  ]);

  const testimonials = [
    {
      name: "Neha",
      text: "The AI insights helped me identify my weak areas and improve faster!",
      avatar: "👩‍🎓",
    },
    {
      name: "Aarav",
      text: "Feels just like the real CUET! Great confidence boost before the exam!",
      avatar: "👨‍🎓",
    },
    {
      name: "Simran",
      text: "Loved the detailed solutions. Made self-study much easier and quicker!",
      avatar: "👩‍⚕️",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
  };

  return (
    <main className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 text-gray-900 font-sans overflow-x-hidden relative scroll-smooth">
      {/* Blurred Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <Header2 />

      {/* Hero Section */}
      <section className="relative bg-yellow-900 text-white px-4 sm:px-8 lg:px-24 py-16 overflow-hidden">
        {/* Floating Icons */}
        <FaBookOpen className="absolute top-6 left-4 sm:top-10 sm:left-10 text-yellow-300 text-3xl sm:text-5xl opacity-60 z-0" />
        <FaChalkboardTeacher className="absolute top-32 left-1/4 text-yellow-300 text-2xl sm:text-5xl opacity-70 animate-bounce z-0" />
        <GiArchiveResearch className="absolute top-16 right-24 text-yellow-200 text-4xl sm:text-5xl animate-spin-slow opacity-50 z-0" />
        <MdQuiz className="absolute bottom-8 right-20 text-red-600 text-3xl sm:text-6xl animate-bounce opacity-80 z-0" />
        <PiExamFill className="absolute top-1/2 left-4 transform -translate-y-1/2 text-red-500 text-4xl sm:text-6xl animate-pulse opacity-80 z-0" />
        <GiBrain className="absolute bottom-16 left-5 sm:left-1/4 text-pink-400 text-4xl sm:text-5xl animate-bounce opacity-70 z-0" />

        {/* Main Content */}
        <div className="relative container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 z-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Achieve CUET with{" "}
              <span className="text-yellow-400">Confidence</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Your CUET Dream Starts Here
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium shadow-lg transition-all duration-300">
              Start Free Test
            </button>
          </div>

          {/* Student Image */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src={student}
              alt="CUET Student"
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-800 mb-12">
            Why Choose SankalpX?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {itemsArray.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white shadow-xl rounded-2xl p-8 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-6">{icon}</div>
                <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-100">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-slide-up">
          Hear From Our Students
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-3xl shadow-xl text-center space-y-6 animate-fade-in-up"
              >
                <div className="text-6xl">{testimonial.avatar}</div>
                <p className="text-lg text-gray-700">"{testimonial.text}"</p>
                <h4 className="font-bold text-xl text-yellow-600">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-700 text-gray-100 pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold text-yellow-100 mb-4">SankalpX</h4>
            <p className="text-sm text-gray-200">
              Your trusted companion for CUET preparation. Personalized
              AI-driven tools, mock tests & more.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-100">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-100">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-100">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@sankalpx.com"
                  className="hover:text-yellow-300"
                >
                  contact@sankalpx.com
                </a>
              </li>
              <li>Phone: +91 9876543210</li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-yellow-600 text-center text-xs text-white py-5">
        © 2024 SankalpX®. All Rights Reserved.
      </div>
    </main>
  );
}
