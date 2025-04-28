import Image from "next/image";
import { Button } from "@/components/ui/button";
import student from "../../../public/images/boy.png";
import { Footer2 } from "../component/Footer2";
import {
  FaCheckCircle,
  FaBookOpen,
  FaStopwatch,
  FaChartBar,
} from "react-icons/fa";

export default function TestSeriesLanding() {
  const features = [
    { title: "Expert-Curated Tests", icon: FaCheckCircle },
    { title: "Instant Analysis & Solutions", icon: FaStopwatch },
    { title: "All India Rank & Competition", icon: FaChartBar },
    { title: "Covers 50+ Government Exams", icon: FaBookOpen },
  ];

  const exams = ["SSC CGL", "UPSC", "Railways", "State PSC", "SBI"];

  const testimonials = [
    {
      name: "Sandeep",
      quote: "The mock tests were so close to the real exam: basic analysis.",
    },
    {
      name: "Priya",
      quote: "I had access to all mock tests, exam papers, live analysis.",
    },
    {
      name: "Pranav",
      quote: "Easy to self-assess. Great monthly and yearly plans!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb] font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="text-2xl font-bold text-[#0056b3]">TestSeries</div>
          <nav className="space-x-8 hidden md:flex">
            {["Features", "Exams", "Pricing"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-600 hover:text-[#0056b3] transition text-lg"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#e9f0fb] to-[#dbe8f5] py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
          {/* Left Side */}
          <div className="max-w-2xl space-y-8 text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight text-[#003d80]">
              Crack Your Dream Government Job with India's #1 Test Series
              Platform!
            </h1>
            <p className="text-xl text-gray-600">
              Mock Tests | Previous Year Papers | Live Exams | Instant Results
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
              <Button className="bg-[#f97316] hover:bg-[#fb923c] text-white px-6 py-3 rounded-full text-lg shadow-lg transition">
                Start Practicing Free
              </Button>
              <Button
                variant="outline"
                className="border-[#003d80] text-[#003d80] hover:bg-[#003d80] hover:text-white px-6 py-3 rounded-full text-lg shadow-lg transition"
              >
                Explore Plans
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2">
            <Image
              src={student}
              alt="Student Studying"
              className="rounded-xl"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#1f2937]">
            Everything You Need to Ace Your Exams
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-8 bg-[#f9fbfe] rounded-2xl shadow-md hover:shadow-2xl transition"
            >
              <feature.icon className="text-[#003d80] text-5xl mb-4" />
              <h3 className="text-lg font-semibold text-[#003d80]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Exams */}
      <section id="exams" className="py-20 bg-[#f9fafb]">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#1f2937]">
            Top Exams We Cover
          </h2>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-6">
          {exams.map((exam, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:bg-[#0056b3] hover:text-white transition cursor-pointer text-xl font-semibold w-40 text-center"
            >
              {exam}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#1f2937]">
            Trusted by 1 Million+ Aspirants
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#f9fbfe] p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
            >
              <Image
                src="/user.png"
                alt="User"
                width={80}
                height={80}
                className="mb-6 rounded-full"
              />
              <h3 className="text-xl font-semibold text-[#003d80] mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}
