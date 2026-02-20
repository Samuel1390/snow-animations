"use client";
import animations from "../animations";
import React, { useState } from "react";
import AnimationCard from "./AnimationCard";

const AnimationCardsCollection = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animations
          .slice(0, showAll ? animations.length : 12)
          .map((anim, index) => (
            <AnimationCard
              indexData={index}
              key={anim.name}
              name={anim.name}
              infinite={anim.infinite}
              cssClass={anim.name}
              description={anim.description}
              globalPlay={false}
            />
          ))}
      </div>
      <div className="flex w-full my-6 justify-center">
        <button
          onClick={() => setShowAll(true)}
          hidden={showAll}
          className="text-gray-800 font-bold shadow-md dark:hover:bg-slate-700 shadow-neutral-800
        hover:bg-gray-400 hover:text-white hover:scale-105 dark:hover:text-sky-400
        transition-all
        cursor-pointer from-neutral-300 to-400 px-6 dark:text-neutral-50 py-2"
        >
          View all animations
        </button>
      </div>
    </section>
  );
};

export default AnimationCardsCollection;
