"use client";
import "../styles/pageAnimations.css";
import React, { useEffect, useState } from "react";
import { useAnimationContext } from "./context/AnimationContext";
import { PlayIcon } from "@heroicons/react/16/solid";
import { OptionsToGetCssValues } from "../types";
import Code from "./functions/CodeClass";
import { CSS_TIMING_FUNCTIONS } from "./GlobalControls";
const TimingFunctionBox = () => {
  const [play, setPlay] = useState(false);

  const defaultSettings: OptionsToGetCssValues = {
    infinite: false,
    delay: 0,
    duration: 1,
    animationName: "slide-right",
    timingFunction: "ease-in-out",
    fillMode: "forwards",
  };
  const [settings, setSettings] = useState(defaultSettings);
  const dynamicTimigSettings: OptionsToGetCssValues = {
    ...defaultSettings,
    timingFunction: settings.timingFunction,
  };
  const linearSettings: OptionsToGetCssValues = {
    ...defaultSettings,
    timingFunction: "linear",
  };
  const LinearValues = Code.getAnimationValues(linearSettings);
  const DynamicTimingValues = Code.getAnimationValues(dynamicTimigSettings);
  function handleAnimateEnd() {
    setTimeout(() => {
      setPlay(false);
    }, 800);
  }
  function handleSetTimgingFunction(
    timingFn: (typeof CSS_TIMING_FUNCTIONS)[number],
  ) {
    if (!play) {
      setSettings({ ...settings, timingFunction: timingFn });
    }
  }
  function handlePlay() {
    setPlay(true);
  }
  return (
    <section className="w-[calc(100vw-2rem)] max-w-170 mx-auto my-10">
      <h2 className="dark:text-gray-600 text-slate-700 font-bold text-center text-lg">
        Try the different timing functions
      </h2>
      <div className="rounded-md bg-gray-300 dark:bg-gray-900 flex flex-col gap-2 p-2">
        <div className="relative h-10 w-full">
          <div
            style={{ animation: play ? DynamicTimingValues : "" }}
            onAnimationEnd={handleAnimateEnd}
            className="squeare-basic bg-linear-to-br from-rose-500 to-purple-600 drop-shadow-lg drop-shadow-rose-300/70"
          ></div>
        </div>
        <span className="absolute max-sm:text-xl text-gray-400 text-4xl dark:text-gray-600 font-extrabold text-center -translate-x-1/2 -translate-y-1/2 left-1/2 mt-5">
          {settings.timingFunction}
        </span>
        <div className="relative h-10 w-full">
          <div
            style={{ animation: play ? LinearValues : "" }}
            onAnimationEnd={handleAnimateEnd}
            className="squeare-basic bg-linear-to-br from-emerald-500 to-teal-400 drop-shadow-lg drop-shadow-emerald-300/70"
          ></div>
          <span className="absolute max-sm:text-xl text-gray-400 text-4xl dark:text-gray-600 font-extrabold text-center -translate-x-1/2 -translate-y-1/2 left-1/2 mt-5">
            linear
          </span>
        </div>
      </div>
      <div className="flex p-2 gap-2 items-center flex-wrap">
        <button
          aria-label="play animation"
          onClick={handlePlay}
          className="shadow-sm inline-block group border-neutral-400 shadow-neutral-500/50
          bg-gray-200 hover:bg-gray-300 cursor-pointer dark:hover:bg-gray-700 dark:bg-neutral-950 p-1 mt-2 rounded border
          dark:border-gray-600 font-bold"
        >
          <PlayIcon
            aria-hidden="true"
            width={26}
            className="stroke-neutral-600 dark:stroke-white fill-transparent
            group-hover:fill-neutral-900 
            dark:group-hover:fill-white transition-colors"
          />
        </button>
        {CSS_TIMING_FUNCTIONS.map((timingFn, index) => (
          <button
            key={index}
            disabled={play}
            onClick={() => handleSetTimgingFunction(timingFn)}
            className={`
              disabled:opacity-70 disabled:cursor-not-allowed py-1 transition-colors rounded-full shadow-md shadow-neutral-600/50 px-3
              ${
                timingFn === settings.timingFunction
                  ? "dark:bg-gray-200 dark:hover:bg-gray-300 text-gray-50 dark:text-slate-950 hover:bg-gray-700 bg-neutral-950 mt-2 rounded shadow-sm border dark:border-gray-400 border-gray-600 cursor-pointer"
                  : "bg-gray-50 hover:bg-gray-300 dark:text-gray-50 text-slate-950 dark:hover:bg-gray-700 dark:bg-neutral-950 mt-2 rounded shadow-sm border border-gray-400 dark:border-gray-600 cursor-pointer"
              }
            `}
          >
            {timingFn}
          </button>
        ))}
        <span className="text-gray-950 mt-2 dark:text-gray-50">
          duration: {settings.duration}s
        </span>
      </div>
    </section>
  );
};

export default TimingFunctionBox;
