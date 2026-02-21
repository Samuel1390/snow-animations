import React from "react";
import Logo from "./components/Logo";
const Header = () => {
  return (
    <header className="border-b pt-2 z-1000 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0">
      <div className="max-w-6xl flex justify-between items-center w-screen mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center gap-4">
          <Logo
            background={"linear-gradient(45deg, #ddd, #fff)"}
            color={"#000"}
          />
          <h2
            title="Snow animations"
            className="text-2xl max-sm:text-xl font-bold text-gray-900 dark:text-white"
          >
            Snow Animations
          </h2>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex space-x-4">
            <li>
              <a
                title="Animations collection"
                href="#animation-collection-section"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Animations
              </a>
            </li>
            <li>
              <a
                title="Reveal on scroll animations"
                href="#reveal-on-scroll-section"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Scroll Reveal
              </a>
            </li>
            <li>
              <a
                title="Squential animations"
                href="#sequential-animations-section"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Sequential Grid
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
