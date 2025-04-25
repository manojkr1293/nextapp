// components/TestimonialCarousel.tsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    name: "Neha",
    text: "The AI-based analysis helped me identify and improve my weak areas. Highly recommended!",
    avatar: "👩‍🎓",
  },
  {
    name: "Aarav",
    text: "Mock tests felt like real NEET exams. My confidence shot up!",
    avatar: "👨‍🎓",
  },
  {
    name: "Simran",
    text: "Loved the solutions & detailed analytics. Easy to follow and helpful!",
    avatar: "👩‍⚕️",
  },
];

export default function TestimonialCarousel() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...sliderSettings}>
      {testimonials.map(({ name, text, avatar }, index) => (
        <div
          key={index}
          className="flex flex-col w-full max-w-7xl items-center justify-center text-center bg-blue-100 dark:bg-gray-700 p-8 rounded-xl mx-auto"
        >
          {/* Centered Avatar */}
          <div className="mb-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-300 dark:bg-blue-500 mx-auto">
              <span className="text-3xl leading-none">{avatar}</span>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-800 dark:text-gray-200 italic mb-3">
            “{text}”
          </p>

          {/* Name */}
          <p className="text-blue-900 dark:text-blue-300 font-semibold">
            {name}, NEET 2024
          </p>
        </div>
      ))}
    </Slider>
  );
}
