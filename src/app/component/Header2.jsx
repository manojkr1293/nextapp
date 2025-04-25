import { IoMdPulse, IoMdMenu } from "react-icons/io";
export const Header2 = () => {
  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-10 py-5 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-blue-800 tracking-wide">
          SANKALPX
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 text-lg font-medium">
          {["Home", "Features", "Pricing", "Testimonials"].map((item) => (
            <a key={item} href="#" className="hover:text-blue-700 transition">
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-800"
        >
          <IoMdMenu />
        </button>

        <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl shadow-md transition">
          Join Now
        </button>
      </header>
    </>
  );
};
