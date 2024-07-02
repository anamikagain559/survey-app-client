import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <img
            src="https://www.codewithfaraz.com/InstaPic.png"
            className="mr-3 h-10 w-auto"
            alt="CodewithFaraz Footer Logo"
          />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Get the latest Surveys!
                </h2>
                <p className="mt-4 text-gray-400">
                Have a survey idea or need assistance with your research? Don't hesitate to reach out. Let's collaborate and make your surveys impactful and insightful. Say hi 👋 and let's get started!
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <div className="relative max-w-lg">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-full border-gray-200 outline-none bg-gray-100 p-4 pe-32 text-sm font-medium"
                    id="email"
                    type="email"
                    placeholder="user@gamil.com"
                  />
                  <button
                    type="submit"
                    id="subsbtn"
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Quick Links</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <a
                    href="https://www.codewithfaraz.com"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/about-us"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/blog"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/contact"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/write-for-us"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Write For Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Components</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <a
                    href="https://www.codewithfaraz.com/components"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    HTML, CSS, and JS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/python-projects"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/csharp-projects"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    C#
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/questions"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Questions
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Useful Tools</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <a
                    href="https://www.codewithfaraz.com/tools/case-converter"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Case Converter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/tools/word-counter"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Word Counter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/tools/scrollbar-generator"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Slug Generator
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/tools"
                    className="transition hover:opacity-75 text-[#377DFF]"
                  >
                    View More
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Free Icons</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <a
                    href="https://www.codewithfaraz.com/icons/1/300-most-used-free-svg-icons-alarm-direction-devices-and-more"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    SVG
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/icons/2/get-high-quality-svg-icons-of-car-brands-logos-for-free"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Car SVG
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/icons/3/emoji-copy-and-paste-expressive-emoticons-for-every-mood-copyable-emojis"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Emojis
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/icons"
                    className="transition hover:opacity-75 text-[#377DFF]"
                  >
                    View More
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Category</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <a
                    href="https://www.codewithfaraz.com/category?tags=App"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    App
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/category?tags=Form"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Form
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/category?tags=Navbar"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Navbar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/category?tags=Landing%20Page"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Landing Page
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/category"
                    className="transition hover:opacity-75 text-[#377DFF]"
                  >
                    View More
                  </a>
                </li>
              </ul>
            </div>

            <ul
              style={{ listStyle: "none" }}
              className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end"
            >
              <li>
                <a
                  href="https://www.facebook.com/codewithfaraz"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:text-[#1877F2] text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.99H7.898v-2.887h2.54V9.867c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.887h-2.33V21.877C18.343 21.128 22 16.99 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/codewithfaraz"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:text-[#1DA1F2] text-gray-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.633 7.997c.014.2.014.402.014.603 0 6.134-4.67 13.201-13.201 13.201-2.624 0-5.061-.767-7.11-2.088.37.043.73.072 1.11.072a9.36 9.36 0 005.791-1.99 4.68 4.68 0 01-4.369-3.243c.284.043.568.072.853.072.407 0 .801-.043 1.179-.115a4.67 4.67 0 01-3.747-4.583v-.058c.629.35 1.346.57 2.109.594a4.676 4.676 0 01-2.08-3.896c0-.857.229-1.661.629-2.351a13.275 13.275 0 009.631 4.883 5.271 5.271 0 01-.115-1.071 4.671 4.671 0 014.669-4.669c1.343 0 2.56.566 3.417 1.488a9.326 9.326 0 002.977-1.134 4.62 4.62 0 01-2.051 2.578 9.335 9.335 0 002.688-.73 10.038 10.038 0 01-2.337 2.409z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/codewithfaraz"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:text-[#E4405F] text-gray-200"
                >
                  <span className="sr-only">Instagram</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
              </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/codewithfaraz"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:text-[#0077B5] text-gray-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M21.034 7.382c-.197-.738-.781-1.322-1.52-1.518C17.408 5 12 5 12 5s-5.408 0-7.514.864c-.739.197-1.323.78-1.52 1.518C2 9.488 2 12 2 12s0 2.512.966 4.618c.197.738.781 1.322 1.52 1.518C6.592 19 12 19 12 19s5.408 0 7.514-.864c.739-.197 1.323-.78 1.52-1.518C22 14.512 22 12 22 12s0-2.512-.966-4.618zM10 15V9l5 3-5 3z" clip-rule="evenodd" />
              </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <p className="text-center text-gray-400 py-6 text-sm">
          © 2024 Code with Anamika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;