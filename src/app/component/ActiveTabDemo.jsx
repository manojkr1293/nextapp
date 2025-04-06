import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Lottie from "react-lottie";
import animationData from "../../../public/aboutus.json";
const ActiveTabDemo = ()=>{
  
    const [activeTab, setActiveTab] = useState("Projects");
      
      const tabs = [
        { name: "About SankalpX", color: "bg-transparent text-violet-600 font-normal bg-gradient-to-b from-[#E0E0FF] to-[#E0E0FF]" },
        { name: "Projects", color: "bg-transparent text-violet-600 font-normal bg-gradient-to-b from-[#E0E0FF] to-[#E0E0FF]" },
    
        { name: "Why", color: "bg-transparent text-violet-600 font-normal bg-gradient-to-b from-[#E0E0FF] to-[#E0E0FF]" },
        
      ];

      return (
        <>
          <div className="w-full flex flex-col items-center py-4 "> {/* Adjusted margin for positioning below header */}
  <div className="flex space-x-6 bg-gray-100 p-2 rounded-2xl">
    {tabs.map((tab) => (
      <button
        key={tab.name}
        className={`px-6 py-3 rounded-2xl text-4xl font-normal transition-all duration-300 ${
          activeTab === tab.name ? tab.color : "text-gray-500"
        }`}
        onClick={() => setActiveTab(tab.name)}
      >
        {tab.name}
      </button>
    ))}
  </div>
  {activeTab === "Projects" && (
    <>
    <div className="mt-28 max-w-7xl bg-white p-6 flex flex-col md:flex-row group ">
    <div className="grid grid-cols-2 gap-32">
      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-3xl shadow-md">
        <img
          src="//cdn-imgs.dora.run/design/oUVMO4OekwKGYtXq921BB.jpg/w/4096/h/4096/format/webp?"
          alt="Project 1 Image"
          className="w-full h-[350px] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text Section */}
      <div className="w-full flex flex-col mt-4 md:mt-0">
        {/* Header with Arrow */}
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-normal text-gray-800">Project 1</h2>
          <BsArrowRight className="w-6 h-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <p className="mt-6 text-gray-400 text-2xl">
          Collaborative design thinking workshop and prototyping session for an upcoming social impact startup, aimed at empowering underprivileged communities.
        </p>
      </div>
    </div>

    
  </div>
  <div className="mt-12 max-w-7xl bg-white p-6 flex flex-col md:flex-row group ">
    <div className="grid grid-cols-2 gap-32">
      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-3xl shadow-md">
        <img
          src="//cdn-imgs.dora.run/design/oUVMO4OekwKGYtXq921BB.jpg/w/4096/h/4096/format/webp?"
          alt="Project 1 Image"
          className="w-full h-[350px] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text Section */}
      <div className="w-full flex flex-col mt-4 md:mt-0">
        {/* Header with Arrow */}
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-normal text-gray-800">Project 2</h2>
          <BsArrowRight className="w-6 h-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <p className="mt-6 text-gray-400 text-2xl">
          Collaborative design thinking workshop and prototyping session for an upcoming social impact startup, aimed at empowering underprivileged communities.
        </p>
      </div>
    </div>

    
  </div>

  <div className="mt-12 max-w-7xl bg-white p-6 flex flex-col md:flex-row group ">
    <div className="grid grid-cols-2 gap-32">
      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-3xl shadow-md">
        <img
          src="//cdn-imgs.dora.run/design/oUVMO4OekwKGYtXq921BB.jpg/w/4096/h/4096/format/webp?"
          alt="Project 1 Image"
          className="w-full h-[350px] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text Section */}
      <div className="w-full flex flex-col mt-4 md:mt-0">
        {/* Header with Arrow */}
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-normal text-gray-800">Project 3</h2>
          <BsArrowRight className="w-6 h-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <p className="mt-6 text-gray-400 text-2xl">
          Collaborative design thinking workshop and prototyping session for an upcoming social impact startup, aimed at empowering underprivileged communities.
        </p>
      </div>
    </div>

    
  </div>
    </>
  )}

{activeTab === "About SankalpX" && (
<>
<div className="w-full flex flex-col items-center py-20 bg-white">
        
        <div className=" flex justify-center">
          <Lottie options={{ loop: true, autoplay: true, animationData }} height={250} width={250} />
        </div>
        <p className="mt-4 text-gray-600 text-lg max-w-4xl text-center">
          SankalpX is an advanced online learning platform dedicated to helping students excel in competitive exams. We provide high-quality test series curated by experts, ensuring thorough exam preparation. Our mission is to make learning accessible, interactive, and effective for aspirants aiming for top scores.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="p-4 bg-blue-100 rounded-lg shadow-md max-w-xs">
            <h3 className="text-xl font-semibold text-blue-700">Expert-Curated Tests</h3>
            <p className="text-gray-600">Designed by industry professionals to match the latest exam patterns.</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg shadow-md max-w-xs">
            <h3 className="text-xl font-semibold text-blue-700">Performance Analytics</h3>
            <p className="text-gray-600">Get detailed insights on your progress and improve weak areas.</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg shadow-md max-w-xs">
            <h3 className="text-xl font-semibold text-blue-700">Live Mock Tests</h3>
            <p className="text-gray-600">Simulate real exam scenarios to boost confidence and readiness.</p>
          </div>
        </div>
      </div>
</>
)}
</div>
        </>
      )
}

export default ActiveTabDemo;