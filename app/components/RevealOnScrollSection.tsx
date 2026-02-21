"use client";
import "../styles/scrollAnimations.css";
import ScrollBlocks from "./ScrollBlocks";
import React from "react";

export const BLOCKS = [
  {
    animation: "fade-in-blur",
    className: "bg-linear-to-r to-sky-500 from-sky-600",
    name: "Fade + Blur",
  },
  {
    animation: "scale-in",
    className: "bg-linear-to-r to-rose-500 from-rose-600",
    name: "Scale In",
  },
  {
    animation: "slide-in-left",
    className: "bg-linear-to-r to-amber-500 from-amber-600",
    name: "Slide from Left",
  },
  {
    animation: "slide-in-right",
    className: "bg-linear-to-r to-indigo-500 from-indigo-600",
    name: "Slide from Right",
  },
];

const RevealOnScrollSection = () => {
  return (
    <section
      id="reveal-on-scroll-section"
      className="my-10 max-sm:px-2 max-w-7xl overflow-x-hidden mx-auto px-10 sm:px-6 lg:px-8"
    >
      <h2 className="title">Scroll Reveal Animations</h2>
      <p className="paragraph mb-7">
        Scroll and observe the animation reveal effect.
      </p>
      <div className="grid rounded-md max-sm:px-3 max-w-200 px-10 bg-slate-300 dark:bg-slate-900 py-10 mx-auto grid-cols-1 gap-8">
        {BLOCKS.map((block, index) => (
          <ScrollBlocks key={index} index={index} block={block} />
        ))}
      </div>
    </section>
  );
};

export default RevealOnScrollSection;
