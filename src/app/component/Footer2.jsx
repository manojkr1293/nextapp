export const Footer2 = () => {
  return (
    <>
      <footer className="bg-blue-300 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
              SankalpX
            </h4>
            <p className="text-sm">
              Your trusted companion for NEET preparation. Personalized
              AI-driven tools, mock tests & more.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@sankalpx.com"
                  className="hover:text-blue-600"
                >
                  contact@sankalpx.com
                </a>
              </li>
              <li>Phone: +91 9876543210</li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-blue-900 text-center text-xs text-gray-100 dark:text-gray-400  border-t py-6">
        © 2024 SankalpX®. All rights reserved.
      </div>
    </>
  );
};
