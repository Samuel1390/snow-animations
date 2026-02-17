import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div
      className="max-w-10/12 mx-auto group relative w-80 cursor-pointer overflow-hidden rounded-2xl 
                    bg-white shadow-lg transition-all duration-500  
                    dark:bg-gray-900 dark:shadow-none dark:border dark:border-gray-800"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src="https://images.fineartamerica.com/images-medium-large-5/1-octopus-israel-reynold-mainse.jpg" // Place your image in public/images/
          alt="The intelligent octopus"
          fill
          className="aspect-video object-cover transition-transform duration-700 group-:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-:opacity-100" />
      </div>

      {/* Content Section */}
      <div className="p-2">
        <div className="flex items-center justify-between">
          <span
            className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 
                          dark:bg-blue-900/30 dark:text-blue-400"
          >
            Marine Life
          </span>
          <span className="text-[10px] text-gray-400">Did you know?</span>
        </div>

        <h3 className="mt-2 text-2xl font-extrabold text-gray-900 transition-colors dark:text-white">
          Triple Hearted
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          An{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            octopus
          </span>{" "}
          has three hearts and blue blood. When they swim, the heart that
          delivers blood to the body actually stops beating, which is why they
          prefer crawling!
        </p>

        {/* Animated Bottom Bar */}
        <div className="mt-2 h-1 w-0 bg-blue-500 transition-all duration-500 group-:w-full" />
      </div>
    </div>
  );
};

export default Card;
