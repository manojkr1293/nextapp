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
    <section className="bg-blue-50 px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        What Students Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <Slider {...sliderSettings}>
          {testimonials.map(({ name, text, avatar }, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-xl"
            >
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-200">
                  <span className="text-3xl">{avatar}</span>
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">“{text}”</p>
              <p className="text-blue-800 font-semibold">{name}, NEET 2024</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
