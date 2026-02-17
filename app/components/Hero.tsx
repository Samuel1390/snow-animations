import AnimateGrid from "./AnimateGrid";
import GitHubLink from "./GithubLink";
import React from "react";

const Hero = () => {
  return (
    <section
      className="dark:bg-black overflow-hidden relative min-h-100 flex 
    flex-col
    justify-center text-center items-center"
    >
      <h1
        className="animate-slide-in-bottom dark:text-white
      text-gray-950 relative z-30 text-center text-5xl my-5 mx-3 font-bold animate-fade-in"
      >
        Snow animations
      </h1>
      <p className="animate-slide-in-bottom relative z-30 delay-500 dark:text-gray-400 text-gray-700">
        Beautiful, ready-to-use CSS animations
        <span className="animate-tada text-2xl drop-shadow-md drop-shadow-rose-300 dark:drop-shadow-rose-700 font-extrabold text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-purple-600">
          {" "}
          FREE!{" "}
        </span>
        for developers. Click any card to copy the code.
      </p>
      <GitHubLink label="Repository" href="#" />
      <AnimateGrid />
    </section>
  );
};
export default Hero;
