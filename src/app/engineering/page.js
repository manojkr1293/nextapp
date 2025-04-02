'use client'
import { FaBook, FaClipboardCheck, FaChartLine, FaTrophy } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../../public/aboutus2.json";
import engineering from "../../../public/images/engg.png";
import bgImage2 from '../../../public/images/06.png';
import bgImage3 from '../../../public/images/07.png';
import Footer from "../component/Footer";
import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Roadmap from "../component/Roadmap";

export default function EngineeringPage() {
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 500], [0, -50]);
  const parallaxY2 = useTransform(scrollY, [0, 800], [0, -750]);

  const engineeringTests = [
    { title: "JEE Main", image: engineering.src, bgColor: "bg-blue-400", hoverBg: "hover:bg-blue-600" },
    { title: "JEE Advanced", image: engineering.src, bgColor: "bg-green-400", hoverBg: "hover:bg-green-600" },
    { title: "BITSAT", image: engineering.src, bgColor: "bg-purple-400", hoverBg: "hover:bg-purple-600" },
    { title: "VITEEE", image: engineering.src, bgColor: "bg-red-400", hoverBg: "hover:bg-red-600" },
    { title: "SRMJEEE", image: engineering.src, bgColor: "bg-yellow-400", hoverBg: "hover:bg-yellow-600" },
    { title: "WBJEE", image: engineering.src, bgColor: "bg-indigo-400", hoverBg: "hover:bg-indigo-600" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full px-28 py-14 flex items-center justify-between z-20">
        
      <Link href="/home">
      <div className="text-3xl font-bold text-gray-800">SankalpX</div>
      </Link>
     
      </header>
      
      <section className="relative bg-gradient-to-t from-blue-100 to-white py-28 overflow-hidden mb-24">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 space-y-6 text-left">
            <h1 className="text-5xl font-bold text-gray-900">Crack JEE Main & Advanced 2025</h1>
            <p className="text-2xl text-gray-600">Your roadmap to success with expert guidance and structured test series.</p>
            <a href="#test-series" className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-gray-900 hover:text-white transition">Explore Test Series</a>
          </div>
          <div className="relative flex md:w-1/2 h-[500px]">
            <motion.div className="absolute -top-48 right-[-180px] w-[300px] h-[500px] overflow-hidden" style={{ y: parallaxY1 }}>
              <Image src={bgImage2} alt="JEE Image 1" fill className="rounded-2xl object-cover" />
            </motion.div>
            <motion.div className="absolute -bottom-96 left-20 w-[350px] h-[380px] overflow-hidden" style={{ y: parallaxY2 }}>
              <Image src={bgImage3} alt="JEE Image 2" fill className="rounded-2xl object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Explore Our Engineering Test Series</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {engineeringTests.map((test, index) => (
              <div key={index} className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${test.bgColor} ${test.hoverBg}`}>
                <img src={test.image} alt={test.title} className="w-full h-96 object-cover" />
                <div className="p-6 bg-white flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-gray-900">{test.title}</h3>
                  <BsArrowRight className="w-6 h-6 text-gray-500 transition-colors hover:text-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<Roadmap/>
      <section className="text-center py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Our JEE 2025 Test Series?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <StepCard icon={<FaBook />} title="Concept Clarity" description="Detailed theory & video lectures" bgColor="bg-blue-600" />
            <StepCard icon={<FaClipboardCheck />} title="Practice Tests" description="Real exam-like mock tests" bgColor="bg-purple-600" />
            <StepCard icon={<FaChartLine />} title="Performance Analysis" description="Detailed test reports" bgColor="bg-orange-600" />
            <StepCard icon={<FaTrophy />} title="Success Strategies" description="Proven methods for high scores" bgColor="bg-green-600" />
          </div>
        </div>
      </section>
      
      <section className="relative py-32 bg-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-6">Start Your JEE 2025 Journey Today!</h2>
          <p className="text-2xl mb-6">Join our test series and maximize your potential.</p>
          <a href="#register" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-full transition hover:bg-gray-300">Register Now</a>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

function StepCard({ icon, title, description, bgColor }) {
  return (
    <div className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${bgColor} text-white`}>
      <div className="w-16 h-16 flex items-center justify-center text-3xl font-bold rounded-full bg-white text-gray-900">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm max-w-xs text-center">{description}</p>
    </div>
  );
}
