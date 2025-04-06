import { useState } from "react";
import { BsPeopleFill } from "react-icons/bs";

const ExcellanceStats = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track which block is hovered

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const blocks = [
    { title: "15 Million+", description: "Happy Students" },
    { title: "20 Million+", description: "Satisfied Learners" },
    { title: "500K+", description: "Certified Graduates" },
    { title: "1.2 Million+", description: "Courses Offered" },
  ];

  return (
    <div className="w-full p-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-10">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[rgb(255,243,227)] p-10 font-semibold gap-5 relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <p
                className={`text-4xl transition-transform duration-300 ease-in-out ${
                  hoveredIndex === index ? "-translate-y-3" : "translate-y-0"
                }`}
              >
                {block.title}
              </p>
              <small className={`text-xl transition-transform duration-300 ease-in-out ${
                  hoveredIndex === index ? "-translate-y-3" : "translate-y-0"
                }`}>{block.description}</small>
              <div className="relative flex items-center justify-center w-full">
                {/* Icon that appears below the text */}
                <BsPeopleFill
                  className={`text-6xl transition-all duration-300 ease-in-out absolute ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    bottom: -30, // Adjust this to control the distance below the text
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExcellanceStats;
