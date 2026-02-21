"use client";
import "../styles/pageAnimations.css";
import animations from "../animations";
import React, { useState } from "react";
import AnimationCard from "./AnimationCard";
import TimingFunctionBox from "./TimingFunctionBox";
import { useAnimationContext } from "./context/AnimationContext";
import GlobalControls from "./GlobalControls";

const AnimationCardsCollection = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
      <h2 className="title">Animation collection</h2>
      <p className="paragraph py-4 pb-2">
        Slimple animations to give life to your applications. for customize your
        own properties, click on the properties button and set it to &quot;
        <b>Custom</b>&quot; in the
        <b> global controls</b>, then you will can customize the duration,
        delay, timing function.
      </p>
      <GlobalControls context={useAnimationContext} />
      <div className="my-3">
        <TimingFunctionBox />
      </div>
      <div
        id="animation-collection-section"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {animations
          .slice(0, showAll ? animations.length : 12)
          .map((anim, index) => (
            <AnimationCard
              indexData={index}
              key={anim.name}
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
