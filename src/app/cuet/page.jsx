"use client";

import Image from "next/image";
import student from "../../../public/images/boy.png";
import { FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import { MdAssignment, MdPsychology, MdLibraryBooks } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { useState } from "react";
import { IoMdPulse, IoMdMenu } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Header2 } from "../component/Header2";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const achievers = [
    { name: "Ishaan Gupta", score: "99.5%", course: "BA Economics - DU" },
    { name: "Megha Sharma", score: "99.2%", course: "BBA - BHU" },
    { name: "Ravi Patel", score: "98.7%", course: "B.Sc. Bio - JNU" },
  ];

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
    {
      name: "Kabir",
      text: "Very helpful! The full mock tests made me feel exam-ready.",
      avatar: "🧑‍💼",
    },
    {
      name: "Ananya",
      text: "Extremely easy to use and focused on what matters most.",
      avatar: "👩‍💼",
    },
  ];

  const faqs = [
    {
      q: "Is the test series based on the latest CUET pattern?",
      a: "Yes, all mock tests follow the latest CUET syllabus and format.",
    },
    {
      q: "Can I access detailed solutions after tests?",
      a: "Absolutely! Each question has step-by-step explanations.",
    },
    {
      q: "How many mocks can I attempt?",
      a: "Our premium plan offers 25+ full-length mocks and unlimited practice quizzes.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className=" text-gray-900 font-sans overflow-x-hidden relative scroll-smooth">
      {/* Blurred Animated Blobs */}

      <header className="fixed top-0 left-0 w-full z-50 bg-yellow-100 backdrop-blur  shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-wide">
              SANKALPX
            </h1>
          </Link>

          <nav className="hidden md:flex space-x-6 text-gray-800 text-base font-medium">
            {["Home", "Features", "Pricing", "Testimonials"].map((item) => (
              <a key={item} href="#" className="hover:text-blue-600 transition">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow transition">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-blue-900"
          >
            <IoMdMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-800 text-lg font-medium">
            {["Home", "Features", "Pricing", "Testimonials"].map((item) => (
              <a key={item} href="#" className="block">
                {item}
              </a>
            ))}
            <button className="w-full bg-green-600 text-white py-2 rounded-full mt-2">
              Join Now
            </button>
          </nav>
        )}
      </header>
      {/* Hero */}
      <section className="relative bg-yellow-100 text-gray-900 px-4 sm:px-8 lg:px-24 pt-32 pb-20">
        <FaBookOpen className="absolute right-36 top-28 text-yellow-900 text-3xl sm:text-3xl " />
        <FaChalkboardTeacher className="absolute left-1/3 top-32 text-yellow-900 text-3xl sm:text-4xl  animate-bounce" />
        <MdQuiz className="absolute bottom-8 right-20 text-red-700 text-5xl animate-bounce opacity-60" />
        <PiExamFill className="absolute left-6 top-1/2 text-red-500 text-5xl animate-pulse opacity-70" />
        <GiBrain className="absolute left-1/4 bottom-10 text-pink-800 text-5xl animate-bounce opacity-60" />

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center sm:text-left font-serif font-extrabold leading-tight">
              Achieve CUET with <br />{" "}
              <span className="text-yellow-700">Confidence</span>
            </h1>
            <p className="text-lg text-gray-800 text-center sm:text-left">
              Your CUET dream starts here — fast mocks, clear insights, and
              smart prep.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="bg-gray-900 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-800 active:scale-95 transition-all duration-300">
                Start Free Test
              </button>
            </div>

            {/* Trust Badges */}
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className=" rounded-xl  overflow-hidden">
              <Image
                src={student}
                alt="CUET Student"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-14 font-serif">
            Why Students <span className="text-yellow-600">Choose Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {itemsArray.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-yellow-50 border border-yellow-200 hover:border-yellow-400 shadow-md rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-6">{icon}</div>
                <h3 className="text-xl font-bold text-yellow-700 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-14 font-serif">
            Top Exams <span className="text-yellow-600">We Cover </span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              { name: "CUET UG", icon: "🎯" },
              { name: "IPMAT", icon: "📊" },
              { name: "CLAT", icon: "⚖️" },
              { name: "JEE Main", icon: "🧪" },
              { name: "NEET UG", icon: "🩺" },
              { name: "NCHMCT JEE", icon: "🍽️" },
              { name: "SET", icon: "🎓" },
              { name: "DUET", icon: "🏛️" },
            ].map((exam, index) => (
              <div
                key={index}
                className="bg-white border border-yellow-100 rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-2">{exam.icon}</div>
                <p className="text-lg font-medium text-gray-800">{exam.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-14 font-serif">
            Our <span className="text-yellow-600">CUET </span> Achievers
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {achievers.map((s, i) => (
              <div
                key={i}
                className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 shadow hover:shadow-xl"
              >
                <div className="text-4xl">🎓</div>
                <h4 className="text-xl font-bold text-yellow-700 mt-4">
                  {s.name}
                </h4>
                <p className="text-sm">Score: {s.score}</p>
                <p className="text-sm italic">{s.course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-32 w-[250px] h-[250px] bg-yellow-200 opacity-30 rounded-full blur-3xl"></div>
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-14 font-serif">
            Hear From Our <span className="text-yellow-600">Students </span>
          </h2>
          <p className="text-gray-500 mt-2">Real stories. Real results.</p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <Slider {...sliderSettings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-3">
                <div className="bg-white p-8 rounded-2xl shadow text-center space-y-4 border border-yellow-100 hover:shadow-xl transition">
                  <div className="text-4xl">{t.avatar}</div>
                  <p className="italic text-gray-700">"{t.text}"</p>
                  <h4 className="font-semibold text-yellow-600">{t.name}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="bg-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-14 font-serif">
            Frequently <span className="text-yellow-600">Asked Questions </span>
          </h2>

          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-semibold text-lg text-yellow-700 mb-2">
                  {q}
                </h4>
                <p className="text-gray-700">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Banner */}
      <section className="bg-yellow-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Ace CUET?</h2>
        <p className="mb-6 text-lg">
          Join thousands of toppers using SankalpX!
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full">
          <FaBookOpen className="inline mr-2" /> Start Free Test
        </button>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-4">SankalpX</h4>
            <p className="text-sm">
              AI-driven CUET prep. Mock tests, smart insights, and self-paced
              learning.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
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
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
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
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
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
          {/* Reuse your columns, just update text-yellow-300 with text-yellow-400 or brighter for contrast */}
        </div>
        <div className="text-center text-sm text-gray-400 mt-10">
          © 2024 SankalpX®. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
