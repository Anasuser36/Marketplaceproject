
const Footer = () => {
  return (
    <footer className="bg-white-900 text-black py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        {/* Row 2: Navigation Links and Subscribe Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-8">
          {/* Column 1: Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-black-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-black-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black-400hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/press" className="text-black-400 hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-black-400 hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-black-400 hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/terms" className="text-black-400 hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-black-400 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Additional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-black-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/docs" className="text-black-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/partners" className="text-black-400 hover:text-white transition">
                  Partners
                </a>
              </li>
              <li>
                <a href="/developer" className="text-black-400 hover:text-white transition">
                  Developers
                </a>
              </li>
            </ul>
          </div>

           {/* Column 4: Resources*/}
           <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-black-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/docs" className="text-black-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/partners" className="text-black-400 hover:text-white transition">
                  Partners
                </a>
              </li>
              <li>
                <a href="/developer" className="text-black-400 hover:text-white transition">
                  Developers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <form className="flex items-center">
              <input 
                type="email"
                placeholder="Your Email"
                className=" border-3 w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mb-4">
              Sign up for our newsletter to get the latest updates and offers.
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} YourBrand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;