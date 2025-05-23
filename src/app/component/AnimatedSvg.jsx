import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
const AnimatedSvg = () => {
  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <svg
          className="w-full h-auto"
          viewBox="0 0 891 264"
          fill="none"
          role="img"
          aria-label="..."
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="orange-pulse-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#FF6600", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FF3300", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="blue-pulse-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#0066FF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0033FF", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="pink-pulse-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#FF66CC", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FF33CC", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient
              id="orange-pulse-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#FF6600", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FF3300", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="blue-pulse-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#0066FF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0033FF", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient id="pink-pulse-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#FF66CC", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FF33CC", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* SVG Paths with Gradients */}
          <path
            d="M388 96L388 68C388 65.7909 386.209 64 384 64L310 64"
            stroke="#d7d7d7"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
          <path
            d="M349 150L73 150C70.7909 150 69 151.791 69 154L69 174"
            stroke="#d7d7d7"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
          <g>
            <path
              d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
              stroke="#d7d7d7"
              strokeOpacity="1"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
            <path
              id="pulse-path3"
              d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
              stroke="url(#orange-pulse-1)"
              strokeWidth="2"
              strokeDasharray="500" // Set to the total length of the path
              strokeDashoffset="500" // Initially hidden
              className="path-pulse"
            ></path>
          </g>
          <g>
            <path
              d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264"
              stroke="#d7d7d7"
              strokeOpacity="1"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
            <path
              d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264"
              stroke="url(#blue-pulse-1)"
              strokeLinecap="round"
              strokeWidth="2"
              strokeDasharray="500" // Set to the total length of the path
              strokeDashoffset="500" // Initially hidden
              className="path-pulse"
            ></path>
          </g>
          <g>
            <path
              d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
              stroke="#d7d7d7"
              strokeOpacity="1"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
            <path
              d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
              stroke="url(#pink-pulse-2)"
              strokeLinecap="round"
              strokeWidth="2"
              strokeDasharray="500" // Set to the total length of the path
              strokeDashoffset="500" // Initially hidden
              className="path-pulse"
            ></path>
          </g>
          <g>
            <path
              d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264"
              stroke="#d7d7d7"
              strokeOpacity="1"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
            <path
              id="pulse-path"
              d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264"
              stroke="url(#blue-pulse-2)"
              strokeLinecap="round"
              strokeWidth="2"
              strokeDasharray="500" // Set to the total length of the path
              strokeDashoffset="500" // Initially hidden
              className="path-pulse"
            ></path>
          </g>
          <g>
            <path
              d="M412 263.5L412 184"
              stroke="url(#pink-pulse-1)"
              strokeWidth="2"
            ></path>
          </g>
          <g>
            <path
              d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264"
              stroke="#d7d7d7"
              strokeOpacity="1"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
            <path
              id="pulse-path2"
              d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264"
              stroke="url(#orange-pulse-2)"
              strokeWidth="2"
              strokeDasharray="500" // Set to the total length of the path
              strokeDashoffset="500" // Initially hidden
              className="path-pulse"
            ></path>
          </g>
          <path
            d="M436 96L436 0"
            stroke="url(#paint1_linear_341_27683)"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
          <path
            d="M436 214L436 184"
            stroke="#d7d7d7"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
            transformOrigin="436px 199px"
            style={{ transform: "scale(-1)" }}
          ></path>
          <path
            d="M460 96L460 64"
            stroke="#d7d7d7"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
          <path
            d="M460 239L460 184"
            stroke="#d7d7d7"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
            transformOrigin="460px 211.5px"
            style={{ transform: "scale(-1)" }}
          ></path>
          <path
            d="M484 96L484 24C484 21.7909 485.791 20 488 20L554 20"
            stroke="url(#paint2_linear_341_27683)"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
          <path
            d="M484 184L484 210C484 212.209 485.791 214 488 214L560 214"
            stroke="#d7d7d7"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>
          <path
            d="M508 184L508 193C508 195.209 509.791 197 512 197L560 197"
            stroke="#d7d7d7"
            strokeOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          ></path>

          {/* Circles */}
          <circle cx="460" cy="64" fill="#d7d7d7" r="4" opacity="1"></circle>
          <circle
            cx="460"
            cy="64"
            r="3.5"
            stroke="#d7d7d7"
            strokeOpacity="1"
            opacity="1"
          ></circle>
          <circle cx="308" cy="64" fill="#d7d7d7" r="4" opacity="1"></circle>
          <circle
            cx="308"
            cy="64"
            r="3.5"
            stroke="#d7d7d7"
            strokeOpacity="1"
            opacity="1"
          ></circle>
          <circle cx="69" cy="173" fill="#d7d7d7" r="4" opacity="1"></circle>
          <circle
            cx="69"
            cy="173"
            r="3.5"
            stroke="#d7d7d7"
            strokeOpacity="1"
            opacity="1"
          ></circle>
          <circle cx="436" cy="214" fill="#d7d7d7" r="4" opacity="1"></circle>
          <circle
            cx="436"
            cy="214"
            r="3.5"
            stroke="#d7d7d7"
            strokeOpacity="1"
            opacity="1"
          ></circle>
          <circle cx="460" cy="240" fill="#d7d7d7" r="4" opacity="1"></circle>
          <circle
            cx="460"
            cy="240"
            r="3.5"
            stroke="#d7d7d7"
            strokeOpacity="1"
            opacity="1"
          ></circle>
          <circle cx="560" cy="214" fill="#d7d7d7" r="4" opacity="1"></circle>
          <circle
            cx="560"
            cy="214"
            r="3.5"
            stroke="#d7d7d7"
            strokeOpacity="1"
            opacity="1"
          ></circle>
          <circle cx="560" cy="197" fill="#d7d7d7" r="4" opacity="1"></circle>
          <circle
            cx="560"
            cy="197"
            r="3.5"
            stroke="#d7d7d7"
            strokeOpacity="1"
            opacity="1"
          ></circle>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#DF45A5] to-[#9534E8] bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Success
            </motion.h1>
            <motion.div
              className="p-4 sm:p-5 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-red-400 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src="https://i.ibb.co/kVZ3CN6/trophy.png"
                alt="trophy"
                className="w-20 sm:w-24 drop-shadow-[0_0_30px_rgba(255,195,0,0.6)]"
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </div>
        <style>
          {`
         
           @keyframes pulseAnimation {
            0% {
              stroke-dashoffset: -500;
            }
            
            100% {
              stroke-dashoffset: 500;
            }
          }

          .path-pulse {
            animation: pulseAnimation 4s ease-in-out infinite;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default AnimatedSvg;
