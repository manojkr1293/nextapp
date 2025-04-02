'use client';

import { useEffect } from 'react';

export default function QuotePage() {
  useEffect(() => {
    const quoteWrapper = document.querySelector('.quote');
    if (!quoteWrapper) return;
    
    let quote = quoteWrapper.textContent.trim();
    let words = quote.split(' ');
    
    words = words.map((word) => {
      let letters = word.split('').map(
        (letter) => `<span class='inline-block letter'>${letter}</span>`
      );
      return `<div class='inline-block'>${letters.join('')}</div>`;
    });
    
    quoteWrapper.innerHTML = words.join("<span class='inline-block w-2'></span>");
    
    let letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = 50 * index + 'ms';
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full text-white overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500">
      {/* Quote Section */}
      <main className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="quote text-5xl font-semibold font-caveat max-w-[30ch] leading-snug">Love is anirresistible desire to be irresistibly desired</p>
        <p className="author text-3xl font-patrick mt-4 flex items-center justify-center">
          <span className="inline-block h-1 w-6 bg-blue-500 mr-2"></span>Robert Frost
        </p>
      </main>

      {/* Animated Image Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-pink-800 opacity-80"></div>
        {[250, 200, 60, 40, 20].map((size, index) => (
          <div
            key={index}
            className="absolute bg-red-500 rounded-full overflow-hidden animate-rotate"
            style={{
              width: `calc(${size} * 1vh)`,
              height: `calc(${size} * 1vh)`,
              animationDelay: `${index * -300}ms`,
              inset: '-200%',
              margin: 'auto',
            }}
          >
            <img
              src="https://images.pexels.com/photos/4622976/pexels-photo-4622976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1920&w=2880"
              alt="Background"
              className="absolute w-[150vh] h-[150vh] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tailwind CSS Animations */}
      <style jsx>{`
        @keyframes rotate {
          95%, 100% {
            transform: rotate(0.3turn) scale(1.6);
          }
        }
        .animate-rotate {
          animation: rotate 15s infinite alternate-reverse cubic-bezier(0.68, -0.63, 0.53, 0.4);
        }
        @keyframes moveLetter {
          50% {
            transform: translateY(10%) translateX(-50%);
          }
        }
        .letter {
          display: inline-block;
          animation: moveLetter 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
