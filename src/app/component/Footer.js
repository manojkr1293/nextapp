import FreeTrialButton from "./FreeTrialButton";

const Footer = () => {
  return (
    <div className="relative py-20 bg-gradient-to-t from-slate-200 overflow-hidden">
      {/* Left Gradient Effect */}
      <div
        className="absolute w-[755px] h-[650px] top-0 left-0 animate-gradientShift"
        style={{
          background: "radial-gradient(circle, rgba(75,85,99,0.6) 0%, rgba(75,85,99,0) 100%)",
          opacity: 1,
        }}
      />

      {/* Right Green Gradient Animation */}
      <div
        className="absolute w-[755px] h-[650px] top-0 right-0 animate-greenGradient"
        style={{
          background: "radial-gradient(circle, rgba(34,197,94,0.6) 0%, rgba(34,197,94,0) 100%)",
          opacity: 1,
        }}
      />

     

      <div className="relative grid grid-cols-4 mx-auto max-w-7xl gap-10">
        <div>
          <div className="text-5xl font-semibold mb-10 bg-gradient-to-r from-[#DF45A5] to-[#9534E8] bg-clip-text text-transparent">
            SankalpX
          </div>
          <p className="py-5 text-gray-600 font-semibold text-sm leading-6">
            We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium text-gray-800">Important Links</h2>
          <ul className="list-none py-5 leading-6 text-sm text-gray-600 font-semibold">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Register</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-medium text-gray-800">Popular Exams</h2>
          <ul className="list-none py-5 leading-6 text-sm text-gray-600 font-semibold">
            <li>IIT JEE</li>
            <li>NEET</li>
            <li>GATE</li>
            <li>NDA</li>
            <li>UPSC</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-medium text-gray-800">NCERT Solutions</h2>
          <ul className="list-none py-5 leading-6 text-sm text-gray-600 font-semibold">
            <li>NCERT Solutions For Class 6</li>
            <li>NCERT Solutions For Class 7</li>
            <li>NCERT Solutions For Class 8</li>
            <li>NCERT Solutions For Class 9</li>
            <li>NCERT Solutions For Class 10</li>
            <li>NCERT Solutions For Class 11</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
