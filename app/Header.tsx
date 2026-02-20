import React from "react";

const Header = () => {
  return (
    <header className="border-b pt-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <h2 className="text-2xl  font-bold text-gray-900 dark:text-white">
          Snow Animations
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2"></p>
      </div>
    </header>
  );
};

export default Header;
