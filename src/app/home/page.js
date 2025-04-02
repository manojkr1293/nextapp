'use client'

import { motion, useScroll, useTransform } from "framer-motion";

import Lottie from "react-lottie";
import animationData from "../../../public/aboutus2.json";
import contactData from "../../../public/contact2.json";
import engineering from "../../../public/images/engg.png";
import mobilelines from "../../../public/images/icon/mobile-lines.svg";
import focus from "../../../public/images/focus.png";
import medical from "../../../public/images/medical.png";
import gov from "../../../public/images/gov.png";
import { BsArrowRight } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Footer from "../component/Footer";
import Image from 'next/image';
import bgImage2 from '../../../public/images/06.png';
import bgImage3 from '../../../public/images/07.png';
import Link from "next/link";
import Roadmap from "../component/Roadmap";
import HeroSection from "../component/HeroSection";
import HeroSection2 from "../component/HeroSection2";
import HeaderSection from "../component/HeaderSection";
import FoundationSection from "../component/FoundationSection";
import AnimatedSvg from "../component/AnimatedSvg";

export default function Home() {
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 500], [0, -50]); // Adjust range as needed
  const parallaxY2 = useTransform(scrollY, [0, 800], [0, -750]); 

  const examscategories = [
    {
      title: "IIT JEE",
      link: "engineering",
      image: engineering.src,
      bgColor: "bg-blue-400",
      hoverBg: "hover:bg-blue-600",
    },
    {
      title: "NEET",
      link: "medical",
      image: medical.src,
      bgColor: "bg-green-400",
      hoverBg: "hover:bg-green-600",
      
    },
    {
      title: "Govt Job Exams",
      link: "government",
      image: gov.src,
      bgColor: "bg-purple-400",
      hoverBg: "hover:bg-purple-600",
    },
  ];
  
  const links = [
    { name: 'Learn', href: '#' },
    { name: 'Practice', href: '#' },
    { name: 'Improve', href: '#' },
    { name: 'Succeed', href: '#' },
  ];
 
  return (
    <>
    <HeaderSection/>
    

  <section className="relative bg-gradient-to-t from-teal-100 to-white py-5 overflow-hidden mb-24">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h1 className="leading-2 text-5xl font-bold text-gray-900">Learning without limits,
          ‍</h1>
          <p className="italic text-5xl font-bold text-gray-900 ">anytime, anywhere.</p>
          <p className="text-2xl text-gray-600">We build real experiences. You're in the right place.</p>
          <a href="https://mobirise.co" className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-gray-900 hover:text-white transition">GET STARTED</a>
        </div>

        {/* Right Parallax Images */}
        <div className="relative flex md:w-1/2 h-[500px]">
          
          {/* Parallax Image 1 */}
          <motion.div 
            className="absolute -top-48 right-[-180px] w-[300px] h-[500px] overflow-hidden"
            style={{ y: parallaxY1 }}
          >
            <Image src={bgImage2} alt="Image 2" fill className="rounded-2xl object-cover" />
          </motion.div>

          {/* Parallax Image 2 */}
          <motion.div 
            className="absolute -bottom-96 left-20 w-[350px] h-[380px] overflow-hidden"
            style={{ y: parallaxY2 }}
          >
            <Image src={bgImage3} alt="Image 3" fill className="rounded-2xl object-cover" />
          </motion.div>

        </div>
      </div>
    </section>
   
   
   



   {/* Exam Categories */}
   <section className=" text-center">
  <div className="container mx-auto px-6 lg:px-20">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">Explore Our Exam Categories</h2>
    <p className="text-2xl text-gray-600 max-w-7xl mx-auto mb-10">
      Choose from our expertly curated test series designed for various competitive exams.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {examscategories.map((category, index) => (
        <Link href={category.link}>
        <div
          key={index}
          className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${category.bgColor} ${category.hoverBg}`}
        >
          <img src={category.image} alt={category.title} className="w-full h-96 object-cover" />
          <div className="p-6 bg-white flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
            <BsArrowRight className="w-6 h-6 text-gray-500 transition-colors hover:text-gray-700" />
          </div>
        </div>
        </Link>
      ))}
    </div>
  </div>
</section>

<FoundationSection/>
<Roadmap/>

    

<section id="why" className="about_area pt-20 relative items-center overflow-hidden bg-gradient-to-t from-teal-100 to-white">
  
  

  
 
  <div className="container mx-auto flex flex-col lg:flex-row ">
  {/* Left Column - Image */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
  <Lottie options={{ loop: true, autoplay: true, animationData }}  width={720} />
    {/*<img 
      src="https://preview.tailwindtemplates.co/plain/assets/images/about.svg" 
      alt="about" 
      width={720} 
      height={720} 
      className="w-auto max-w-[720px]" 
    /> */}
  </div>

  {/* Right Column - Content */}
  <div className="w-full lg:w-1/2">
    <div className="about_content mx-4 py-40 lg:pt-15 lg:pb-15">
      <div className="section_title pb-9">
        <h5 className="sub_title text-xl leading-7">Why Choose Us</h5>
        <h4 className="text-5xl font-semibold mt-4 bg-gradient-to-r from-[#DF45A5] to-[#9534E8] bg-clip-text text-transparent">
          Your Goal is Our Achievement
        </h4>
      </div>
      <p className="text-xl text-gray-600">
        Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et
        accusam et justo duo dolores et rebum. Stet clita kasd gubergren, no sea takimata sanctus.
      </p>
      <ul className="about_list pt-3">
        {[
          "Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv",
          "At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv",
          "Dvero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv"
        ].map((item, index) => (
          <li key={index} className="flex mt-5">
            <div className="about_check bg-red-500 rounded-full flex items-center justify-center w-7 h-7 text-white mt-1">
              <IoMdCheckmarkCircleOutline className="text-lg" />
            </div>
            <div className="about_list_content pl-5 pr-2 text-lg text-gray-600">
              <p>{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  </div>
</section>
<section
      className="relative bg-purple-400 bg-no-repeat py-32 px-6 bg-contain bg-center"
      style={{ backgroundImage: `url(${focus.src})` }}
    >
      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl font-semibold text-gray-900 leading-none mb-10">
          Get new skills and expand your expertise.
        </h2>
       <p className="text-3xl md:text-4xl font-semibold text-gray-900 leading-none mb-6">Your next breakthrough is just one course away.</p>
        

        {/* Download Button */}
        <div className="mt-8">
          <a
            href="#"
            className="flex items-center gap-4 bg-gray-900 text-white text-lg font-medium px-6 py-3 rounded-full transition duration-200 hover:bg-gray-700"
          >
            <img
              src="https://cdn.prod.website-files.com/66f80993567d675bb21536a3/673486c146a8fb4ced1c1a93_download.svg"
              alt="Download Icon"
              className="w-6 h-6"
            />
            Connect Now
          </a>
        </div>
      </div>
    </section>
    <section id="why" className="about_area  relative items-center overflow-hidden bg-gradient-to-t from-teal-100 to-white">
  
  

  
 
  <div className="container mx-auto flex flex-col lg:flex-row ">
      {/* Left Column - Image */}
       
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
      
      <Lottie options={{ loop: true, autoplay: true, animationData }}  width={720} />
      </div>
      
      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 py-20">
        <div className="contact_wrapper mt-11">
          <div className="section_title pb-4">
            <h5 className="text-gray-400 font-semibold text-xl">Contact</h5>
            <h4 className="text-5xl font-semibold mt-4 bg-gradient-to-r from-[#DF45A5] to-[#9534E8] bg-clip-text text-transparent">Get In Touch</h4>
            <p className="mt-4 text-gray-400 font-semibold text-xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          </div>
          <form  className="contact_form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                
                className="w-full rounded-md py-4 px-6 border border-solid border-gray-300"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                
                className="w-full rounded-md py-4 px-6 border border-solid border-gray-300"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              
              className="w-full rounded-md py-4 px-6 border border-solid border-gray-300 resize-none mt-4"
            ></textarea>
            <button type="submit" className="main-btn bg-red-500 text-white rounded-md py-3 px-6 mt-4">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </section>
      <Footer />

  </>
  );
}

