import FreeTrialButton from "./FreeTrialButton";
import focus from "../../../public/images/focus.png";

const Footer = () => {
  return (
    <section className="relative bg-purple-400 bg-no-repeat py-20 px-6 bg-contain bg-center sm:bg-[url('/images/focus.png')] bg-none">
      <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Column 1 */}
        <div>
          <div className="text-4xl sm:text-5xl font-semibold mb-6 bg-gradient-to-r from-[#DF45A5] to-[#9534E8] bg-clip-text text-transparent">
            SankalpX
          </div>
          <p className="text-sm leading-6 text-gray-600 font-medium">
            We understand that every student has different needs and
            capabilities, which is why we create such a wonderful and unique
            curriculum that is the best fit for every student.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Important Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 font-medium">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Register</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Popular Exams
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 font-medium">
            <li>IIT JEE</li>
            <li>NEET</li>
            <li>GATE</li>
            <li>NDA</li>
            <li>UPSC</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            NCERT Solutions
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 font-medium">
            <li>Class 6</li>
            <li>Class 7</li>
            <li>Class 8</li>
            <li>Class 9</li>
            <li>Class 10</li>
            <li>Class 11</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
